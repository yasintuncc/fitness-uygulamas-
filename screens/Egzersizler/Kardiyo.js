import { Image, StyleSheet, Text, View,  } from "react-native";
import React from "react";

export default function Kardiyo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KARDİYO HAREKETİ</Text>
      <Text style={styles.aciklama}>Hücreler, ihtiyaçları olan oksijeni ve besin maddelerini, dolaşım sistemi içinde bulunan kandan sağlamaktadır. Aynı zamanda da metabolizmaları sonucu ortaya çıkan karbondioksidi ve atık maddelerini atılım organlarına yönlendirmesi için kana vermektedirler. Kanın, tüm bu görevleri yerine getirmesini sağlayan sisteme ise dolaşım sistemi (kardiyovasküler sistem) denir. Kardiyo egzersizleri, kardiyovasküler sistemin güçlendirilmesine yardımcı olabilecek çeşitli egzersizleri ifade etmektedir. Bisiklet, ip atlama, yüzme ve koşu kardiyo egzersizleri arasında yer alır. Bu tür egzersizler, nefes alıp verme sıklığının artmasına yol açmaktadır. Bu da kişinin kalp atışında hızlanmaya ve buna bağlı olarak da hücrelerin daha fazla yağ yakmasını sağlamaktadır.</Text>
      <Image source={require('../../assets/kardiyoo.jpg')} style={styles.backgroundImage} />
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
