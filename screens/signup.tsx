import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,

} from 'react-native';
import { useState } from 'react';

export default function SignUpScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [valid, setValid] = useState(false);

  const handleSignUp = () => {
    if (password !== confirmPassword)  {
      alert("Passwords do not match");
     
    } else if (!email || !password || !fullName || !confirmPassword) {
      alert("Please fill all fields");
     
    } else if (password.length < 6) {
      alert("Password should be at least 6 characters");
    
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email");
     
    }else{
      setValid(true);
      return;
    }

    if (valid) {
      alert("Account created successfully!");
      navigation.navigate('login');
    }
  }
  return (
  <View style={styles.container}>
    {/* ------- Title ------- */}
    <Text style={styles.title}>Create an Account</Text>

    {/* ------- Full Name ------- */}
    <Text style={styles.label}>Full name: </Text>
    <TextInput
      placeholder="Enter your Full name"
      placeholderTextColor="#888"
      style={styles.input}
      onChangeText={text => setFullName(text)}
    />

    {/* ------- Email ------- */}
    <Text style={styles.label}>Enter Email: </Text>
    <TextInput
      placeholder="Enter your email"
      placeholderTextColor="#888"
      keyboardType="email-address"
      style={styles.input}
      onChangeText={text => setEmail(text)}
    />

    {/* ------- Password ------- */}
    <Text style={styles.label}>Create a password</Text>
    <TextInput
      placeholder="*********"
      placeholderTextColor="#888"
      secureTextEntry
      style={styles.input}
      onChangeText={text => setPassword(text)}
    />

    {/* ------- Confirm Password ------- */}
    <Text style={styles.label}>Confirm password: </Text>
    <TextInput
      placeholder="*********"
      placeholderTextColor="#888"
      secureTextEntry
      style={styles.input}
      onChangeText={text => setConfirmPassword(text)}
    />

    {/* ------- Sign-Up Button ------- */}
    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
      <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
  </View>
);};

/* -------------------- Styles -------------------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF',
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 32,
  },
  label: {
    color: '#000',
    fontSize: 18,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#7fe7f2',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});