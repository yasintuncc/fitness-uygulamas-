import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fitnessipi() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        FİTNESS İPİ
      </Text>
      <Text style={styles.aciklama}>
      Fitness ipi, genellikle kardiyo egzersizleri için kullanılan, uzun ve ince bir ip veya kablo şeklindeki bir ekipmandır. Fitness ipi, birçok farklı egzersizde kullanılabilir ve genellikle taşınabilirliği ve çok yönlülüğü nedeniyle sporcular arasında popülerdir.
Fitness iplerinin çeşitli avantajları vardır. Öncelikle, kardiyo dayanıklılığını artırmak için etkili bir şekilde kullanılabilirler. Zıplama, sıçrama ve dönme gibi hareketlerle yüksek yoğunluklu bir egzersiz sağlarlar. Ayrıca, koordinasyonu geliştirmeye yardımcı olabilirler, çünkü birçok farklı hareket ve kombinasyon mümkündür.tness ipleri ayrıca kas gücünü ve dayanıklılığını artırmak için de kullanılabilir. Özellikle üst vücut kaslarını hedefleyen egzersizlerde, örneğin çekişler veya döndürmelerde, etkili bir şekilde kullanılabilirler. Ayrıca, kalça ve bacak kaslarını güçlendirmek için de çeşitli egzersizler yapılabilir. {" "}
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