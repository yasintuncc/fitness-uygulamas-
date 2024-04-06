import { Image, StyleSheet, Text, View,  } from "react-native";
import React from "react";

export default function Barfiks() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BARFİKS HAREKETİ</Text>
      <Text style={styles.aciklama}>Barfiks, üst sırt, omuz ve kolları güçlendirmek için etkili bir egzersizdir. Başlangıç pozisyonunda, bir çelik çubuğa veya çubuklara sıkıca tutunarak asılı durun. Eller omuz genişliğinde açık olmalıdır ve avuç içleri size bakmalıdır. Ayaklarınızı hafifçe kırarak ve biraz geriye doğru eğilerek vücudunuzu sabitleyin. Nefes alarak, kollarınızı bükerek ve üst sırt kaslarınızı kullanarak çubuğa doğru çekin. Çeneniz çubuğun üstüne çıkana kadar yukarı doğru çekilmeye devam edin. En üst noktaya ulaştığınızda, bir saniye kadar durun ve ardından nefes vererek kontrollü bir şekilde başlangıç pozisyonuna geri dönün, kollarınızı tamamen düzleştirin. Barfiks, vücut ağırlığınızı kullanarak üst sırt ve omuz kaslarınızı etkili bir şekilde çalıştırır. Ayrıca, kollarınızın ve ön kol kaslarınızın güçlenmesine de katkıda bulunur. Egzersizi yaparken, vücudunuzu sabit tutmaya özen göstermek ve momentumu minimumda tutmak önemlidir.</Text>
      <Image source={require('../../assets/barfiksgif.gif')} style={styles.backgroundImage} />
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
