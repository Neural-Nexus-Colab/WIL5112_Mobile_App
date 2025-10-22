import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
/*Code Attribution
    Title: Mobile App Scripting (Introduction) [MAST5112]
    Author: The Independent Institute of Education (Pty) Ltd
    Date Accessed: 1 September 2025
    Date Created: 2025
    Version: Not specified
    Availability: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true&DefaultItemOpen=1
*/
export default function WelcomeScreen({ navigation }) {
  return (
    <LinearGradient colors={["#55c8c2ff", "#C6E2FC"]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          {/* Logo Section */}
          <View style={styles.logoContainer}>
            <View style={styles.logoCircle}>
              {/* You can replace this with your actual logo SVG or image */}
              <Image
                source={require("../logo/wil_logo_amended2.jpg")}
                style={styles.logoCircle}
              />
            </View>
          </View>

          {/* Title Section */}
          <View style={styles.titleContainer}>
            <Text style={styles.welcomeText}>Welcome to</Text>
            <Text style={styles.mainTitle}>Empowering the Nation</Text>
          </View>

          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Building Skills, Building Futures -{"\n"}
            Your journey starts here.
          </Text>

          {/* Spacer */}
          <View style={styles.spacer} />

          {/* Buttons Section */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={() => navigation.navigate("Signup")}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={["#004D4D", "#006666"]}
                style={styles.buttonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.buttonText}>Sign Up</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.logInButton}
              onPress={() => navigation.navigate("Login")}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={["#004D4D", "#006666"]}
                style={styles.buttonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.buttonText}>Log in</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("home")}
              activeOpacity={0.7}
            >
              <Text style={styles.guestText}>
                Continue as a <Text style={styles.guestBold}>guest</Text>
              </Text>
            </TouchableOpacity>
          </View>

          {/* Terms and Conditions */}
          <Text style={styles.termsText}>
            By signing up, I agree to the Terms and Conditions{"\n"}
            and Privacy Policy.
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: 40,
    marginBottom: 30,
  },
  logoCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  logoPlaceholder: {
    fontSize: 80,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: '400',
    color: '#2C3E50',
    marginBottom: 5,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#34495E',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  spacer: {
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  signUpButton: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#004D4D',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  logInButton: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#004D4D',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonGradient: {
    paddingVertical: 18,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  guestText: {
    fontSize: 16,
    color: '#5A6C7D',
    textAlign: 'center',
    marginTop: 8,
  },
  guestBold: {
    fontWeight: '700',
    color: '#2C3E50',
  },
  termsText: {
    fontSize: 12,
    color: '#7F8C8D',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 18,
  },
});

/* References:

- Expo, 2025. Expo LinearGradient. [online].Available at: < https://docs.expo.dev/versions/latest/sdk/linear-gradient/ > [Accessed date: 1 October 2025].

- Miro, 2025. Mobile App Prototype. [online]. Available at: <https://miro.com/app/board/uXjVJEso5js=/> [Accessed date: 27 September 2025].

- React, 2025. React The library for web and native user interfaces. [onlines]. Available at: < https://react.dev/ > [Accessed date: 27 September 2025].

- React Typescript Cheat sheet, 2025. React Native Cheat Sheet. [online]. Available at: <https://react-typescript-cheatsheet.netlify.app/> [Accessed date: 27 September 2025].

- freeCodeCamp, 2023. TypeScript Handbook for React Developers – How to Build a Type-Safe Todo App. [online]. Available at: < https://www.freecodecamp.org/news/typescript-tutorial-for-react-developers/ > [Accessed date: 27 September 2025].

- Typescriptlag, 2025. The TypeScript Handbook. [online]. Available at: < https://www.typescriptlang.org/docs/handbook/intro.html > [Accessed date: 27 September 2025].

- C# Corner User: Md Sarafaraj, [2023]. FlatList vs SectionList in React Native- Choosing the Right List Component for Your App. [online]. Available at: < https://www.c-sharpcorner.com/article/flatlist-vs-sectionlist-in-react-native-choosing-the-right-list-component-for-y/  > [Accessed date: 17 October 2025].

- React Handbook, [s.d]. Proficiency with the Hooks API. [online]. Available at: < https://reacthandbook.dev/hooks > [Accessed date: 10 October 2025]

- React Navigation, [s.d]. Hello React Navigation. [online]. Available at:< https://reactnavigation.org/docs/hello-react-navigation > [Accessed date: 10 October 2025].

- React Navigation, [s.d]. Configuring the Header Bar. [online]. Available at: < https://reactnavigation.org/docs/headers > [Accessed date: 10 October 2025].

- React Navigation, [s.a]. Nesting Navigators. [online]. Available at: < https://reactnavigation.org/docs/nesting-navigators > [Accessed date: 10 October 2025].

- React Typescript Cheatsheet, [s.d]. Hooks. [online]. Available at:< https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks > [Accessed date: 10 October 2025].

- React Native, [s.d]. FlatList. [online]. Available at: < https://reactnative.dev/docs/flatlist > [Accessed date: 14 October 2025].

- React Native Archive, [s.d]. Picker. [online]. Available at:< https://archive.reactnative.dev/docs/picker > [Accessed date: 10 October 2025].

*/