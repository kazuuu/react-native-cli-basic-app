import React, { Component } from 'react';
import { StyleSheet, TextInput } from "react-native";

const CustomTextInput = (props) => {
    return (
        <TextInput onChangeText={props.onChangeText} style={styles.textInput} />
    );
}

const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        height: 40,
        backgroundColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 16,
    },
})    

export default CustomTextInput;
