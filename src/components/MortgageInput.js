import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class MortgageInput extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            text: '',
        };
    }

    getText = () => {
        // We have this function in order to get the value
        // from outside the component
        return this.state.text;
    };

    resetText = () => {
        this.setState({ text: '' });
    };

    render() {
        return (
            <TextInput
                {...this.props}
                autoCorrect={false}
                style={styles.input}
                keyboardType="numeric"
                placeholderTextColor="black"
                blurOnSubmit={false}
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 10,
        width: '75%',
        borderRadius: 12,
        textAlign: 'center',
        marginVertical: 5,
    },
});
