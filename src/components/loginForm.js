import React, {Component} from 'react';
import {Card, CardSection, Button, Input} from './common';


class LoginForm extends Component {
    state = {email: ''};

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        placeholder='youremail@gmail.com'
                        label='Email'
                        value = {this.state.email}
                        onChangeText={email => this.setState({email})}
                    />
                </CardSection>

                <CardSection>
                </CardSection>

                <CardSection>
                    <Button>Log in</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;