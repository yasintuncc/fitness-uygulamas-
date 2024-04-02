import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
} from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import Data from "../data/card_data";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [columns, setColumns] = useState(2);
  const navigation = useNavigation();

  useEffect(() => {
    StatusBar.setBackgroundColor("#67bf49");
    StatusBar.setBarStyle("light-content");
  }, []);



  const renderItem = ({ item }) => (

    <TouchableOpacity style={styles.item} activeOpacity={0.8} onPress={()=>navigation.navigate(item.page)}>
      <Text>{item.title}</Text>
      <Text>{item.subtitle}</Text>
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
    alignItems:"center",
    justifyContent:"center",
    marginTop:20
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8, // Yatay boşluk
    borderRadius: 10,
    width: 170,
    height: 170,
    elevation: 10,
  },
});
