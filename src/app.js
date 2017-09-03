import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/loginForm';


class App extends Component {
    componentWillMount() {
          firebase.initializeApp({
            apiKey: 'AIzaSyAMvUZmLobEhMWvDwSrbbXRZSBIeu0qhCk',
            authDomain: 'auth-6199a.firebaseapp.com',
            databaseURL: 'https://auth-6199a.firebaseio.com',
            projectId: 'auth-6199a',
            storageBucket: 'auth-6199a.appspot.com',
            messagingSenderId: '827588999294'
          });

    }

    render() {
        return(
            <View>
                <Header headerText='Authentication'/>
                <LoginForm></LoginForm>
            </View>
        );
    }
}

export default App;