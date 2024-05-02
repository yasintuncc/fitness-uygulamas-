import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fitnessbarı() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        FİTNESS BARI 
      </Text>
      <Text style={styles.aciklama}>
      Fitness barı, genellikle vücut ağırlığı egzersizlerini ve kuvvet antrenmanlarını gerçekleştirmek için kullanılan bir fitness ekipmanıdır. Bir çubuk veya metal borudan yapılmış olan fitness barı, farklı egzersizler için kullanılabilir ve vücut geliştirmeye yardımcı olabilir.
      Fitness barları, çeşitli egzersizlerde kullanılmak üzere tasarlanmıştır. Örneğin, çene çekme, barfiks, kapalı tutuş, geniş tutuş gibi üst vücut egzersizleri fitness barı kullanılarak yapılabilir. Ayrıca, barı farklı açılarda veya yüksekliklerde tutarak çeşitli kas gruplarını hedeflemek mümkündür.
      Fitness barı ayrıca vücut ağırlığı egzersizlerinde de kullanılır. Örneğin, barı yere sabitleyerek veya askıya alarak, push-up, dip egzersizleri, ve triceps dip gibi egzersizler gerçekleştirilebilir. Bu egzersizler, özellikle üst vücut kaslarını güçlendirmeye ve tonlamaya yardımcı olur. {" "}
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