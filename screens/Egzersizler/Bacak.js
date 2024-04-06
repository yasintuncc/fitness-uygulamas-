import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Bacak() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BACAK HAREKETİ</Text>
      <Text style={styles.aciklama}>bacak kaslarını güçlendirmek ve dengeyi artırmak için etkili bir egzersizdir. Başlamak için ayakta durun ve vücudunuzu dik tutun. Ellerinizi belinizin yanında veya önünde birleştirin. Bir bacağınızı öne doğru adım atın ve diğer bacağınızın dizini hafifçe bükün. Ön bacağınızın dizinin ayak bileğinizle hizalandığından emin olun ve baldırınızı yere paralel olacak şekilde bükün. Ardından, öne doğru adım attığınız bacağınızı geri çekerek başlangıç pozisyonuna dönün. Diğer bacağınızla aynı hareketi tekrarlayın. Bu egzersiz, bacaklarınızın ön ve arka kısımlarını güçlendirirken aynı zamanda kalça ve çekirdek kaslarını da çalıştırır. </Text>
      <Image source={require('../../assets/deneme.gif')} style={styles.backgroundImage} />
      <Image source={require('../../assets/bacak.gif')} style={styles.backgroundImage} />
      
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
    width:250,
    height:265,
  }
})