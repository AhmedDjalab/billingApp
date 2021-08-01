import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from './App/auth/context';
import LoginScreen from './App/screens/LoginScreen/loginScreen';

export default function App() {
  const [user, setUser] = useState(null);

  return (
   
    <View style={styles.container}>
    <AuthContext.Provider value={{ user, setUser }}>
       <NavigationContainer>
         <LoginScreen />
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
