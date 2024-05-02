import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fitnesssehpası() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>
      FİTNESS SEHPASI
    </Text>
    <Text style={styles.aciklama}>Fitness sehpalari, ağırlık egzersizleri ve vücut geliştirme antrenmanlarında kullanılan, çeşitli pozisyonlarda oturmayı, yatarak veya dik durmayı sağlayan bir fitness ekipmanıdır. Genellikle ayarlanabilir sırt ve oturma yüzeyleri ile birlikte gelirler ve kullanıcının antrenman ihtiyaçlarına uygun olarak farklı açılarda konumlandırılabilirler.Fitness sehpalari, çeşitli egzersizlerde kullanılabilir. Özellikle, bench press, shoulder press, incline press, decline press gibi üst vücut egzersizlerinde kullanılarak göğüs, omuz ve kol kaslarını güçlendirir. Ayrıca, bench dip, leg raise ve crunch gibi egzersizlerde de kullanılarak karın ve triceps gibi alt vücut ve üst vücut kas gruplarını çalıştırabilir.{" "}
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