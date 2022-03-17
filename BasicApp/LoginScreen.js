import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomButton from './CustomButton';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text>Login</Text>
        <CustomButton title="Entrar"  onPress={() => navigation.navigate('Home', { username: 'Marcello' })} />
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

export default LoginScreen;
