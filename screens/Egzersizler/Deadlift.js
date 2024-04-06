import { Image, StyleSheet, Text, View,  } from "react-native";
import React from "react";

export default function Deadlift() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DEADLİFT HAREKETİ</Text>
      <Text style={styles.aciklama}>Deadlift, bacak, bel ve sırt kaslarını çalıştıran temel bir kaldırma egzersizidir. Başlangıç pozisyonunda, bir barbell veya dumbbell'ı yerden kaldırarak başlayın. Ayaklarınızı omuz genişliğinde açın ve barın tam ortasına yerleştirin. Ardından, barı kavrayarak ellerinizi omuz genişliğinde açın ve sırtınızı düz tutarak belinizi bükmeden dizlerinizi hafifçe kırın. Nefes alarak ve karın kaslarınızı sıkarak, barı yavaşça ve kontrolle yukarı doğru kaldırın. Sırtınızı düz tutun ve gövdenizi sabit tutun. Barı bacaklarınız boyunca yukarı kaldırırken, kalça ve diz eklemi arasında tam bir uzanma sağlamak önemlidir. En üst noktaya ulaştığınızda, bir saniye kadar durun ve ardından nefes vererek kontrollü bir şekilde barı yere indirin, belinizi düz tutarak ve dizlerinizi hafifçe bükerek. Deadlift, bacak, sırt ve bel kaslarını güçlendirmenin yanı sıra, kuvvet ve dayanıklılığı artırmaya da yardımcı olur. Egzersizi yaparken, form ve teknik önemlidir. Doğru formu korumak ve ağırlığı kontrol altında tutmak sakatlık riskini azaltır ve etkinliği artırır.</Text>
      <Image source={require('../../assets/deadliftgif.gif')} style={styles.backgroundImage} />
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
    height:385,
  }
});
