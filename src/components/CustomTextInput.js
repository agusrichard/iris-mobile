import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'


export default (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={[styles.input, props.styles]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%'
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 8
  }
})