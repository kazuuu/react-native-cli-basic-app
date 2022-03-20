import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomButton from '../components/CustomButton';

const OneScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text>One Screen</Text>
        <CustomButton title="Voltar"  onPress={() => navigation.goBack(null)} />
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

export default OneScreen;
