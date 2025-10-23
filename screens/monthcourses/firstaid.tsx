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
/*Code Attribution
    Title: Mobile App Scripting (Introduction) [MAST5112]
    Author: The Independent Institute of Education (Pty) Ltd
    Date Accessed: 1 September 2025
    Date Created: 2025
    Version: Not specified
    Availability: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true&DefaultItemOpen=1
*/
export default function FirstAidCourseDetailScreen({ navigation }) {
  const contentItems = [
    "Clinical Skills",
    "Patient Communication",
    "Wound Care",
    "Bleeding Control",
    "Burns & Sprains Treatment",
    "Fracture Treatment",
    "Stroke Recognition",
    "CPR(Cardiopulmonary Resuscitation)",
  ];
  // Function to handle back button press
  const handleBackPress = () => {
    navigation.navigate("monthcourses");
  };

  const handleMenuPress = () => {};

  const handleNext = () => {  
    // Navigate to the Sewing course screen

    navigation.navigate("sewing");
  };
  // Function to handle bottom navigation
  const handleNavigation = (screen: string) => {
    // TypeScript type annotation added
    navigation.navigate(screen); // Navigate to the selected screen
  };

  return (
    /*Code Attribution
        Title: Expo Linear Gradient
        Author: Expo Documentation
        Date Accessed: 1 September 2025
        Date Created: [s.d]
        Version: Not specified
        Availability: https://docs.expo.dev/versions/latest/sdk/linear-gradient/
    */
    <LinearGradient colors={["#55c8c2ff", "#C6E2FC"]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.innerContainer}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={handleBackPress}
              activeOpacity={0.7}
            >
              {/*Code Attribution
                    Title: Expo Vector Icons
                    Author: Expo Documentation
                    Date Accessed: 14 October 2025
                    Date Created: [s.d]
                    Version: Not specified
                    Availability: https://docs.expo.dev/guides/icons/
                */}
              <Ionicons name="arrow-back" size={24} color="#2C3E50" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>
              Explore the{"\n"}First-Aid Course
            </Text>

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
          {/*Code Attribution
                Title: ScrollView
                Author: React Native Archive
                Date Accessed: 28 September 2025
                Date Created: [s.d]
                Version: Not specified
                Availability: https://archive.reactnative.dev/docs/scrollview
            */}
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Course Image */}
            <View style={styles.imageContainer}>
              <Image
                source={require("../../monthcoursesimages/firstaidcourse.jpeg")}
                style={styles.courseImage}
                resizeMode="cover"
              />
            </View>

            {/* Content Card */}
            <View style={styles.contentCard}>
              <Text style={styles.sectionTitle}>The Content includes:</Text>

              <View style={styles.listContainer}>
                {contentItems.map((item, index) => (
                  <View key={index} style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>{item}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.certificationSection}>
                <Text style={styles.certificationTitle}>Certification:</Text>
                <Text style={styles.certificationText}>
                  Accredited certification upon completion
                </Text>
              </View>

              <Text style={styles.price}>R1500</Text>
            </View>

            {/* Next Button */}
            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleNext}
              activeOpacity={0.85}
            >
              <LinearGradient
                colors={["#004D4D", "#006666"]}
                style={styles.buttonGradient}
              >
                <Text style={styles.nextButtonText}>Next</Text>
              </LinearGradient>
            </TouchableOpacity>
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
              {/*Code Attribution
                    Title: Expo Vector Icons
                    Author: Expo Documentation
                    Date Accessed: 14 October 2025
                    Date Created: [s.d]
                    Version: Not specified
                    Availability: https://docs.expo.dev/guides/icons/
                */}
              <MaterialCommunityIcons
                name="calculator"
                size={24}
                color="#4B5563"
              />
              <Text style={styles.navLabel}>Fees</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navItem}
              onPress={() => handleNavigation("contact")}
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 30,
  },
  backButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backIcon: {
    fontSize: 24,
    color: "#2C3E50",
    fontWeight: "bold",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50",
    textAlign: "center",
    flex: 1,
    marginHorizontal: 10,
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    gap: 5,
  },
  menuLine: {
    width: 25,
    height: 3,
    backgroundColor: "#2C3E50",
    borderRadius: 2,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  imageContainer: {
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  courseImage: {
    width: "100%",
    height: 200,
    borderRadius: 16,
  },
  contentCard: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    borderLeftWidth: 5,
    borderLeftColor: "#16697A",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 16,
  },
  listContainer: {
    marginBottom: 20,
  },
  listItem: {
    flexDirection: "row",
    marginBottom: 10,
  },
  bullet: {
    fontSize: 16,
    color: "#2C3E50",
    marginRight: 10,
    fontWeight: "bold",
  },
  listText: {
    fontSize: 16,
    color: "#4B5563",
    flex: 1,
    lineHeight: 22,
  },
  certificationSection: {
    marginTop: 10,
    marginBottom: 16,
  },
  certificationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 8,
  },
  certificationText: {
    fontSize: 15,
    color: "#4B5563",
    lineHeight: 22,
  },
  price: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#B8860B",
    textAlign: "right",
  },
  nextButton: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
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
    paddingVertical: 16,
    alignItems: "center",
  },
  nextButtonText: {
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
  navIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 12,
    color: "#4B5563",
    fontWeight: "600",
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
