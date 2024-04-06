import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Gogus() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GÖĞÜS HAREKETİ </Text>
      <Text style={styles.aciklama}>Machine Fly, göğüs kaslarını hedefleyen ve geliştiren bir direnç egzersizidir ve genellikle bir makine kullanılarak yapılır. Başlangıç pozisyonunda, makinenin kolları göğsünüzün yanlarında veya önünde olacak şekilde ayarlanır. Kolları tutarak, vücudunuzu sabit tutun ve sırtınızı makineye iyice yaslayın. Ellerinizin rahat olması ve kollarınızın yüksekliğinin göğsünüzle aynı seviyede olduğundan emin olun. Ellerinizi kavrayarak nefes alın ve göğsünüzü açarak, kolları yavaşça ve kontrolle bir araya getirin. Ellerinizi birbirine yaklaştırırken göğsünüzü sıkın ve kasları hissedin. Üst noktaya ulaştığınızda, kasları bir saniye kadar sıkın ve nefes vererek başlangıç pozisyonuna geri dönün. </Text>

      <Text style={styles.title}> YAPILIŞI </Text>

      <Image source={require('../../assets/gögüsgif.gif')} style={styles.backgroundImage} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 50,
      },
      title: {
        
        fontSize: 35,
        fontFamily:"serif",
      },
      aciklama: {
        alignSelf: "flex-start",
        margin:28,
        fontSize: 18,
        fontFamily:"cursive",
      },
      backgroundImage:{
        width:380,
        height:350,
      }
})