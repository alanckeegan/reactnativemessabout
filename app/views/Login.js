import React from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableHighlight, 
    Alert, 
    AsyncStorage } from 'react-native';
}

export class Login extends React.Component 
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
        
    }

}