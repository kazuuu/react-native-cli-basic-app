import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import CustomButton from '../components/CustomButton';

const MessageScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text>Message Screen</Text>
        <CustomButton title="Entrar"  onPress={() => navigation.navigate('One')} />
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

export default MessageScreen;
