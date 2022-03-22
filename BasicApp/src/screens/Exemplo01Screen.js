import React , { useState, } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Pressable, } from 'react-native';

const Exemplo01Screen = ({ navigation }) => {
  const [textInputComprar, setTextInputComprar] = useState('');
  const [listComprar, setListComprar] = useState(['Miojo Nissin Lamem', 'Sucrilhos', 'Cerveja','Coca-Cola', ]);
  
  const ItemComprar = ({ item, index }) => {
    return (
      <Pressable onPress={() => handleRemoveItem(index)} style={styles.itemComprar}>
        <Text style={styles.itemComprarText}>{item}</Text>
      </Pressable>
    );
  }

  const handleAdicionar = () => {
    if (textInputComprar == '')
      return
    setListComprar(previous => [...previous, textInputComprar]);
    setTextInputComprar('')

  }

  const handleRemoveItem = (index) => {
    if (index > -1) {
      let temp = [...listComprar];
      temp.splice(index, 1)
      console.log(temp)
      setListComprar(temp)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput 
        value={textInputComprar}
        onChangeText={(value) => setTextInputComprar(value)} 
        style={styles.textInput} 
        placeholder='O que deseja comprar?'
      />
      <Pressable style={styles.button} onPress={handleAdicionar}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.goBack(null)}>
        <Text style={styles.buttonText}>Voltar</Text>
      </Pressable>
      <FlatList
        data={listComprar}
        extraData={listComprar}
        style={styles.listComprar}
        renderItem={({ item, index }) => <ItemComprar item={item} index={index} />}
        keyExtractor={(item, index) => {
          return index;
        }}
      />
    </View>
  );
};

export default Exemplo01Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  listComprar: {
    width: '100%',
  },
  itemComprar: {
    width: '100%',
    backgroundColor: '#ccc',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8,
  },  
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#ee125a',
    marginBottom: 8,
    width: '100%',
  },
  buttonText: {
    color: 'white',
  }
});
