import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
/*Code Attribution
    Title: Mobile App Scripting (Introduction) [MAST5112]
    Author: The Independent Institute of Education (Pty) Ltd
    Date Accessed: 1 September 2025
    Date Created: 2025
    Version: Not specified
    Availability: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true&DefaultItemOpen=1
*/
interface Course { // Define a Course interface
  name: string;
  price: number;
}

export default function CourseFeeCalculationScreen({ navigation }) {
  // Setting state variables for contact information
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [selectedCourses, setSelectedCourses] = useState<{ // Define selectedCourses state
    [key: string]: boolean; // Dynamic keys for course names
  }>({
    "First-Aid": false,
    Sewing: false,
    Landscape: false,
    "Life-Skills": false,
    Cooking: false,
    "Child minding": false,
    "Garden maintenance": false,
  });

  const courses: { [key: string]: number } = {
    "First-Aid": 1500,
    Sewing: 1500,
    Landscape: 1500,
    "Life-Skills": 1500,
    Cooking: 750,
    "Child minding": 750,
    "Garden maintenance": 750,
  };

  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [vat, setVat] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

/* 
  Code Attribution
  Title: React useEffect Hooks
  Author: W3Schools
  Date Accessed: 17 October 2025
  Date Created: 2025
  Version: Not specified
  Availability: https://www.w3schools.com/react/react_useeffect.asp
    
*/
  useEffect(() => {
    calculateFees();
  }, [selectedCourses]);

  const toggleCourse = (courseName: string) => {
    setSelectedCourses((prev) => ({
      ...prev,
      [courseName]: !prev[courseName],
    }));
  };

  const calculateFees = () => {
    const selectedCount = Object.values(selectedCourses).filter(Boolean).length;

    // Calculate subtotal
    let subtotal = 0;
    Object.keys(selectedCourses).forEach((courseName) => {
      if (selectedCourses[courseName]) {
        subtotal += courses[courseName];
      }
    });

    // Calculate discount percentage
    let discountPercentage = 0;
    if (selectedCount === 2) discountPercentage = 0.05;
    else if (selectedCount === 3) discountPercentage = 0.1;
    else if (selectedCount >= 4) discountPercentage = 0.15;

    const discountAmount = subtotal * discountPercentage;
    const afterDiscount = subtotal - discountAmount;
    const vatAmount = afterDiscount * 0.15;
    const total = afterDiscount + vatAmount;

    setSubTotal(subtotal);
    setDiscount(discountAmount);
    setDiscountPercent(discountPercentage * 100);
    setVat(vatAmount);
    setTotalAmount(total);
  };

  const handleBackPress = () => {
    navigation.navigate("home");
  };

  const handleMenuPress = () => {
    console.log("Menu pressed");
  };

  const handleEnroll = () => {
    console.log("Ready to Enroll pressed");
    alert("Enrollment process initiated!");
  };

  const handleNavigation = (screen: string) => {
    navigation.navigate(screen);
  };

  const getDiscountText = () => {
    const count = Object.values(selectedCourses).filter(Boolean).length;
    if (count === 1) return "1 Course : No Discount";
    if (count === 2) return "2 Courses: 5% Discount";
    if (count === 3) return "3 Courses: 10% Discount";
    if (count >= 4) return "4+ Courses: 15% Discount";
    return "No courses selected";
  };

  return (
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
              <Ionicons name="arrow-back" size={24} color="#2C3E50" />
            </TouchableOpacity>

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

          {/* Title */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Course Fee Calculation</Text>
          </View>

          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Contact Information */}
            <View style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>Contact Information</Text>

              <Text style={styles.label}>Full name</Text>
              <TextInput
                placeholder="Enter full name"
                placeholderTextColor="#9CA3AF"
                style={styles.input}
                value={fullName}
                onChangeText={setFullName}
              />

              <Text style={styles.label}>Enter Phone number</Text>
              <TextInput
                placeholder="Enter phone number"
                placeholderTextColor="#9CA3AF"
                style={styles.input}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
              />

              <Text style={styles.label}>Enter Email</Text>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="#9CA3AF"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Discount Allocation */}
            <View style={styles.discountCard}>
              <Text style={styles.discountTitle}>Discount Allocation</Text>
              <Text style={styles.discountText}>1 Course : No Discount</Text>
              <Text style={styles.discountText}>2 Courses: 5% Discount</Text>
              <Text style={styles.discountText}>3 Courses: 10% Discount</Text>
              <Text style={styles.discountText}>4+ Courses: 15% Discount</Text>
            </View>

            {/* Select Courses */}
            <View style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>Select Courses</Text>

              {Object.keys(courses).map((courseName) => (
                <TouchableOpacity
                  key={courseName}
                  style={styles.courseRow}
                  onPress={() => toggleCourse(courseName)}
                  activeOpacity={0.7}
                >
                  <View style={styles.checkboxContainer}>
                    <View
                      style={[
                        styles.checkbox,
                        selectedCourses[courseName] && styles.checkboxChecked,
                      ]}
                    >
                      {selectedCourses[courseName] && (
                        <Ionicons name="checkmark" size={18} color="#FFFFFF" />
                      )}
                    </View>
                    <Text style={styles.courseName}>{courseName}</Text>
                  </View>
                  <Text style={styles.coursePrice}>R{courses[courseName]}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Total Fees */}
            <View style={styles.totalCard}>
              <Text style={styles.totalTitle}>Total Fees</Text>

              {Object.keys(selectedCourses).map(
                (courseName) =>
                  selectedCourses[courseName] && (
                    <View key={courseName} style={styles.feeRow}>
                      <Text style={styles.feeLabel}>{courseName} Course</Text>
                      <Text style={styles.feeValue}>
                        R{courses[courseName]}
                      </Text>
                    </View>
                  )
              )}

              <View style={styles.divider} />

              <View style={styles.feeRow}>
                <Text style={styles.feeLabel}>Sub Total:</Text>
                <Text style={styles.feeValue}>R{subTotal}</Text>
              </View>

              <View style={styles.feeRow}>
                <Text style={styles.feeLabelBold}>
                  Discount ({discountPercent}%) :
                </Text>
                <Text style={styles.feeValue}>R{discount.toFixed(2)}</Text>
              </View>

              <View style={styles.feeRow}>
                <Text style={styles.feeLabelBold}>VAT (15%) :</Text>
                <Text style={styles.feeValue}>R{vat.toFixed(2)}</Text>
              </View>

              <View style={styles.feeRow}>
                <Text style={styles.feeLabelBold}>Total Amount :</Text>
                <Text style={styles.feeTotalValue}>
                  R{totalAmount.toFixed(2)}
                </Text>
              </View>
            </View>

            {/* Ready to Enroll Button */}
            <TouchableOpacity
              style={styles.enrollButton}
              onPress={handleEnroll}
              activeOpacity={0.85}
            >
              <LinearGradient
                colors={["#004D4D", "#006666"]}
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonText}>Ready to Enroll</Text>
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
    marginTop: 30,
    paddingVertical: 10,
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
  titleContainer: {
    paddingHorizontal: 32,
    paddingVertical: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  sectionCard: {
    backgroundColor: "rgba(200, 228, 240, 0.7)",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2C3E50",
    marginBottom: 8,
    marginTop: 8,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#2C3E50",
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#2C3E50",
    marginBottom: 12,
  },
  discountCard: {
    backgroundColor: "#5FCCCC",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  discountTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 12,
  },
  discountText: {
    fontSize: 16,
    color: "#2C3E50",
    marginBottom: 6,
    fontWeight: "500",
  },
  courseRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#D1D5DB",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#2C3E50",
    backgroundColor: "#FFFFFF",
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#2C3E50",
    borderColor: "#2C3E50",
  },
  courseName: {
    fontSize: 16,
    color: "#2C3E50",
    fontWeight: "500",
  },
  coursePrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#B8860B",
  },
  calculateButton: {
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
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
  totalCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  totalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 16,
    textAlign: "center",
  },
  feeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  feeLabel: {
    fontSize: 15,
    color: "#4B5563",
  },
  feeLabelBold: {
    fontSize: 16,
    color: "#2C3E50",
    fontWeight: "bold",
  },
  feeValue: {
    fontSize: 16,
    color: "#B8860B",
    fontWeight: "600",
  },
  feeTotalValue: {
    fontSize: 18,
    color: "#B8860B",
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#D1D5DB",
    marginVertical: 12,
  },
  enrollButton: {
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