import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Todo from './Components/Todo'

export default function App() {

  return (
    <View style={styles.app}>
      <StatusBar backgroundColor={"black"}></StatusBar>

      <ScrollView>

      <Todo></Todo>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  app:{
    flex:1,
    backgroundColor:"#222"  // for black gray
  }
})