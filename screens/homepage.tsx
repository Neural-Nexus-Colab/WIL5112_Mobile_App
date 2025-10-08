import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const handleMenuPress = () => {
    console.log("Menu pressed");
    // Open menu drawer
  };

  const handleNavigation = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <LinearGradient colors={["#55c8c2ff", "#C6E2FC"]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.innerContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Header with Logo and Menu */}
            <View style={styles.headerContainer}>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={handleMenuPress}
                activeOpacity={0.7}
              >
                <View style={styles.menuIcon}>
                  <View style={styles.menuLine} />
                  <View style={styles.menuLine} />
                  <View style={styles.menuLine} />
                </View>
              </TouchableOpacity>
            </View>

            {/* Logo Section */}
            <View style={styles.logoContainer}>
              <View style={styles.logoCircle}>
                <Image
                  source={require("../logo/wil_logo_amended2.jpg")}
                  style={styles.logoCircle}
                />
              </View>
            </View>

            {/* Title Section */}
            <View style={styles.titleSection}>
              <Text style={styles.mainTitle}>Empowering the Nation</Text>
              <Text style={styles.subtitle}>
                Building Skills, Building Futures
              </Text>
            </View>

            {/* Description Card */}
            <View style={styles.descriptionCard}>
              <Text style={styles.descriptionText}>
                Empowering the Nation specializes in providing high-quality
                skills development programs that are high-quality skills
                development programs that prepare individuals for meaningful
                employment and entrepreneurship. Our courses are designed to be
                practical, accessible and industry relevant.
              </Text>
            </View>

            {/* Navigation Buttons */}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.navButton}
                onPress={() => handleNavigation("monthcourses")}
                activeOpacity={0.85}
              >
                <LinearGradient
                  colors={["#004D4D", "#006666"]}
                  style={styles.buttonGradient}
                >
                  <MaterialCommunityIcons
                    name="file-document-outline"
                    size={24}
                    color="#FFFFFF"
                  />
                  <Text style={styles.buttonText}>Six Month Courses</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.navButton}
                onPress={() => handleNavigation("sixweekcourses")}
                activeOpacity={0.85}
              >
                <LinearGradient
                  colors={["#004D4D", "#006666"]}
                  style={styles.buttonGradient}
                >
                  <MaterialCommunityIcons
                    name="book-open-variant"
                    size={24}
                    color="#FFFFFF"
                  />
                  <Text style={styles.buttonText}>Six Week Courses</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.navButton}
                onPress={() => handleNavigation("calc")}
                activeOpacity={0.85}
              >
                <LinearGradient
                  colors={["#004D4D", "#006666"]}
                  style={styles.buttonGradient}
                >
                  <MaterialCommunityIcons
                    name="calculator"
                    size={24}
                    color="#FFFFFF"
                  />
                  <Text style={styles.buttonText}>Calculate fees</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.navButton}
                onPress={() => handleNavigation("")}
                activeOpacity={0.85}
              >
                <LinearGradient
                  colors={["#004D4D", "#006666"]}
                  style={styles.buttonGradient}
                >
                  <Ionicons name="call-outline" size={24} color="#FFFFFF" />
                  <Text style={styles.buttonText}>Contact Us</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Bottom Navigation */}
          <View style={styles.bottomNav}>
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => handleNavigation("home")}
              activeOpacity={0.7}
            >
              <Ionicons name="home-outline" size={24} color="#4B5563" />
              <Text style={styles.navLabel}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navItem}
              onPress={() => handleNavigation("calc")}
              activeOpacity={0.7}
            >
              <MaterialCommunityIcons
                name="calculator"
                size={24}
                color="#4B5563"
              />
              <Text style={styles.navLabel}>Calculator</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navItem}
              onPress={() => handleNavigation("")}
              activeOpacity={0.7}
            >
              <Ionicons name="call-outline" size={24} color="#4B5563" />
              <Text style={styles.navLabel}>Contact</Text>
            </TouchableOpacity>
          </View>
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
  innerContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 30,
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    gap: 6,
  },
  menuLine: {
    width: 30,
    height: 3,
    backgroundColor: "#2C3E50",
    borderRadius: 2,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  logoCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  logoPlaceholder: {
    fontSize: 70,
  },
  titleSection: {
    alignItems: "center",
    paddingHorizontal: 32,
    marginBottom: 30,
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2C3E50",
    textAlign: "center",
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 18,
    color: "#4B5563",
    textAlign: "center",
    fontWeight: "500",
  },
  descriptionCard: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    marginHorizontal: 30,
    borderRadius: 20,
    padding: 24,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  descriptionText: {
    fontSize: 16,
    color: "#4B5563",
    textAlign: "center",
    lineHeight: 24,
  },
  buttonsContainer: {
    paddingHorizontal: 30,
    gap: 16,
  },
  navButton: {
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#16697A",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonGradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
    gap: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navLabel: {
    fontSize: 12,
    color: "#4B5563",
    fontWeight: "600",
    marginTop: 4,
  },
});
