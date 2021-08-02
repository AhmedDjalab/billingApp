import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import AppButtonProps from './model';
import styles from './styles';
import colors from '../../config/colors';

export default function AppButton({
    color = colors.primary,
    textColor = "Black",
    title,
    onPress
}: AppButtonProps) {
    return (
        <TouchableOpacity
            //style={[{ backgroundColor: color }, styles.button]}
            onPress={onPress}>
            <Text style={{color:textColor}}>{title}</Text>
        </TouchableOpacity>
    );
}

