import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

export default function ForgotPassword() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");


  const changePassword = (email) => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert(
          "İstek Gönderildi",
          "Şifrenizi sıfırlamak için e-posta adresinize talimatlar gönderildi.",
          [{ text: "Tamam", onPress: () => navigation.navigate("login") }],
          { cancelable: false }
        );
      })
      .catch((error) => {
        Alert.alert(
          "İstek Başarısız",
          "Şifreniz gönderilirken bir hata oluştu daha sonra tekrar deneyin.",
          [{ text: "Tamam" }],
          { cancelable: false }
        );
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mail Adresinizi giriniz :</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor={"black"}
        placeholder="E-Mail"
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={() => {
          changePassword(email);
        }}
      >
        <Text style={styles.buttonText}>Kod Gönder</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 15,
    borderRadius: 10,
    width: 300,
    marginTop: 10,
    backgroundColor: "rgba(0,0,255,0.2)",
  },
  title: {
    alignSelf: "flex-start",
    marginLeft: 45,
    fontSize: 17,
  },
  button: {
    backgroundColor: "darkblue",
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
    width: 200,
    borderRadius: 50,
    marginTop: "10%",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
  },
});
