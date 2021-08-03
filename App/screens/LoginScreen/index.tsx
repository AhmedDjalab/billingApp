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

export default function LoginScreen() {
    const { login } = useAuthContext();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ email, password }: UserCredentials) => {
      try { const result: ApiResponse<any> = await auth.login(email, password);
         
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
            {/* <Image
                source={require('../assets/logo-red.png')}
                style={styles.logo}
            /> */}
            <Form
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>
                <ErrorMessage
                    error="Invalid email and/or password"
                    visible={loginFailed}
                />
              <View style={{paddingBottom:20}}>
                   <FormField
                  
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
              </View>
              <View style={{paddingBottom:20}}>
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="password"
                    secureTextEntry
                    textContentType="password"
                />
                </View>
                <SubmitButton title="Login" contained={true}/>
            </Form>
        </View>
        </SafeAreaView>
    );
}
