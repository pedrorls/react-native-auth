import React, {Component} from 'react';
import {Card, CardSection, Button, Input} from './common';


class LoginForm extends Component {
    state = {email: '', password: ''};

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        placeholder='youremail@gmail.com'
                        label='Email'
                        secureTextEntry={undefined}
                        value = {this.state.email}
                        onChangeText={email => this.setState({email})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder='password'
                        label='Password'
                        value = {this.state.password}
                        onChangeText={password => this.setState({password})}
                    />
                </CardSection>

                <CardSection>
                    <Button>Log in</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;