import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface SignupScreenProps {
  navigation: any;
}

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleSignup = () => {
    console.log('Sign up pressed', { fullName, email, username, password, repeatPassword });
    
     navigation.navigate('home');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSocialSignup = (platform: string) => {
    console.log(`Sign up with ${platform}`);
   
  };

  return (
    <LinearGradient
      colors={['#6BC8C3', '#C6E2FC']}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <ScrollView 
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {/* Top Section */}
            <View style={styles.topSection}>
              <Text style={styles.signupTitle}>Sign up</Text>
              <Text style={styles.subtitle}>Create a new account</Text>
            </View>

            {/* Bottom Section - Form Card */}
            <View style={styles.formCard}>
              {/* Full Name Input */}
              <Text style={styles.label}>Full name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Enter your full name"
                  placeholderTextColor="#9CA3AF"
                  style={styles.input}
                  value={fullName}
                  onChangeText={setFullName}
                  autoCapitalize="words"
                />
                <View style={styles.iconContainer}>
                  <Text style={styles.inputIcon}>👤</Text>
                </View>
              </View>

              {/* Email Input */}
              <Text style={styles.label}>Email Address</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Enter your email"
                  placeholderTextColor="#9CA3AF"
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <View style={styles.iconContainer}>
                  <Text style={styles.inputIcon}>✉️</Text>
                </View>
              </View>

              {/* Username Input */}
              <Text style={styles.label}>Create a username</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Enter your Username"
                  placeholderTextColor="#9CA3AF"
                  style={styles.input}
                  value={username}
                  onChangeText={setUsername}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <View style={styles.iconContainer}>
                  <Text style={styles.inputIcon}>👨</Text>
                </View>
              </View>

              {/* Password Input */}
              <Text style={styles.label}>Create your password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="••••••••••"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={!showPassword}
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity 
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.iconContainer}
                  activeOpacity={0.7}
                >
                  <Text style={styles.inputIcon}>
                    {showPassword ? '👁️' : '🔑'}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Repeat Password Input */}
              <Text style={styles.label}>Repeat password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="••••••••••"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={!showRepeatPassword}
                  style={styles.input}
                  value={repeatPassword}
                  onChangeText={setRepeatPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity 
                  onPress={() => setShowRepeatPassword(!showRepeatPassword)}
                  style={styles.iconContainer}
                  activeOpacity={0.7}
                >
                  <Text style={styles.inputIcon}>
                    {showRepeatPassword ? '👁️' : '🔒'}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Sign up button */}
              <TouchableOpacity 
                style={styles.signupButton}
                onPress={handleSignup}
                activeOpacity={0.85}
              >
                <LinearGradient
                   colors={["#004D4D", "#006666"]}
                  style={styles.buttonGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Text style={styles.signupButtonText}>Sign up</Text>
                </LinearGradient>
              </TouchableOpacity>

              {/* Or sign up with */}
              <View style={styles.dividerContainer}>
                <View style={styles.dividerLine} />
                <Text style={styles.orText}>Or Sign up with</Text>
                <View style={styles.dividerLine} />
              </View>

              {/* Social Signup Buttons */}
              <View style={styles.socialContainer}>
                <TouchableOpacity 
                  style={styles.socialButton}
                  onPress={() => handleSocialSignup('Google')}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={['#FFFFFF', '#F8F9FA']}
                    style={styles.socialGradient}
                  >
                    <Text style={styles.socialIconText}>G</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.socialButton}
                  onPress={() => handleSocialSignup('Facebook')}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={['#FFFFFF', '#F8F9FA']}
                    style={styles.socialGradient}
                  >
                    <Text style={styles.socialIconText}>f</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.socialButton}
                  onPress={() => handleSocialSignup('Twitter')}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={['#FFFFFF', '#F8F9FA']}
                    style={styles.socialGradient}
                  >
                    <Text style={styles.socialIconText}>𝕏</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>

              {/* Footer */}
              <Text style={styles.footer}>
                Already have an account?{' '}
                <Text style={styles.loginLink} onPress={handleLogin}>
                  Log in
                </Text>
                {' '}here
              </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  topSection: {
    paddingHorizontal: 32,
    paddingTop: 50,
    paddingBottom: 40,
    alignItems: 'center',
  },
  signupTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 17,
    color: '#4B5563',
    fontWeight: '400',
    textAlign: 'center',
  },
  formCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    marginHorizontal: 20,
    borderRadius: 24,
    paddingHorizontal: 28,
    paddingTop: 32,
    paddingBottom: 36,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 10,
    marginTop: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#D1D5DB',
    paddingHorizontal: 16,
    height: 54,
    marginBottom: 18,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  iconContainer: {
    paddingLeft: 8,
  },
  inputIcon: {
    fontSize: 20,
  },
  signupButton: {
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 8,
    marginBottom: 24,
    shadowColor: '#16697A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#D1D5DB',
  },
  orText: {
    fontSize: 14,
    color: '#6B7280',
    marginHorizontal: 16,
    fontWeight: '500',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 32,
  },
  socialButton: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  socialGradient: {
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
  },
  socialIconText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#374151',
  },
  footer: {
    color: '#6B7280',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
  },
  loginLink: {
    fontWeight: '700',
    color: '#16697A',
    textDecorationLine: 'underline',
  },
});

export default SignupScreen;