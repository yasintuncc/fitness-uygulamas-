import { Image, StyleSheet, Text, View,  } from "react-native";
import React from "react";

export default function kalça() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KALÇA HAREKETİ</Text>
      <Text style={styles.aciklama}>Hip Thrust, kalça kaslarını güçlendirmek ve şekillendirmek için etkili bir egzersizdir. Başlangıç pozisyonunda, bir egzersiz matının üzerine sırtüstü uzanın ve dizlerinizi bükerek ayaklarınızı yere sabitleyin. Ayaklarınızı omuz genişliğinde açın ve topuklarınızı yere sıkıca bastırın. Ardından, bir bench veya yükseltilmiş bir yüzeyin üzerine sırtınızı yaslayarak, üst sırtınızı ve omuzlarınızı desteklemek için bir destek noktası oluşturun. Nefes alarak ve karın kaslarınızı sıkarak, kalçalarınızı yukarı doğru kaldırın. Kalçalarınızı yukarı ittiğinizde, kalça eklemi boyunca tam bir uzanma sağlamaya çalışın ve üst vücudunuz ile dizleriniz arasında düz bir çizgi oluşturun. En üst noktaya ulaştığınızda, bir saniye kadar durun ve ardından nefes vererek yavaşça başlangıç pozisyonuna geri dönün. Hip Thrust, gluteus maximus kaslarını etkili bir şekilde hedefler ve güçlendirir. Ayrıca, hamstrings ve adductor kaslarını da çalıştırır. Egzersizi yaparken, kalçalarınızı yukarı doğru iterek ve karın kaslarınızı sıkarak stabil bir duruş sağlamak önemlidir. Ayrıca, yavaş ve kontrollü bir şekilde hareket etmek ve formu korumak da önemlidir. </Text>
      <Image source={require('../../assets/kalçagif.gif')} style={styles.backgroundImage} />
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
    width:390,
    height:350,
  }
});
