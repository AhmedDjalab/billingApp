import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View  , TextInput, SafeAreaView} from 'react-native'

export default function LoginScreen() {
   let  [username,setUsername] = useState("");
   let  [password,setPassword] = useState("");
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.topLabelsContainer}>
              <Text style={{color:"black"}}>Add Product</Text>
              <Text style={styles.stateSelectedText}>State Selected: AL</Text>
        </View>
              
            <TextInput
            style={styles.inputStyle}
               placeholder="Enter Product Label"
               placeholderTextColor="#CFCFCF"
               onChangeText={text => setUsername(text)}
               value={username}
            />
             <View style = {styles.horizentalTextInput}>
             <TextInput
            style={[styles.inputStyle , styles.inputHrizentalStyle]}
               placeholder="Enter Price"
               placeholderTextColor="#CFCFCF"
               onChangeText={text => setUsername(text)}
               value={username}
            />
              <TextInput
            style={[styles.inputStyle , styles.inputHrizentalStyle]}
               placeholder="Enter Quantity"
               placeholderTextColor="#CFCFCF"
               onChangeText={text => setUsername(text)}
               value={username}
            />  
    <Text style={styles.stateSelectedText}>Add To List</Text>

             </View>

            //? building the table compoenents 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
    

    horizentalTextInput : {
     
        flexDirection:"row",
        justifyContent:"space-between"
        ,alignItems:"center" , 
        marginTop:10

    } ,
   stateSelectedText : {
    color: "#85B6D7" , 
   } , 

    topLabelsContainer : {
      
        flexDirection:"row"
        ,justifyContent:"space-between" , 
    
    
    },
    container:{
      flex:1,
      width:"100%" , 
     margin:30
     ,padding:20

    } , 
    inputStyle:{
        fontSize:14 , 
        borderWidth:1,
        padding:2,
     borderTopLeftRadius:5,
     borderTopRightRadius:5,
     borderBottomLeftRadius:5,
     borderBottomRightRadius:5,
        borderColor:"#CFCFCF", 

    } , 
    inputHrizentalStyle:{
    
     width:120
     
     
    }
})

