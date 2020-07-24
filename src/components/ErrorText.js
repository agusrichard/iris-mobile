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
    alignSelf: 'flex-start',
    marginTop: 2,
    marginLeft: 8
  },
  text: {
    color: 'crimson',
    fontWeight: 'bold'
  }
})