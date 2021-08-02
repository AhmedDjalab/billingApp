import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from './App/auth/context';
import MainScreen from './App/screens/MainScreen/mainScreen';

export default function App() {
  const [user, setUser] = useState(null);

  return (
   
    <View style={styles.container}>
    <AuthContext.Provider value={{ user, setUser }}>
       <NavigationContainer>
         <MainScreen />
       </NavigationContainer>
    </AuthContext.Provider>
</View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
