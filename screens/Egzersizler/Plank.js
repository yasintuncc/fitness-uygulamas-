import { Image, StyleSheet, Text, View,  } from "react-native";
import React from "react";

export default function Plank() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PLANK HAREKETİ</Text>
      <Text style={styles.aciklama}>Plank, karın kaslarını güçlendirmek ve core stabilitesini artırmak için etkili bir egzersizdir. Başlangıç pozisyonunda, yere yüz üstü uzanın ve avuçlarınızı omuz genişliğinde açarak yere yerleştirin. Dirsekleriniz doğrudan omuzlarınızın altında olmalıdır. Parmak uçları ve ayak parmaklarınızı yere dayayarak vücudunuzun üst kısmını kaldırın. Vücudunuz düz bir çizgi oluşturmalıdır, başınızdan topuklarınıza kadar. Karın kaslarınızı sıkarak ve kalçalarınızı sıkıca sıkarak vücudunuzu sabitleyin. Gözlerinizi yere bakacak şekilde başınızı hafifçe yukarı kaldırın ve boyun ve omurganızı düz tutun. Bu pozisyonda dururken, karın kaslarınızı ve core kaslarınızı aktif bir şekilde çalıştırın. Mümkün olduğunca uzun süre bu pozisyonda kalmaya çalışın, başlangıçta 20 ila 30 saniye arasında başlayabilirsiniz. Plank egzersizi, karın kaslarını güçlendirmenin yanı sıra omurga ve postürü destekleyen derin core kaslarını da çalıştırır. Egzersizi yaparken, düzgün form ve teknik önemlidir. Sırtınızın düz olduğundan ve kalçalarınızın yukarı kalkmadığından emin olun. Yavaşça başlayın ve zamanla süreyi artırarak ve zorluk seviyelerini ayarlayarak ilerleyin.</Text>
      <Image source={require('../../assets/plankgif.gif')} style={styles.backgroundImage} />
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
    width:380,
    height:350,
  }
});
