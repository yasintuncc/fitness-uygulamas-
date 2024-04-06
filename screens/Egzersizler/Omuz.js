import { Image, StyleSheet, Text, View,  } from "react-native";
import React from "react";

export default function omuz() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>OMUZ HAREKETİ</Text>
      <Text style={styles.aciklama}>Arka omuz kaslarını hedefleyen ve geliştiren bir direnç egzersizidir ve genellikle bir kablo makinesi kullanılarak yapılır. Başlangıç pozisyonunda, kablo makinesinin iki yanındaki kolları alçaltarak veya ayarlayarak başlayın. Daha sonra, her iki elinizi de kablo kollarına takın ve ayaklarınızı omuz genişliğinde açarak stabil bir duruş sağlayın. Ellerinizle kabloları tutun ve kollarınızı hafifçe bükün. Nefes alarak ve omuzlarınızı geriye doğru çekerek, kolları yanlara doğru yavaşça çekin. Bu sırada, omuzlarınızı sıkarak ve kürek kemiklerinizi birbirine yaklaştırarak arka omuz kaslarınızı aktif bir şekilde çalıştırın. En üst noktaya ulaştığınızda, bir saniye kadar durun ve ardından nefes vererek kontrollü bir şekilde kolları başlangıç pozisyonuna geri getirin. Rear Delt Cable Fly, arka omuz kaslarını izole ederek güçlendirir ve geliştirir.</Text>
      <Image source={require('../../assets/omuzgif.gif')} style={[styles.backgroundImage,{width:210,height:200,marginBottom:5}]} />
      <Image source={require('../../assets/omuzareketi.gif')} style={[styles.backgroundImage,{width:250,height:250,marginBottom:6}]} />
    </View>
  );
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
    margin:25,
    fontSize: 16,
    fontFamily:"cursive",
    
  },
  backgroundImage:{
    width:250,
    height:250,
  }
});
