import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

export default ({ text, style, handlePress }) => {
  return (
    <TouchableOpacity 
      style={[styles.container, style]}
      onPress={ handlePress }
    >
      <Text style={styles.text}>Submit</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#555',
    paddingVertical: 12,
    marginVertical: 10,
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    color: 'white'
  }
})