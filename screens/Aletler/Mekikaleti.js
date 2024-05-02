import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Mekikaleti() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>
      MEKİK ALETİ
    </Text>
    <Text style={styles.aciklama}>Mekik aletleri, karın kaslarını güçlendirmek ve karın bölgesini tonlamak için tasarlanmış fitness ekipmanlarıdır. Genellikle evde veya spor salonlarında kullanılan bu aletler, kullanıcılara mekik çekme egzersizlerini daha etkili ve konforlu bir şekilde yapma imkanı sağlar.Mekik aletleri, birçok farklı tasarıma sahip olabilir. Bazıları sabit bir yapıya sahipken, bazıları katlanabilir ve saklanabilir özelliklere sahip olabilir. Genellikle bir baş desteği, oturma yeri ve ayak kollarıyla birlikte gelirler. Ayrıca, farklı direnç seviyelerine ayarlanabilen modeller de bulunabilir.Bu aletler, karın kaslarını hedef alarak çeşitli mekik çekme egzersizlerini yapma imkanı sunar. Mekikler, üst, alt ve yan karın kaslarını çalıştırmak için etkili bir yöntemdir. Ayrıca, bel ve omurga stabilitesini artırarak postürü iyileştirebilir ve sakatlanma riskini azaltabilir.{" "}
    </Text>
  </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: "serif",
    marginBottom: 12,
    textAlign: "center",
  },
  aciklama: {
    alignSelf: "flex-start",
    margin: 22,
    fontSize: 19,
    fontFamily: "cursive",
  },
  container:{
    height:"100%",
    marginTop: 33,
  }
})