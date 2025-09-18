import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function LoginScreen({navigation})  {
  return (
  <View style={s.container}>
    {/* Heading */}
    <Text style={s.logintitle}>Login</Text>
    <Text style={s.journey}>And Continue Your Journey</Text>

    {/* ---------- Email ---------- */}
    <Text style={s.label}>Enter Email:</Text>
    <View style={s.inputRow}>
      <Text style={s.icon}>✉️</Text>
      <TextInput
        placeholder="Enter your email"
        placeholderTextColor="#888"
        style={s.inputFlex}
      />
    </View>

    {/* ---------- Password ---------- */}
    <Text style={s.label}>Enter Password: </Text>
    <View style={s.inputRow}>
      <Text style={s.icon}>🔒</Text>
      <TextInput
        placeholder="Enter your password"
        placeholderTextColor="#888"
        secureTextEntry
        style={s.inputFlex}
      />
    </View>

    {/* Forgot */}
    <TouchableOpacity>
      <Text style={s.forgot}>Forgot Password ?</Text>
    </TouchableOpacity>

    {/* Log-in button */}
    <TouchableOpacity style={s.btn}>
      <Text style={s.btnTxt}>Log In</Text>
    </TouchableOpacity>

    {/* Footer */}
    <Text style={s.footer}>
      Don't have an account ? <Text style={s.link}>sign up!</Text>
    </Text>
  </View>
);};

/* -------------------- styles -------------------- */
const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF',
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
  logintitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
   
  },
  journey: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 40,
    
  },
  label: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 4,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 16,
    marginBottom: 16,
    height: 48,
  },
  icon: { fontSize: 18, marginRight: 8 },
  inputFlex: { flex: 1, fontSize: 16 },
  forgot: {
    color: '#000',
    alignSelf: 'flex-end',
    marginBottom: 24,
    fontSize: 14,
  },
  btn: {
    backgroundColor: '#7fe7f2',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
    marginBottom: 16,
  },
  btnTxt: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
  },
  link: {
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});