import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Olma Ekranı</Text>
      
      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="Kullanıcı Adı"
        placeholderTextColor={"black"}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="Şifre"
        placeholderTextColor={"black"}
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
      />
      
      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="Kullanıcı Adı"
        placeholderTextColor={"black"}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="Şifre"
        placeholderTextColor={"black"}
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={() => navigation.navigate("kayit")}
      >
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({

  button: {
    backgroundColor: "darkblue",
    padding: 20,
    borderRadius: 19,
    width: 210,
    borderRadius: 50,
    marginTop: "10%",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "white",
    margin: "auto",
    fontSize: 16,
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
    marginTop: 20,
    backgroundColor: "rgba(0,0,255,0.2)",
  },
})