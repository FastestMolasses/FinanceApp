import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default class BigButton extends React.PureComponent
{
    render()
    {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={this.props.onPress}
            >
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: 40,
        borderRadius: 12,
        marginVertical: 5,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
