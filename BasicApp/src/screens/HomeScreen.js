import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  Pressable,
} from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  const [item, setItem] = useState('');

  const handleSuccessAlert = () => {
    Alert.alert(
      "Sucesso",
      item,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <View style={{ height: 8 }} />
      <Text>Seja bem vindo, {route.params.username}</Text>
      <View style={{ height: 8 }} />
      <Button title='Voltar' onPress={() => navigation.goBack(null)} />
      <View style={{ height: 8 }} />
      <TextInput 
        placeholder='O que deseja comprar?' 
        onChangeText={(value) => setItem(value)} style={styles.textInput} 
      />
      <View style={{ height: 8 }} />
      <Pressable style={styles.button} onPress={handleSuccessAlert}>
        <Text style={styles.buttonText}>Alert</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
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
  },
  buttonText: {
    color: 'white',
  }
});

