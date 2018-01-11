import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
    state = { loggedIn: null };


    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyB8LOMYC2a6HAvdgltkVzkosuw32K1gY3Q',
            authDomain: 'auth-aab95.firebaseapp.com',
            databaseURL: 'https://auth-aab95.firebaseio.com',
            projectId: 'auth-aab95',
            storageBucket: 'auth-aab95.appspot.com',
            messagingSenderId: '71115642752'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true: 
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;