import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import Slider from '@react-native-community/slider'; 
import { Row } from './Row';
import styles from '@/constants/styles';

interface InputsProps {
  title: string;
  fieldType: 'text' | 'number' | 'email' | 'textarea' | 'radio' | 'checkbox' | 'select' | 'slider' | 'toggle'; // Added slider and toggle
  placeholder?: string;
  required: boolean;
  options?: string[]; 
  min?: number; 
  max?: number; 
  step?: number; 
  value?: number; 
}

export const Inputs = ({ title, fieldType, placeholder, required, options, min, max, step, value: initialValue }: InputsProps) => {
  const [value, setValue] = useState(initialValue || '');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxToggle = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const renderInput = () => {
    switch (fieldType) {
      case 'text':
      case 'number':
      case 'email':
        return (
          <TextInput
            style={styles.input}
            onChangeText={(text) => setValue(text)}
            value={value}
            placeholder={placeholder}
            keyboardType={
              fieldType === 'number'
                ? 'numeric'
                : fieldType === 'email'
                ? 'email-address'
                : 'default'
            }
          />
        );

      case 'textarea':
        return (
          <TextInput
            style={[styles.input, styles.textarea]}
            onChangeText={(text) => setValue(text)}
            value={value}
            placeholder={placeholder}
            multiline
            numberOfLines={4}
          />
        );

      case 'radio':
        return (
          <View style={styles.optionsContainer}>
            {options?.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.radioOption}
                onPress={() => setValue(option)}
              >
                <View
                  style={[styles.radioCircle, value === option && styles.radioSelected]}
                />
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );

      case 'checkbox':
        return (
          <View style={styles.optionsContainer}>
            {options?.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.checkboxOption}
                onPress={() => handleCheckboxToggle(option)}
              >
                <View
                  style={[styles.checkboxBox, selectedOptions.includes(option) && styles.checkboxSelected]}
                />
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );

      case 'select':
        return (
          <Picker
            selectedValue={value}
            onValueChange={(itemValue) => setValue(itemValue)}
            style={[styles.input, { paddingLeft: 14, paddingRight: 14, paddingTop: 25, paddingBottom: 25 }]}
          >
            {options?.map((option, index) => (
              <Picker.Item key={index} label={option} value={option} />
            ))}
          </Picker>
        );

        case 'slider':
          return (
            <View style={styles.sliderContainer}>
              <Slider
                style={styles.slider} // Apply slider style
                minimumValue={min}
                maximumValue={max}
                step={step}
                value={value}
                onValueChange={(val) => setValue(val)}
                minimumTrackTintColor="#9251DB"
                maximumTrackTintColor="#CDD9E3"
                thumbTintColor="#9251DB"
                />
                <View style={styles.sliderLabelContainer}>
                  <View style={styles.minMaxContainer}>
                    <Text style={styles.minMaxLabel}>{min} day</Text> {/* Minimum label */}
                    <Text style={styles.sliderLabel}>
                        {Math.round(value)} day{Math.round(value) > 1 ? 's' : ''}
                    </Text>
                    <Text style={styles.minMaxLabel}>{max} days</Text> {/* Maximum label */}
                  </View>
                </View>

            </View>
          );

      case 'toggle': // Added toggle case
        return (
          <View style={styles.toggleItem}>
            <Switch
              value={!!value}
              onValueChange={(newValue) => setValue(newValue ? 1 : 0)}
            />
          </View>
        );

      default:
        return <Text>Invalid field type</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {fieldType === 'toggle' ? (
        <View style={styles.toggleContainer}>
            <Text style={styles.toggleLabel}>
              {title}
              {required && <Text style={styles.required}> *</Text>}
            </Text>
            {renderInput()} 
        </View>
      ) : (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            {title}
            {required && <Text style={styles.required}> *</Text>}
          </Text>
          {renderInput()} 
        </View>
      )}
    </View>
  );
};