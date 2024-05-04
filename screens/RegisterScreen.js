import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { auth } from "../firebase";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";


export default function RegisterScreen({ navigation }) {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("anasayfa");
      }
    });
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Kullanıcı kayıt oldu", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KAYIT OLMAK İÇİN</Text>

     
      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="Kullanıcı Adı"
        placeholderTextColor={"white"}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="Soyisim"
        placeholderTextColor={"white"}
        onChangeText={(text) => setPassword(text)}
      />

      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="E-Mail"
        placeholderTextColor={"white"}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="Şifre"
        placeholderTextColor={"white"}
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>KAYIT OL</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(0,100,100,0.7)",
    padding: 20,
    borderRadius: 19,
    width: 180,
    borderRadius: 50,
    marginTop: "10%",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "white",
    margin: "auto",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Roboto",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 34,
  },
  input: {
    padding: 15,
    borderRadius: 10,
    width: 300,
    marginTop: 15,
    backgroundColor: "rgba(0,100,100,0.7)",
    color:"white",
    fontWeight:"bold",
    fontSize:15,
  },
  TextInput:{
    color:"white",
  }
  
});
