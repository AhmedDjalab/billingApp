import React from "react";
import { View } from "react-native";
import { ErrorMessage, Form, FormField, SubmitButton } from "./src/components/Forms";

export default function LoginForm({ handleSubmit, validationSchema, loginFailed }) {
  return (<Form 
    
    initialValues={{
    email: '',
    password: ''
  }} onSubmit={handleSubmit} validationSchema={validationSchema}>
    <ErrorMessage error="Invalid email and/or password" visible={loginFailed} />
    <View style={{
      paddingBottom: 20
    }}>
      <FormField testID="email" autoCapitalize="none" autoCorrect={false} icon="email" keyboardType="email-address" name="email" placeholder="Email" textContentType="emailAddress" />
    </View>
    <View style={{
      paddingBottom: 20
    }}>
      <FormField testID="password" autoCapitalize="none" autoCorrect={false} icon="lock" name="password" placeholder="Password" secureTextEntry textContentType="password" />
    </View>
    <SubmitButton testID="LoginButton" title="Login" contained={true} />
  </Form>);
}

