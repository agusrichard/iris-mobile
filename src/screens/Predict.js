import React from 'react'
import { StyleSheet, ScrollView, Text, TextInput, View } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import globalStyles from '../assets/globalStyles'
import CustomTextInput from '../components/CustomTextInput'
import ErrorText from '../components/ErrorText'
import CustomButton from '../components/CustomButton'


const PredictSchema = yup.object().shape({
  sepalLength: yup.string().required('Please provide sepal length'),
  sepalWidth: yup.string().required('Please provide sepal width'),
  petalLength: yup.string().required('Please provide petal length'),
  petalWidth: yup.string().required('Please provide sepal width'),
})


export default function Predict() {
  
  return (
    <View style={globalStyles.container}>
      <ScrollView 
        contentContainerStyle={globalStyles.scroll}
        showsVerticalScrollIndicator={false}  
      >
        <Text style={styles.title}>Get The Prediction Here</Text>
        <Text style={styles.result}>--- Result ---</Text>
        <Formik
          initialValues={{ sepalLength: '', sepalWidth: '', petalLength: '', petalWidth: '' }}
          validationSchema={ PredictSchema }
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
                  placeholder="Sepal Length"
                  onChangeText={handleChange('sepalLength')}
                  value={values.sepalLength}
                  keyboardType="decimal-pad"
                />
                <ErrorText text={ touched.sepalLength && errors.sepalLength} />

                <CustomTextInput 
                  placeholder="Sepal Width"
                  onChangeText={handleChange('sepalWidth')}
                  value={values.sepalWidth}
                  keyboardType="decimal-pad"
                />
                <ErrorText text={ touched.sepalWidth && errors.sepalWidth} />

                <CustomTextInput 
                  placeholder="Petal Length"
                  onChangeText={handleChange('petalLength')}
                  value={values.petalLength}
                  keyboardType="decimal-pad"
                />
                <ErrorText text={ touched.petalLength && errors.petalLength} />

                <CustomTextInput 
                  placeholder="Petal Width"
                  onChangeText={handleChange('petalWidth')}
                  value={values.petalWidth}
                  keyboardType="decimal-pad"
                />
                <ErrorText text={ touched.petalWidth && errors.petalWidth} />

                <CustomButton handlePress={handleSubmit} text="Predict"/>
              </>
            )
          }}
        </Formik>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    color: '#000',
    marginBottom: 14,
    marginTop: -10
  },
  result: {
    fontSize: 18,
    marginBottom: 32
  }
})