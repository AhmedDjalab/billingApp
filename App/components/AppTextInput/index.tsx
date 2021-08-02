import React from 'react';
import { View, TextInput ,StyleSheet } from 'react-native';
import AppTextInputProps from './model';



export default function AppTextInput({
       style,
    ...otherProps 
   
}: AppTextInputProps)  {
    return (
          <TextInput
                style={[styles.inputStyle , style]}
                placeholderTextColor="#CFCFCF"
                {...otherProps}
              
            />
        
    );
}
const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        width: "100%",
        margin: 30
        , padding: 20

    },
    inputStyle: {
        fontSize: 14,
        borderWidth: 1,
        padding: 2,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: "#CFCFCF",
       

    },
    
})

