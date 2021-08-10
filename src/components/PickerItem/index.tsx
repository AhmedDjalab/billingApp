import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';


import PickerItemProps from './model';

export default function PickerItem({ item, onPress }: PickerItemProps) {
    return (
        <TouchableOpacity onPress={onPress}>

            <View style={styles.container} >
                <Text style={styles.text}>{item.label}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        paddingTop: 10,
    } ,
    text:{
        fontSize:18
    }
});