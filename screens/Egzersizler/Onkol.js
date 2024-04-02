import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Onkol() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ÖN KOL</Text>
      <Text style={styles.aciklama}>Ön kol egzersizi olan bilek curl, ön kol kaslarını güçlendirmek ve geliştirmek için etkili bir yöntemdir. Bu egzersiz, özellikle ön kolun ön kısmında bulunan ön kol fleksörlerini hedefler. Egzersizi gerçekleştirmek için, ayakta veya oturur pozisyonda bir sandalyeye oturulur ve her iki elde bir dambıl veya kettlebell gibi ağırlıklar tutulur. Avuç içleri yukarıya bakacak şekilde kollar vücuda yakın tutulur ve dirsekler sabitlenir. Sonrasında, ağırlıklar yukarı doğru kaldırılarak ön kolları çalıştıracak şekilde hareket yapılır ve en üst noktada bir saniye kadar durulur. Daha sonra, kontrollü bir şekilde başlangıç pozisyonuna geri dönülür.</Text>
      <Image source={require('../../assets/önkol.webp')} style={styles.backgroundImage} /> 
      <Image source={require('../../assets/önkol2.jpg')} style={styles.backgroundImage} /> 
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
    
    fontSize: 35,
    fontFamily:"serif",
  },
  aciklama: {
    alignSelf: "flex-start",
    margin:25,
    fontSize: 16,
    fontFamily:"cursive",
  },
  backgroundImage:{
    width:390,
    height:260,
  }
})