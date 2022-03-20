import React, { useState } from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import CustomButton from '../components/CustomButton';
import CustomButton2 from '../components/CustomButton2';
import CustomTextInput from '../components/CustomTextInput';
import Card from '../components/Card';

const HomeScreen = ({ navigation }) => {
  const [text, setText] = useState('');

  const handleClick = () => {
    alert(`ok: ${text}`);
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text style={{fontSize: 24}}>
        Seja bem vindo,&nbsp;
        <Text style={{fontWeight: 'bold'}}></Text>
      </Text>
      <View style={{height: 16}}></View>

      <CustomTextInput onChangeText={ value => setText(value)} />
      <View style={{height: 16}}></View>

      <CustomButton title="Adicionar"  onPress={handleClick} />
      <View style={{height: 16}}></View>

      <CustomButton2 title="IR" onPress={() => navigation.navigate('One', { username: 'Marcello' })} />
      <View style={{height: 16}}></View>

      <CustomButton2 title="SAIR" onPress={() => navigation.navigate('Login')} />
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

export default HomeScreen;
