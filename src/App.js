import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyB8LOMYC2a6HAvdgltkVzkosuw32K1gY3Q',
            authDomain: 'auth-aab95.firebaseapp.com',
            databaseURL: 'https://auth-aab95.firebaseio.com',
            projectId: 'auth-aab95',
            storageBucket: 'auth-aab95.appspot.com',
            messagingSenderId: '71115642752'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;