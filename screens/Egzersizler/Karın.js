import { Image, StyleSheet, Text, View,  } from "react-native";
import React from "react";

export default function Karın() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KARIN</Text>
      <Text style={styles.aciklama}>karın kaslarını güçlendirmek ve tonlamak için etkili bir egzersizdir. Başlangıç pozisyonunda, bir egzersiz matının üzerine sırtüstü uzanın ve dizlerinizi hafifçe kırarak ayaklarınızı yere sabitleyin. Elleriniz başınızın yanlarında veya göğsünüzün üzerinde olabilir. Nefes alarak ve karın kaslarını sıkarak, omuzlarınızı ve üst sırtınızı yavaşça yerden kaldırın. Başınızı ve omuzlarınızı yukarı doğru kaldırırken, sırtınızı matın yüzeyinden yalnızca birkaç santimetre kadar yükseltin. Karın kaslarınızı sıkarak ve egzersizi kontrol altında tutarak en üst noktada bir saniye kadar durun. Nefes vererek yavaşça başlangıç pozisyonuna geri dönün, ancak sırtınızı tamamen yere indirmeyin, bu hareketin gerilimini sürdürün. Crunch, karın kaslarının üst kısmını hedefler ve bu bölgede kuvvet ve dayanıklılığı artırmaya yardımcı olur. Egzersiz sırasında boyun ve omuzları fazla zorlamamak için hafif bir baş hareketi yapmak önemlidir.</Text>
      <Text style={styles.title}>YAPILIŞI</Text>

      <Image source={require('../../assets/karıngif.gif')} style={styles.backgroundImage} />
      <Image source={require('../../assets/karıngif2.gif')} style={styles.backgroundImage} />

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
    fontSize: 30,
    fontFamily:"serif",
    marginBottom:10,
    
  },
  aciklama: {
    alignSelf: "flex-start",
    margin:25,
    fontSize: 16,
    fontFamily:"cursive",
    
  },
  backgroundImage:{
    width:350,
    height:180,
  }
});
