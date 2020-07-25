import React from 'react'
import { StyleSheet, ScrollView, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import globalStyles from '../assets/globalStyles'
import CustomTextInput from '../components/CustomTextInput'
import ErrorText from '../components/ErrorText'
import CustomButton from '../components/CustomButton'


const LoginSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required')
})


export default function Login({ navigation }) {
  
  return (
    <View style={globalStyles.container}>
      <ScrollView 
        contentContainerStyle={globalStyles.scroll}
        showsVerticalScrollIndicator={false}  
      >
        <Text style={globalStyles.title}>Hi, Welcome Back!</Text>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={ LoginSchema }
          onSubmit={(values) => {
            console.log('values', values)
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => {
            console.log('errors', errors)
            console.log('touched', touched)
            return (
              <>
                <CustomTextInput 
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  value={values.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <ErrorText text={ touched.email && errors.email} />
                <CustomTextInput
                  secureTextEntry
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  value={values.password}
                />
                <ErrorText text={ touched.password && errors.password} />
                <CustomButton handlePress={handleSubmit} text="Login"/>
                <TouchableOpacity style={{ marginTop: 10 }} onPress={ () => navigation.navigate('Register') }>
                  <Text style={globalStyles.mutedText}>Have no account yet? <Text style={globalStyles.link}>Here</Text></Text>
                </TouchableOpacity>
              </>
            )
          }}
        </Formik>
      </ScrollView>
    </View>
  )
}
