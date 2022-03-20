import React, { Component } from 'react';
import { StyleSheet, Button } from "react-native";

const CustomButton = (props) => {
    return (
        <Button
            onPress={props.onPress}
            title={props.title}
            color="#ee125a"
        />
    );
}

export default CustomButton;
