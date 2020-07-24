import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
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


export default function Login() {
  
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
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
                placeholder="Username"
                onChangeText={handleChange('username')}
                value={values.username}
                autoCapitalize="none"
              />
              <ErrorText text={errors.username} />
              <CustomTextInput 
                placeholder="Email"
                onChangeText={handleChange('email')}
                value={values.email}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <ErrorText text={errors.email} />
              <CustomTextInput
                secureTextEntry
                placeholder="Password"
                onChangeText={handleChange('password')}
                value={values.password}
              />
              <ErrorText text={errors.password} />
              <CustomButton handlePress={handleSubmit} />
            </>
          )
        }}
      </Formik>
    </View>
  )
}

