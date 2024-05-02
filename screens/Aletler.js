import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AletBar from "../components/AletBar";
import { useEffect } from "react";
import { Image } from "react-native";
import Alet_Data from "../data/alet_data";
import { useNavigation } from "@react-navigation/native";

export default function Aletler() {

  const navigation = useNavigation()
  
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    StatusBar.setBackgroundColor("black");
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
        resizeMode="stretch"
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
      <AletBar />
      <FlatList
        key={columns} // numColumns değiştiğinde FlatList'i yeniden oluşturmak için key'i değiştir
        data={Alet_Data}
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
    paddingTop: 10,
    backgroundColor: "#fffaf0",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  item: {
    backgroundColor: "#fff",
    marginVertical: 10,
    marginHorizontal: 10, // Yatay boşluk
    borderRadius: 10,
    width: 170,
    height: 175,
    elevation: 20,
    overflow: "hidden",
  },
  subtitleArea: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    flexDirection: "row",
    alignItems: "center",
  },
  subtitle: {
    color: "white",
    fontSize: 12,
    padding: 10,
  },
  nameContainer: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
  },
  name: {
    color: "white",
    fontWeight:'bold',
    fontSize: 16,
    padding: 10,
    textAlign: "center",
  },
});
