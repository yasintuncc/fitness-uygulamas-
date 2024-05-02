import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import React, { useEffect } from "react";

export default function Dambil() {

  useEffect(() => {
    StatusBar.setBackgroundColor("black");
    StatusBar.setBarStyle("light-content");
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Dumbbell Shoulder Lateral Raise (Dambıl Yan Kaldırma):
      </Text>
      <Text style={styles.aciklama}>
        Dambıl yan kaldırma, omuz yan deltoid kaslarını hedeflemek için
        kullanılan bir egzersizdir. Dambılları her iki elinizde tutarak
        kollarınızı hafifçe bükün. Ardından dambılları yanınıza paralel olacak
        şekilde yavaşça kaldırın, omuz seviyenize kadar. Bir an üstte durun ve
        ardından kontrollü bir şekilde başlangıç pozisyonuna geri dönün.{" "}
      </Text>
      <Text style={styles.title}>
      DAMBIL BENCH PRESS
    </Text>
    <Text style={styles.aciklama}>
    Sırt üstü yatarken her iki elde birer dambıl tutarak yapılan bir üst vücut egzersizidir. Bu egzersizde, dambılları göğüs hizasında tutarak kolları dirseklere doğru büküp ardından yukarı itersiniz. Dambılları yukarı ittirirken nefes alırsınız ve kontrolle indirirken nefes verirsiniz. Bu hareket, göğüs kaslarınızı çalıştırmanın yanı sıra ön kol ve triceps kaslarınızı da hedefler. Dambıl bench press, barbell bench press'e göre daha stabilite gerektirir ve her iki kolu eşit şekilde çalıştırır. {" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: "serif",
    marginBottom: 25,
    textAlign: "center",
  },
  aciklama: {
    alignSelf: "flex-start",
    margin: 25,
    fontSize: 20,
    fontFamily: "cursive",
  },
  container:{
    height:"100%",
    marginTop:33,
  }
});
