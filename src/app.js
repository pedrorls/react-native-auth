import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Card, CardSection, Button, Spinner} from './components/common';
import LoginForm from './components/loginForm';


class App extends Component {
    state = {loggedIn: null}

    componentWillMount() {
          firebase.initializeApp({
            apiKey: 'AIzaSyAMvUZmLobEhMWvDwSrbbXRZSBIeu0qhCk',
            authDomain: 'auth-6199a.firebaseapp.com',
            databaseURL: 'https://auth-6199a.firebaseio.com',
            projectId: 'auth-6199a',
            storageBucket: 'auth-6199a.appspot.com',
            messagingSenderId: '827588999294'
          });

          firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({loggedIn: true})
            } else {
                this.setState({loggedIn: false})
            }
          });

    }

    renderContent(){
        switch(this.state.loggedIn){
            case true:
                return(
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                LogOut
                            </Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm/>;            
            default:
                return <Spinner size='large'/>
        }
    }

    render() {
        return(
            <View>
                <Header headerText='Authentication'/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;