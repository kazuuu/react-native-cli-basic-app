import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text>Login Screen</Text>
        <Button 
          title='Ir para Home' 
          onPress={() => navigation.replace('Home', { username: 'Joao' })} 
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;