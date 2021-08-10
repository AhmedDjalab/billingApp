import React, { useState } from 'react';
import { Image  , SafeAreaView, View} from 'react-native';
import { ApiResponse } from 'apisauce';

import {
    Form,
    ErrorMessage,
    FormField,
    SubmitButton
} from '../../components/Forms';
import validationSchema from './validationSchema';
import auth from './api';
import { useAuthContext } from '../../auth/context';
import UserCredentials from './model';
import styles from './styles';
import LoginForm from '../../../LoginForm';

export default function LoginScreen() {
    const { login } = useAuthContext();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ email, password }: UserCredentials) => {
      try { 
          
        const result: ApiResponse<any> = await auth.login(email, password);
         console.log("ths is daaa loging g " , email , password)
        if (!result.ok) {
            setLoginFailed(true);
            return;
        }
        setLoginFailed(false);
        console.log("thos os data login " ,result.data["token"] )
        login( result.data["token"] );
    
    
    } catch (e){
            console.log("this is errros " , e)
        }
    };

    return (
        <SafeAreaView style={{paddingTop:40 , flex:1}}>

       
       
       <View style={styles.container}>
          <LoginForm   handleSubmit={handleSubmit} validationSchema={validationSchema} loginFailed={loginFailed}  />
        </View>
        </SafeAreaView>
    );
}
