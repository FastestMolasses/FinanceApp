import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

import BigButton from './components/BigButton';
import MortgageInput from './components/MortgageInput';

export default class MainPage extends React.Component {
    constructor() {
        super();

        this.state = {
            instructionsText:
                'Enter your information to calculate your mortgage.',
        };
    }

    resetText = () => {
        this.rateInput.resetText();
        this.pvInput.resetText();
        this.yearInput.resetText();

        this.setState({
            instructionsText:
                'Enter your information to calculate your mortgage.',
        });
    };

    calculateMortgage = () => {
        rate = this.rateInput.getText();
        pv = this.pvInput.getText();
        years = this.yearInput.getText();

        // Decide what text should be displayed based on inputs
        // Also calculate the mortgage
        if (rate && pv && years)
        {
            // Build the text to display
            text =
                'At a rate of ' +
                this.rateInput.getText() +
                '% with ' +
                this.yearInput.getText() * 12 +
                ' months and a principal of ' +
                this.pvInput.getText() +
                ', your monthly mortgage payment will be $' +
                Math.round(mortgage) +
                ' per month.';

            this.setState({
                instructionsText: text,
            });
        }
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* ============HEADER============== */}

                <View style={styles.header}>
                    <Text style={styles.headerText}>Mortgage Calculator</Text>
                </View>

                {/* ================================ */}
                {/* ==============BODY============== */}

                <View style={styles.body}>
                    <Text style={styles.instructionsText}>
                        {this.state.instructionsText}
                    </Text>

                    <MortgageInput
                        placeholder="Rate"
                        ref={i => (this.rateInput = i)}
                    />
                    <MortgageInput
                        placeholder="Present Value"
                        ref={i => (this.pvInput = i)}
                    />
                    <MortgageInput
                        placeholder="Years"
                        ref={i => (this.yearInput = i)}
                        onSubmitEditing={() => this.calculateMortgage()}
                    />
                    <BigButton text={'Reset'} onPress={this.resetText} />
                    <BigButton
                        text={'Submit'}
                        onPress={this.calculateMortgage}
                    />
                </View>

                {/* ================================ */}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 70,
        justifyContent: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    body: {
        flex: 1,
        marginHorizontal: 20,
        alignItems: 'center',
        paddingTop: 50,
    },
    instructionsText: {
        width: '70%',
        marginBottom: 10,
    },
});
