import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Deadliftt() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>
      DEADLİFT 
    </Text>
    <Text style={styles.aciklama}>
    Deadlift, alt vücut ve bel kaslarını güçlendirmek için kullanılan temel bir bileşik egzersizdir. Ayakta dururken, ayaklarınızı kalça genişliğinde açarak ve dambılları veya bir barı önünüzde tutarak başlarsınız. Kalçanızı geriye doğru iterek ve dizlerinizi hafifçe bükerek vücudunuzu öne eğersiniz. Dambılları veya barı bacaklarınızın önünden yakalayarak, sırtınızı düz tutarak ve göğsünüzü dışa doğru genişleterek kalçalarınızı düzeltir ve vücudunuzu yukarı doğru kaldırırsınız. Üst noktada, kalçalarınızı tamamen uzatır ve sırtınızı düz tutarak bir an durur, ardından kontrolle dambılları veya barı yere indirirsiniz. Deadlift, arka ve ön bacak kaslarını, kalça, bel ve sırt kaslarını çalıştırır. Doğru form ve teknikle yapılırsa, kuvvet kazanımı, postür düzelmesi ve günlük yaşam aktivitelerinde daha fazla dayanıklılık sağlar.{" "}
    </Text>
  </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: "serif",
    marginBottom: 20,
    textAlign: "center",
  },
  aciklama: {
    alignSelf: "flex-start",
    margin: 25,
    fontSize: 19,
    fontFamily: "cursive",
  },
  container:{
    height:"100%",
    marginTop:33
  }
})