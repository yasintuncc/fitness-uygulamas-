import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Pilatestopu() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        PİLATES TOPU 
      </Text>
      <Text style={styles.aciklama}>
      Pilates topu, pilates egzersizlerinde kullanılan ve vücut gücünü, dengeyi ve esnekliği artırmaya yardımcı olan bir fitness ekipmanıdır. Genellikle esnek, şişirilebilir bir yapıya sahiptir ve farklı boyutlarda bulunabilir. Pilates topu, birçok farklı egzersizde kullanılabilir ve vücut ağırlığınızı kullanarak kuvvet, dayanıklılık ve esneklik geliştirmeye yardımcı olur.
      Bu top, pilates egzersizlerinde ekstra zorluk ve stabilite sağlar. Örneğin, sırt üstü pozisyonda yapılan temel bir hareket olan crunch'lar, pilates topunu kullanarak daha derin bir kuvvet geliştirmenize ve çekirdek kaslarınızı daha etkili bir şekilde çalıştırmanıza olanak tanır. Ayrıca, pilates topu denge egzersizleri için de idealdir. Üzerinde durmak veya çeşitli pozisyonlarda denge sağlamak, vücudunuzun çekirdek kaslarını güçlendirir ve dengeyi artırır. {" "}
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