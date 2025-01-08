import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import styles from '@/constants/styles';

interface InputsProps {
  title: string;
  fieldType: 'text' | 'number' | 'email' | 'textarea' | 'radio' | 'checkbox';
  placeholder?: string;
  required: boolean;
  options?: string[]; // For radio and checkbox fields
}

export const Inputs = ({ title, fieldType, placeholder, required, options }: InputsProps) => {
  const [value, setValue] = useState('');
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
                  style={[
                    styles.radioCircle,
                    value === option && styles.radioSelected,
                  ]}
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
                  style={[
                    styles.checkboxBox,
                    selectedOptions.includes(option) && styles.checkboxSelected,
                  ]}
                />
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );

      default:
        return <Text>Invalid field type</Text>;
    }
  };

  return (
      <View style={styles.container}>
        <Text style={styles.label}>
          {title}
          {required && <Text style={styles.required}> *</Text>}
        </Text>
        {renderInput()}
      </View>
    );
};
