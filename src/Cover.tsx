import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { cover } from './assets';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any, any>
}

const Cover: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.coverWrapper}>
      <ImageBackground source={cover} style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.text}>iCookbook</Text>
          <Button icon="play" mode="contained" dark={false} style={styles.button}>
            Let's get started
          </Button>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  coverWrapper: {
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "white",
  }
});

export default Cover