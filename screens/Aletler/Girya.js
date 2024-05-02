import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Girya() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        GİRYA ALETİ 
      </Text>
      <Text style={styles.aciklama}>
      Giryalar, güç, dayanıklılık ve kuvvet geliştirmek için kullanılan etkili bir fitness aletidir. Genellikle dökme demir veya dökme çelikten yapılan giryalar, bir sap ve ağırlık plakalarından oluşur. Giryaların en belirgin özelliği, çeşitli egzersizlerde kullanılabilecekleri değiştirilebilir ağırlık sistemlerine sahip olmalarıdır.
      Giryalar, bir dizi temel ve karmaşık egzersiz için kullanılabilir. Bunlar arasında kettlebell swing, clean and press, Turkish get-up gibi tam vücut egzersizleri bulunur. Aynı zamanda giryalarla yapılan egzersizler, vücut dengesini, koordinasyonu ve esnekliği geliştirmeye de yardımcı olur.Giryalar, klasik serbest ağırlık antrenmanlarının yanı sıra kettlebell antrenmanları olarak da bilinen bir egzersiz yöntemine olanak tanır. Bu egzersizler, kas kuvvetini artırmak, yağ yakımını teşvik etmek ve kardiyo dayanıklılığını geliştirmek için son derece etkilidir.{" "}
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