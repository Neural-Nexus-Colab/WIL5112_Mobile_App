import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      {/* ——— logo circle ——— */}
      <View style={styles.logo} />

      {/* ——— text stack ——— */}
      <Text style={styles.welcome}>Welcome to</Text>
      <Text style={styles.empowerLine}>Empowering the</Text>
      <Text style={styles.nationLine}>Nation</Text>
      <Text style={styles.tagline}>Building Skills, Building Futures</Text>

      {/* ——— buttons ——— */}
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.btnTxt}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btnTxt}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

/* -------------------------------------------------- */
/* -------------------- styles ---------------------- */
/* -------------------------------------------------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },

  logo: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#FFFFFF',
    marginBottom: 24,
  },

  welcome: {
    fontSize: 26,
    color: '#022243',
    marginBottom: 4,
  },

  empowerLine: {
    fontSize: 42,
    fontWeight: '700',
    color: '#022243',
    textAlign: 'center',
  },

  nationLine: {
    fontSize: 42,
    fontWeight: '700',
    color: '#022243',
    textAlign: 'center',
    marginBottom: 8,
  },

  tagline: {
    fontSize: 20,
    color: '000',
    opacity: 0.9,
    marginBottom: 40,
  },

  btn: {
    width: '100%',
    backgroundColor: '#7fe7f2',
    paddingVertical: 14,
    borderRadius: 24,
    marginVertical: 6,
    alignItems: 'center',
  },

  btnTxt: {
    color: '#000',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});