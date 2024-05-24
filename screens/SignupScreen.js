import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { login, register } from '../api';

const SignupScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            await register(username, password);
            Alert.alert('Signup successful', 'You can now log in');
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert('Error', 'Could not register user');
        }
    };

    return (
        <View style={styles.container}>
            <Text>Signup</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
             <View style= {styles.button}>
            <Button  title="SignUP" onPress={handleSignup} />
            </View>
            
            <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        width: '80%',
    },
    button: {
        padding: 40,

    }
});

export default SignupScreen;