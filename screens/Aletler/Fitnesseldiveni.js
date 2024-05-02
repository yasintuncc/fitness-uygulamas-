import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fitnesseldiveni() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        FİTNESS ELDİVENLERİ
      </Text>
      <Text style={styles.aciklama}>
      Fitness eldivenleri, spor yaparken ellerinizi korumak ve desteklemek için kullanılan özel bir ekipmandır. Bu eldivenler, cildinizi ve ellerinizi spor yaparken oluşabilecek yaralanmalardan korur ve özellikle ağırlık kaldırma gibi aktivitelerde avuç içlerinizin yaralanmasını önler. Aynı zamanda, avuç içlerinizin kaygan yüzeylerden korunmasıyla daha iyi bir tutuş sağlar, böylece ağırlıkları daha stabil ve güvenli bir şekilde tutmanıza yardımcı olur.Bu eldivenlerinin faydaları arasında, ter emici özellikleri sayesinde ellerinizin terlemesini azaltması ve böylece tutuşunuzu daha iyi hale getirmesi de bulunur. Ayrıca, eldivenler ağrıyı azaltabilir ve elle temas eden metal veya diğer sert yüzeylerin neden olduğu kesilmeleri önleyebilir. {" "}
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
    fontSize: 20,
    fontFamily: "cursive",
  },
  container:{
    height:"100%",
    marginTop:33
  }
})
