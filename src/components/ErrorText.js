import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ text }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start'
  },
  text: {
    color: 'crimson',
    fontWeight: 'bold'
  }
})