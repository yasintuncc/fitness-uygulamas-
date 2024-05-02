import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Bisiklet() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        BİSİKLET ALETİ
      </Text>
      <Text style={styles.aciklama}>
      Fitness aleti olarak kullanılan bisikletler, kapalı alanlarda spor yapmak isteyenler için etkili bir seçenektir. Bu tür bisikletler genellikle sabit duran pedal ve ayarlanabilir direnç seviyelerine sahiptir. İç mekan bisikletleri, kullanıcıların kardiyo dayanıklılığını artırmak, yağ yakmak ve kas tonusunu geliştirmek için ideal bir seçenektir.
      İç mekan bisikletleri, kullanıcının isteğine göre direnç seviyesini ayarlayarak farklı zorluk seviyelerinde antrenman yapma imkanı sunar. Bu, kullanıcıların egzersiz rutinlerini kendi fitness seviyelerine ve hedeflerine göre uyarlamalarına olanak tanır. Ayrıca, bisikletin sabit duran pedal sistemi, eklem stresini azaltarak yaralanma riskini minimuma indirir. {" "}
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