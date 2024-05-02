import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fitnessplakaları() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>
      FİTNESS PLAKALARI
    </Text>
    <Text style={styles.aciklama}>Fitness plakaları, direnç antrenmanlarında kullanılan ve vücut gücünü artırmaya yardımcı olan ağırlık ekipmanlarıdır. Genellikle dökme demir veya dökme çelikten yapılan bu plakalar, barlar veya diğer fitness ekipmanlarına takılarak kullanılırlar. Fitness plakaları, çeşitli boyutlarda ve ağırlıklarda bulunur ve kullanıcının antrenman ihtiyaçlarına ve hedeflerine göre seçilebilir.Fitness plakaları, birçok farklı egzersizde kullanılabilir. Özellikle, ağırlık kaldırma, squat, deadlift ve bench press gibi temel kuvvet egzersizlerinde kullanılarak kas büyümesini ve gücünü artırabilirler. Ayrıca, plakaları kullanarak çeşitli vücut ağırlığı egzersizlerini zorlayabilir ve daha etkili bir antrenman sağlayabilirsiniz.Birçok fitness plakası, ağırlıklarını değiştirmenizi sağlayan bir dizi seviyeye sahiptir. Bu, antrenmanınızın zorluk seviyesini ayarlamanıza ve ilerlemenizi takip etmenize olanak tanır. Ayrıca, plakaları kullanarak yapılan egzersizler, denge ve koordinasyonu geliştirmeye yardımcı olabilir ve vücut bütünlüğünü artırabilir.{" "}
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