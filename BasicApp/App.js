import React, { Component, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from './Card';
import CustomButton from './CustomButton';
import CustomButton2 from './CustomButton2';
import CustomTextInput from './CustomTextInput';

const App = () => {
  const msg = 'Estou aqui';
  console.log('Arrow Function Component', msg);

  const [text, setText] = useState('');

  handleClick = () => {
    alert(`ok: ${text}`);
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text>Hybrid Mobile App</Text>
      <View style={{height: 16}}></View>

      <CustomTextInput onChangeText={ value => setText(value)} />
      <View style={{height: 16}}></View>

      <CustomButton title="Adicionar"  onPress={handleClick} />
      <View style={{height: 16}}></View>

      <CustomButton2 title="Cancelar" onPress={handleClick} />
      <View style={{height: 16}}></View>

      <Card>
        <Text>Este é o primeiro card</Text>
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      </Card>
      <View style={{height: 16}}></View>

      <Card backgroundColor='#ee125a'>
        <Text>Este é o primeiro card</Text>
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      </Card>
      <View style={{height: 16}}></View>

      <Card backgroundColor='black' textColor='#ee125a'>
        <Text>Este é o primeiro card</Text>
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

export default App;
