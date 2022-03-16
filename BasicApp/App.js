import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const msg = 'Estou aqui';
  console.log('Arrow Function Component', msg);

  return (
    <View style={styles.container}>
      <Text>Hybrid Mobile App</Text>
      <StatusBar style='auto' />
      
      <View style={styles.card}>
        <Text>Este é o primeiro card</Text>
      </View>
      <View style={[styles.card, { backgroundColor: '#ee125a', }]}>
        <Text>Este é o segundo card</Text>
      </View>
      <View style={[styles.card, { backgroundColor: '#91A2AD', }]}>
        <Text>Este é o terceiro card</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    width: '100%',
    backgroundColor: '#ccc',
    padding: 16,
    borderRadius: 10,
    marginBottom: 8,
  },
});