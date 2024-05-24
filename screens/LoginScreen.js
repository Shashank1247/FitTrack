import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { login, register } from '../api.js';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const data = await login(username, password);
            Alert.alert('Login successful', `Token: ${data.token}`);
            // Navigate to the Home screen
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert('Error', 'Invalid credentials');
        }
    };

    
    return (
        <View style={styles.container}>
            <Text>Login</Text>
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
            <Button  title="Login" onPress={handleLogin} />
            </View>
            
            <Button style= {styles.button} title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
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

export default LoginScreen;