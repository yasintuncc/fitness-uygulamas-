import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Bacak() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bacak</Text>
      <Text style={styles.aciklama}>Bacak başlığının açıklaması</Text>
      <Image source={require('../../assets/deneme.gif')} style={styles.backgroundImage} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 24,
  },
  aciklama: {
    alignSelf: "flex-start",
    margin:20
  },
  backgroundImage:{
    width:"100%",
    height:"100%"
  }
})