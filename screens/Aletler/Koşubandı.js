import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Koşubandı() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>
      KOŞU BANDI
    </Text>
    <Text style={styles.aciklama}>Koşu bandı, kapalı alanlarda kardiyo egzersizi yapmak isteyenler için ideal bir seçenektir. Genellikle bir elektrik motoru ile çalışan ve kullanıcının isteğine göre hızını ayarlayabilmesine imkan tanıyan bir fitness ekipmanıdır. Koşu bandı, koşu, yürüyüş veya hızlı tempolu yürüyüş gibi çeşitli egzersiz seçenekleri sunar.Koşu bandı, kardiyo dayanıklılığını artırmak, yağ yakımını teşvik etmek ve kalp sağlığını geliştirmek için etkili bir araçtır. Ayarlanabilir hız ve eğim seçenekleri sayesinde, kullanıcılar antrenmanlarını kendi hedeflerine ve kondisyon seviyelerine uygun olarak özelleştirebilirler. Ayrıca, koşu bandında yapılan egzersizler, açık havada koşu yapma imkanı olmayanlar için mükemmel bir alternatif sunar.Koşu bandı ayrıca antrenman sırasında kalp atış hızını izleme, kat edilen mesafeyi takip etme ve yakılan kalori miktarını hesaplama gibi özelliklerle donatılmış olabilir.{" "}
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