import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { auth } from "../firebase";

export default function Bar() {
  const navigation = useNavigation();
  
  
  
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("login");
      })
      .catch((error) => alert(error.message));
    console.log("Kullanıcı çıkış yaptı");
  };
  
  
  
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity onPress={handleSignOut}>
          <SimpleLineIcons name="logout" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>Aletler</Text>
        <TouchableOpacity onPress={() => navigation.navigate("aletler")}>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginRight: 10,
    fontSize: 16,
  },
});
