import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const SuccessScreen: React.FC = () => (
  <View style={styles.container}>
    {/* ---------- Heading ---------- */}
    <Text style={styles.emoji}>🎉</Text>
    <Text style={styles.title}>Congratulations!</Text>
    <Text style={styles.subtitle}>
      Your account has been successfully{'\n'}created
    </Text>

    {/* ---------- Call-out ---------- */}
    <Text style={styles.callout}>
      Join the Empowering{'\n'}the Nation Family!
    </Text>

    {/* ---------- CTA ---------- */}
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Let's get started</Text>
    </TouchableOpacity>
  </View>
);

/* -------------------- Styles -------------------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 24,
  },
  callout: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#7fe7f2',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 24,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});