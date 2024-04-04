import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function AletBar() {
  
    const navigation = useNavigation();
  
  
    return (

    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity onPress={()=>navigation.navigate("anasayfa")}>
          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Geri Dön</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding:15,
    backgroundColor:"#fff",
  },
  left: {
    flexDirection: "row",
    alignItems:"center",
    paddingLeft:10
  },
  title:{
    marginLeft:10,
    fontSize:22,
  }
});
