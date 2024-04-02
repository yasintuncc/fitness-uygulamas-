import { Image, StyleSheet, Text, View,  } from "react-native";
import React from "react";

export default function arkakol() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ARKA KOL</Text>
      <Text style={styles.aciklama}>Arka kol kaslarını güçlendirmek için etkili bir egzersiz olan triceps dip, vücut ağırlığınızı kullanarak triceps kaslarınızı çalıştırır. Bu egzersizi yapmak için, bir sandalye veya dip bar gibi bir yükseltiye ihtiyacınız olacak. Başlangıç pozisyonunda, dip barın kenarlarına ellerinizi yerleştirin ve vücudunuzu kollarınızı kıvırarak yere doğru indirin. Dirsekleriniz 90 derece açı oluşturana kadar indirin, ardından kollarınızı uzatarak başlangıç pozisyonuna geri dönün. Dikkat etmeniz gereken en önemli nokta, dirseklerinizi dışa doğru açmamak ve hareketi yavaş ve kontrollü bir şekilde yapmaktır. Triceps dip, arka koldaki triceps kaslarını güçlendirirken aynı zamanda omuz ve göğüs kaslarını da destekler. Bu egzersizi düzenli olarak yaparak, arka kol kaslarınızı güçlendirebilir ve tonlayabilirsiniz.</Text>
      <Image source={require('../../assets/arkakol.gif')} style={styles.backgroundImage} />
      <Image source={require('../../assets/arkakol2.webp')} style={styles.backgroundImage} />

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
    fontFamily:"serif",
  },
  backgroundImage:{
    width:370,
    height:220,
  }
});
