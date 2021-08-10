import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { AuthContext, useAuthContext } from './src/auth/context';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen/mainScreen';
import { createStackNavigator } from '@react-navigation/stack';
import authStorage from './src/auth/storage';
import AppLoading from 'expo-app-loading';
import navigationTheme from './src/navigation/navigationTheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [user, setUser] = useState(null);
  const { logout } = useAuthContext();

  const [isReady, setIsReady] = useState(false);
  const Stack = createStackNavigator() ;
  const restoreUser = async () => {
    const currentUser = await authStorage.getUser();
    console.log("this is from cach " , currentUser)
    if (currentUser) setUser(currentUser);
};

const handleLoadingError = () => {
    throw new Error('App loading error');
};
const handleLoadingFinish = () => setIsReady(true);
if (!isReady)
        return (
            <AppLoading
                startAsync={restoreUser}
                onError={handleLoadingError}
                onFinish={handleLoadingFinish}
            />
        );
  return (
   
    <View style={styles.container}>
    <AuthContext.Provider value={{ user, setUser }}>
       <NavigationContainer  theme={navigationTheme}> 
       {user ? <Stack.Navigator >
         <Stack.Screen  
       component={MainScreen} 
       name={"Billing"}
       options={{
        title: "Billing",
        headerTitleAlign: 'center',
        headerRight : () =>(
          <View style={styles.iconContainer}>
           <MaterialCommunityIcons
                            color="red"
                            name="logout"
                            size={30}
                            onPress={()=> setUser(null)}
                            
                        />
          
          </View>
        )
      }}
       
       /></Stack.Navigator> :<LoginScreen />}
       </NavigationContainer>
    </AuthContext.Provider>
</View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#fff',
   
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  }
});
