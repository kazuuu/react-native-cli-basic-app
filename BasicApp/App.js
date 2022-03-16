import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from './Card';

const App = () => {
  const msg = 'Estou aqui';
  console.log('Arrow Function Component', msg);

  return (
    <View style={styles.container}>
      <Text>Hybrid Mobile App</Text>
      <StatusBar style='auto' />
      
      <Card>
        <Text>Este é o primeiro card</Text>
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      </Card>
      <Card backgroundColor='#ee125a'>
        <Text>Este é o primeiro card</Text>
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      </Card>
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
