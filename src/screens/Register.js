import React from 'react'
import { StyleSheet, ScrollView, Text, TextInput, View } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import globalStyles from '../assets/globalStyles'
import CustomTextInput from '../components/CustomTextInput'
import ErrorText from '../components/ErrorText'
import CustomButton from '../components/CustomButton'
import { TouchableOpacity } from 'react-native-gesture-handler'


const RegisterSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required')
})


export default function Register({ navigation }) {
  
  return (
    <View style={globalStyles.container}>
      <ScrollView 
        contentContainerStyle={globalStyles.scroll}
        showsVerticalScrollIndicator={false}  
      >
        <Text style={globalStyles.title}>Nice to meet you!</Text>
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          validationSchema={ RegisterSchema }
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
                <ErrorText text={ touched.username && errors.username} />
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
                <CustomButton handlePress={handleSubmit} text="Register"/>
                <TouchableOpacity style={{ marginTop: 10 }} onPress={ () => navigation.navigate('Login') }>
                  <Text style={globalStyles.mutedText}>Already has account? <Text style={globalStyles.link}>Here</Text></Text>
                </TouchableOpacity>
              </>
            )
          }}
        </Formik>
      </ScrollView>
    </View>
  )
}