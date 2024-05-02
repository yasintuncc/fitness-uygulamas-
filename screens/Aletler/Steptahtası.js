import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Steptahtası() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        STEP TAHTASI
      </Text>
      <Text style={styles.aciklama}>Step tahtası, aerobik egzersizleri yapmak, kardiyo dayanıklılığını artırmak ve alt vücut kaslarını güçlendirmek için kullanılan bir fitness aletidir. Genellikle plastik veya ahşap malzemeden yapılan step tahtaları, farklı yükseklik seviyelerine ayarlanabilir ve çeşitli egzersiz seçenekleri sunar.Step aerobik egzersizleri, step tahtası kullanılarak yapılan ritmik ve koordineli hareketlerden oluşur. Basit adımlardan daha karmaşık kombinasyonlara kadar çeşitli seviyelerde egzersizler yapılabilir. Step aerobik, kalp atış hızını artırır, kardiyo dayanıklılığını geliştirir ve yağ yakımını teşvik eder.Step tahtası, sadece kardiyo egzersizleri için değil, aynı zamanda direnç antrenmanları için de kullanılabilir. Örneğin, step platformu kullanarak squat, lunges ve calf raise gibi alt vücut egzersizleri yapılabilir. Bu egzersizler, bacak kaslarını güçlendirmeye ve tonlamaya yardımcı olur.{" "}
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