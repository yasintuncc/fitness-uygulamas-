import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function GirisSayfasi() {
  return (
    <ImageBackground source={require('../assets/fitness.jpg')} style={styles.backgroundImage} resizeMode='cover'>
      <View style={styles.container}>
        <Text>GirisSayfasi</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
