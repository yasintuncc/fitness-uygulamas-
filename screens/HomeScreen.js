import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import Data from "../data/card_data";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

export default function HomeScreen() {
  //Fontları yükleme

  const [fontsLoaded, fontError] = useFonts({
    font1: require("../assets/fonts/RobotoSlab-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const [columns, setColumns] = useState(2);
  const navigation = useNavigation();

  useEffect(() => {
    StatusBar.setBackgroundColor("#67bf49");
    StatusBar.setBarStyle("light-content");
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.8}
      onPress={() => navigation.navigate(item.page)}
    >
      <Image
        source={item.img}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      />
      <View style={styles.subtitleArea}>
        <Text style={styles.subtitle}></Text>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item.title} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        key={columns} // numColumns değiştiğinde FlatList'i yeniden oluşturmak için key'i değiştir
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={columns}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: "#67bf41",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  item: {
    backgroundColor: "#fff",
    marginVertical: 8,
    marginHorizontal: 8, // Yatay boşluk
    borderRadius: 10,
    width: 170,
    height: 170,
    elevation: 10,
    overflow: "hidden",
  },
  subtitleArea: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flexDirection: "row",
    alignItems: "center",
  },
  subtitle: {
    color: "white",
    fontSize: 16,
    padding: 10,
  },
  nameContainer: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    fontFamily:"font1"
  },
  name: {
    color: "white",
    fontSize: 16,
    padding: 10,
    textAlign: "center",
  },
});
