import React from 'react';
import { PieChart, BarChart } from 'react-native-gifted-charts';
import { View, Text, Dimensions } from 'react-native';

import styles from '@/constants/styles';

export const Graph = ({ type }: { type?: string }) => {
  const width = Dimensions.get('window').width;

  const stackedColors = [
    { purplebackgroundColor: '#E697FF', purpleborderColor: '#9251DB' }, // purple
    { bluebackgroundColor: '#4D81E7', blueborderColor: '#165BAA' }, // blue
    { pinkbackgroundColor: '#FFA5CB', pinkborderColor: '#F765A3' }, // pink
  ];

  const pieData = [
    { value: 50, color: stackedColors[1].bluebackgroundColor , gradientCenterColor: stackedColors[1].bluebackgroundColor, focused: true },
    { value: 35, color: stackedColors[0].purpleborderColor, gradientCenterColor: stackedColors[0].purpleborderColor },
    { value: 15, color: stackedColors[2].pinkborderColor, gradientCenterColor: stackedColors[2].pinkborderColor },
  ];

  const stackData = [
    {
      stacks: [
        { value: 10, color: stackedColors[1].bluebackgroundColor, borderColor: stackedColors[1].blueborderColor }, 
        { value: 20, color: stackedColors[0].purplebackgroundColor, borderColor: stackedColors[0].purpleborderColor, marginBottom: 2 }],
      label: 'Jan',
    },
    {
      stacks: [
        { value: 10, color: stackedColors[0].purplebackgroundColor, borderColor: stackedColors[0].purpleborderColor, }, 
        { value: 11, color: stackedColors[1].bluebackgroundColor, borderColor: stackedColors[1].blueborderColor, marginBottom: 2 }, 
        { value: 15, color: stackedColors[2].pinkbackgroundColor, borderColor: stackedColors[2].pinkborderColor, marginBottom: 2 }],
      label: 'Mar',
    },
    {
      stacks: [
        { value: 14, color: stackedColors[1].bluebackgroundColor, borderColor: stackedColors[1].blueborderColor, }, 
        { value: 18, color: stackedColors[0].purplebackgroundColor, borderColor: stackedColors[0].purpleborderColor, marginBottom: 2 }],
      label: 'Feb',
    },
    {
      stacks: [
        { value: 7, color: stackedColors[1].bluebackgroundColor, borderColor: stackedColors[1].blueborderColor,}, 
        { value: 11, color: stackedColors[2].pinkbackgroundColor, borderColor: stackedColors[2].pinkborderColor, marginBottom: 2 }, 
        { value: 10, color: stackedColors[0].purplebackgroundColor, borderColor: stackedColors[0].purpleborderColor, marginBottom: 2 }],
      label: 'Mar',
    },
  ];

    const legends = [
        { color: '#4D81E7', label: 'Spendings' },
        { color: '#F765A3', label: 'Earned' },
        { color: '#9251DB', label: 'Savings' },
    ];

  const renderDot = (color: string) => (
    <View style={[styles.dot, { backgroundColor: color }]} />
  );

  const renderLegendComponent = () => (
    <View style={styles.legendContainer}>
      <View style={styles.row}>
        {renderDot('#4D81E7')}
        <Text style={styles.legendText}>Spendings</Text>
      </View>
      <View style={styles.row}>
        {renderDot('#F765A3')}
        <Text style={styles.legendText}>Earned</Text>
      </View>
      <View style={styles.row}>
        {renderDot('#9251DB')}
        <Text style={styles.legendText}>Savings</Text>
      </View>
    </View>
  );

  if (type === 'pie') {
    return (
      <View style={styles.graphContainer}>
        <PieChart
          data={pieData}
          donut
          showGradient
          sectionAutoFocus
          radius={90}
          innerRadius={60}
          innerCircleColor="#232B5D"
          centerLabelComponent={() => (
            <View style={styles.centerLabel}>
              <Text style={styles.centerText}>47%</Text>
              <Text style={styles.centerSubText}>Excellent</Text>
            </View>
          )}
        />
        {renderLegendComponent()}
      </View>
    );
  }

  if (type === 'bar') {
    return (
        <>
      <View style={styles.graphContainer}>
        <BarChart
          width={width - 200}
          barWidth={16}
          spacing={40}
          noOfSections={4}
          barBorderRadius={6}
          stackData={stackData}
          parentWidth = {width}
          autoShiftLabels = {true}
          rotateLabel={true}
          xAxisLabelTextStyle={{
            fontSize: 12,
            color: 'black', // Change text color
            fontWeight: '400', // Customize font weight
            textAlign: 'center',
          }}
          yAxisTextStyle={{
            fontSize: 12,
            color: 'black', // Change text color
            fontWeight: '400', // Customize font weight
            textAlign: 'center',
          }}
          
        />
      </View>

        <View style={styles.row}>
            {legends.map((legend, index) => (
                <View key={index} style={styles.row}>
                <View style={{ width: 10, height: 10, borderRadius:10, backgroundColor: legend.color, marginRight: 5 }} />
                <Text style={{ fontSize: 12, color: 'black' }}>{legend.label}</Text>
                </View>
            ))}
        </View>
        </>
    );
  }

  return null;
};
