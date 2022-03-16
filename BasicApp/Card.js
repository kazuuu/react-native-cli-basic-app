import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";

const Card = (props) => {

    console.log("1");

    return (
        <View style={[styles.card, {backgroundColor: props.backgroundColor ? props.backgroundColor : '#91A2AD'}]}>
            <Text style={{color: props.textColor ?? '#000'}}>
                {props.children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        padding: 16,
        borderRadius: 10,
        marginBottom: 8,
    },
})    

export default Card;
