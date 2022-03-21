import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  Alert,
  Pressable,
} from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  const handleAlert = () => {
    Alert.alert(
      "Sucesso",
      "Simples Alert.",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/app_bg.png')} style={styles.imageBackground}> 
        <Image
          style={styles.imageTrophy}
          source={require('../../assets/app_trophy.png')}
        />      
        <Text style={[styles.text, styles.textTitle]}>Home Screen</Text>
        <Text style={styles.text}>Seja bem vindo, {route.params.username}</Text>
        <Button title='Voltar' onPress={() => navigation.goBack(null)} />

        <Pressable style={styles.button} onPress={handleAlert}>
          <Text style={styles.buttonText}>Alert</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={handleAlert}>
          <Text style={styles.buttonText}>TextInput e States</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'conver',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  imageTrophy: {
    width: 90,
    margin: 16,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  textTitle: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  textInput: {
    width: '100%',
    backgroundColor: '#ccc',
    paddingHorizontal: 8, 
    paddingVertical: 0, 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#ee125a',
    marginTop: 8,
    width: '100%',
  },
  buttonText: {
    color: 'white',
  }
});

