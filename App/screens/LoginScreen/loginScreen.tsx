import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View  , TextInput, SafeAreaView} from 'react-native'

export default function LoginScreen() {
   let  [username,setUsername] = useState("");
   let  [password,setPassword] = useState("");
    return (
        <SafeAreaView style={styles.container}>
            <Text>Ahmed is here </Text>
            <TextInput
               placeholder="Enter Product Label"
               onChangeText={text => setUsername(text)}
               value={username}
            />
             <TextInput
               placeholder="Password" 
               onChangeText={text => setUsername(text)}
               value={username}    
               secureTextEntry
               textContentType="password"
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      width:"100%" , 
      paddingTop:40 , // this is native margin in andriod phone we will use platform package lateer on 
    paddingLeft:20,
    }
})

