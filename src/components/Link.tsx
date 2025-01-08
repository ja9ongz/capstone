import React from 'react';
import { View, Text, TouchableOpacity, Linking} from 'react-native';

import { Row } from './Row';

import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '@/constants/styles';

export const TextLink =  ({ title, url, icon, type}: {title?:any; url?:any; icon?:any; type?:any}) => {
    const handlePress = () => {
        if (url) {
            Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
        }
    };

    return (   
        <View style={styles.LinkContainer}>
            {url && (
                <TouchableOpacity onPress={handlePress}>
                    <Text style={styles.linkText}>
                        {title}
                        <Text style={styles.linkIcon}>{icon}</Text>
                    </Text>
                </TouchableOpacity>
            )}
        </View> 
    );
};