import { Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import { useFonts } from "expo-font";

export default function LoginScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    StatusBar.setBackgroundColor("#fff");
    StatusBar.setBarStyle("dark-content");
  }, []);


  const [fontsLoaded, fontError] = useState({
    font4: require("../assets/fonts/PlayfairDisplay-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }


  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("anasayfa");
      }
    });
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Kullanıcı giriş yaptı", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (

    
    <View style={styles.container}>
      <ImageBackground
      source={require('../assets/a.jpg')}
      style={styles.backgroundImage}
      resizeMode="stretch"
    />
      <Text style={styles.title}>Sports is Life</Text>

      
      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="Kullanıcı Adı"
        fontWeight="bold"
        placeholderTextColor={"rgba(	0, 0, 20,0.7)"}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="Şifre"
        fontWeight="bold"
        placeholderTextColor={"rgba(	0, 0, 20,0.7)"}
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
      />

      
      <TouchableOpacity
      onPress={()=>navigation.navigate("sifremiUnuttum")}>
        < Text style={styles.forgotPasswordText}>Şifremi Unuttum</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handleLogin} // Daha sonra açılacak
        style={styles.button}
      >
        <Text style={styles.buttonText}>Giriş</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={() => navigation.navigate("kayit")}
      >
        <Text style={styles.buttonText}>Kayıt ol</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(	245, 255, 250,0.7)",
    padding: 10,
    width: 180,
    borderRadius: 30,
    marginTop: "10%",
    
  },
  buttonText: {
    color: "black",
    margin: "auto",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "sans-serif-medium",
    fontWeight:"bold",
  },
  forgotPasswordText: {
    color:"blue",
    fontSize: 18,
    fontWeight:"bold",
    position:"absolute",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontFamily:"font4",
    color:"white",
    fontFamily:"Roboto",
    fontWeight:"bold",
  },
  input: {
    padding: 15,
    borderRadius: 10,
    width: 300,
    marginTop: 20,
    backgroundColor: "rgba(	245, 255, 250,0.7)",
    color:"black",
    fontSize:17,
  },
  
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent:"space-between",
    position:"absolute",
  }
});
