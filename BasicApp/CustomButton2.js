import React, { Component } from 'react';
import { StyleSheet, Text, Pressable } from "react-native";

const CustomButton2 = (props) => {
    return (
        <Pressable style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#ee125a',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },    
})    

export default CustomButton2;
