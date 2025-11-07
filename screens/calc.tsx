// Import necessary React and React Native components
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

// Define TypeScript interface for Course structure
interface Course {
  name: string;
  price: number;
}

// Main component for the Course Fee Calculation Screen
// Receives navigation prop for screen navigation
export default function CourseFeeCalculationScreen({ navigation }) {
  // State variables for storing user contact information
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  // State object to track which courses are selected (true/false for each course)
  const [selectedCourses, setSelectedCourses] = useState<{
    [key: string]: boolean; // dynamic keys for course names with boolean values
  }>({
    "First-Aid": false,
    Sewing: false,
    Landscape: false,
    "Life-Skills": false,
    Cooking: false,
    "Child minding": false,
    "Garden maintenance": false,
  });

  // Object mapping course names to their prices in Rands
  // Six-month courses cost R1500, six-week courses cost R750
  const courses: { [key: string]: number } = {
    // defines the prices for each course
    "First-Aid": 1500,
    Sewing: 1500,
    Landscape: 1500,
    "Life-Skills": 1500,
    Cooking: 750,
    "Child minding": 750,
    "Garden maintenance": 750,
  };

  // State variables for calculated fee breakdown
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [vat, setVat] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Effect hook that recalculates fees whenever course selection changes
  useEffect(() => {
    calculateFees(); //calls the calculateFees function
  }, [selectedCourses]); // dependency on selectedCourses state

  // Function to toggle a course's selection status (selected/unselected)
  const toggleCourse = (courseName: string) => {
    // toggles the selection status of a course
    setSelectedCourses((prev) => ({
      // updates the state of the selected courses
      ...prev, // spreads the previous state
      [courseName]: !prev[courseName], // toggles the boolean value for the specified course
    }));
  };

  // Main calculation function for course fees
  const calculateFees = () => {
    // Count how many courses are currently selected
    const selectedCount = Object.values(selectedCourses).filter(Boolean).length; // filters the selected courses and counts them

    // Calculate subtotal by summing prices of selected courses
    let subtotal = 0;
    Object.keys(selectedCourses).forEach((courseName) => {
      // iterates through each course
      if (selectedCourses[courseName]) {
        // checks if a course is selected
        subtotal += courses[courseName]; // adds the price of the selected course to the subtotal
      }
    });

    // Determine discount percentage based on number of courses selected
    // 2 courses = 5%, 3 courses = 10%, 4+ courses = 15%
    let discountPercentage = 0;
    if (selectedCount === 2) discountPercentage = 0.05;
    else if (selectedCount === 3) discountPercentage = 0.1;
    else if (selectedCount >= 4) discountPercentage = 0.15;

    // Calculate discount amount and apply it to subtotal
    const discountAmount = subtotal * discountPercentage;
    const afterDiscount = subtotal - discountAmount;

    // Calculate VAT (15%) on the discounted amount
    const vatAmount = afterDiscount * 0.15;

    // Calculate final total amount (after discount + VAT)
    const total = afterDiscount + vatAmount;

    // Update all state variables with calculated values
    setSubTotal(subtotal);
    setDiscount(discountAmount);
    setDiscountPercent(discountPercentage * 100);
    setVat(vatAmount);
    setTotalAmount(total);
  };

  // Navigation handler to return to home screen
  const handleBackPress = () => {
    navigation.navigate("home"); // navigates back to the home screen
  };

  // Function to handle enrollment submission
  const handleEnroll = () => {
    // Validate that full name is entered
    if (!fullName.trim()) {
      // condition if the full name is empty(trim removes the whitespace)
      alert("Please enter your full name"); // sends an alert if the full name is missing
      return; // exits the function early
    }

    // Validate that phone number is entered
    if (!phoneNumber.trim()) {
      //  condition if the phone number is empty(trim removes the whitespace)
      alert("Please enter your phone number"); // sends an alert if the phone number is missing
      return;
    }

    // Validate that email is enter`ed
    if (!email.trim()) {
      // condition if the email is empty(trim removes whitespace)
      alert("Please enter your email address"); // sends an alert if the email is missing
      return; // exits the function early
    }
    //  phone number validation - checks if it contains only digits and is 10 digits long
    const phoneRegex = /^\d{10}$/; // regular expression to match exactly 10 digits
    if (!phoneRegex.test(phoneNumber.trim())) { // tests the phone number against the regular expression
      alert("Please enter a valid 10-digit phone number"); // sends an alert if phone format is invalid
      return;
    }

    //  email validation - checks for basic email format 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression to validate email format
    if (!emailRegex.test(email.trim())) { // tests the email against the regular expression
      alert("Please enter a valid email address"); // sends an alert if email format is invalid
      return;
    }

    // Validate that at least one course is selected
    const hasSelectedCourse = Object.values(selectedCourses).some(Boolean); // Checks if any course is selected
    if (!hasSelectedCourse) {
      // condition to check if no course was selected
      alert("Please select at least one course"); // sends an alert message if no course was selected
      return; // exits function early
    }

    // Display success message with registration details
    alert(
      `Registration Successful!\n\n` +
        `Name: ${fullName}\n` +
        `Email: ${email}\n` +
        `Phone: ${phoneNumber}\n\n` +
        `Total Cost: ${totalAmount}\n\n` +
        `Thank you for registering with Empowering the Nation!`
    );
  };

  //  navigation handler for bottom navigation bar
  const handleNavigation = (screen: string) => {
    navigation.navigate(screen);
  };

  // Helper function to display appropriate discount text based on selection
  const getDiscountText = () => {
    const count = Object.values(selectedCourses).filter(Boolean).length;
    if (count === 1) return "1 Course : No Discount";
    if (count === 2) return "2 Courses: 5% Discount";
    if (count === 3) return "3 Courses: 10% Discount";
    if (count >= 4) return "4+ Courses: 15% Discount";
    return "No courses selected";
  };

  // Function to clear all form data and reset to initial state
  const handleClearAll = () => {
    // Reset contact information
    setFullName("");
    setPhoneNumber("");
    setEmail("");

    // Deselect all courses
    setSelectedCourses({
      "First-Aid": false,
      Sewing: false,
      Landscape: false,
      "Life-Skills": false,
      Cooking: false,
      "Child minding": false,
      "Garden maintenance": false,
    });
  };

  return (
    // Main container with gradient background (teal to light blue)
    <LinearGradient colors={["#55c8c2ff", "#C6E2FC"]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.innerContainer}>
          {/* Header section with back button */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={handleBackPress}
              activeOpacity={0.7}
            >
              <Ionicons name="arrow-back" size={24} color="#2C3E50" />
            </TouchableOpacity>

            {/* Clear All button */}
            <TouchableOpacity
              style={styles.clearButton}
              onPress={handleClearAll}
              activeOpacity={0.7}
            >
              <Ionicons name="refresh-outline" size={20} color="#2C3E50" />
              <Text style={styles.clearButtonText}>Clear All</Text>
            </TouchableOpacity>
          </View>

          {/* Page title */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Course Fee Calculation</Text>
          </View>

          {/* Scrollable content area */}
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Contact Information Section */}
            <View style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>Contact Information</Text>

              {/* Full name input field */}
              <Text style={styles.label}>Full name</Text>
              <TextInput
                placeholder="Enter full name"
                placeholderTextColor="#9CA3AF"
                style={styles.input}
                value={fullName}
                onChangeText={setFullName}
              />

              {/* Phone number input field with numeric keyboard */}
              <Text style={styles.label}>Enter Phone number</Text>
              <TextInput
                placeholder="Enter phone number"
                placeholderTextColor="#9CA3AF"
                style={styles.input}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
              />

              {/* Email input field with email keyboard and no auto-capitalization */}
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

            {/* Discount Allocation Information Card */}
            <View style={styles.discountCard}>
              <Text style={styles.discountTitle}>Discount Allocation</Text>
              <Text style={styles.discountText}>1 Course : No Discount</Text>
              <Text style={styles.discountText}>2 Courses: 5% Discount</Text>
              <Text style={styles.discountText}>3 Courses: 10% Discount</Text>
              <Text style={styles.discountText}>4+ Courses: 15% Discount</Text>
            </View>

            {/* Course Selection Section */}
            <View style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>Select Courses</Text>

              {/* Map through all courses and create selectable rows */}
              {Object.keys(courses).map((courseName) => (
                <TouchableOpacity
                  key={courseName}
                  style={styles.courseRow}
                  onPress={() => toggleCourse(courseName)}
                  activeOpacity={0.7}
                >
                  {/* Checkbox and course name */}
                  <View style={styles.checkboxContainer}>
                    <View
                      style={[
                        styles.checkbox,
                        selectedCourses[courseName] && styles.checkboxChecked,
                      ]}
                    >
                      {/* Show checkmark icon if course is selected */}
                      {selectedCourses[courseName] && (
                        <Ionicons name="checkmark" size={18} color="#FFFFFF" />
                      )}
                    </View>
                    <Text style={styles.courseName}>{courseName}</Text>
                  </View>
                  {/* Display course price */}
                  <Text style={styles.coursePrice}>R{courses[courseName]}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Total Fees Breakdown Section */}
            <View style={styles.totalCard}>
              <Text style={styles.totalTitle}>Total Fees</Text>

              {/* Display each selected course and its price */}
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

              {/* Visual separator line */}
              <View style={styles.divider} />

              {/* Display subtotal before discount */}
              <View style={styles.feeRow}>
                <Text style={styles.feeLabel}>Sub Total:</Text>
                <Text style={styles.feeValue}>R{subTotal}</Text>
              </View>

              {/* Display discount amount and percentage */}
              <View style={styles.feeRow}>
                <Text style={styles.feeLabelBold}>
                  Discount ({discountPercent}%) :
                </Text>
                <Text style={styles.feeValue}>R{discount.toFixed(2)}</Text>
              </View>

              {/* Display VAT amount (15%) */}
              <View style={styles.feeRow}>
                <Text style={styles.feeLabelBold}>VAT (15%) :</Text>
                <Text style={styles.feeValue}>R{vat.toFixed(2)}</Text>
              </View>

              {/* Display final total amount */}
              <View style={styles.feeRow}>
                <Text style={styles.feeLabelBold}>Total Amount :</Text>
                <Text style={styles.feeTotalValue}>
                  R{totalAmount.toFixed(2)}
                </Text>
              </View>
            </View>

            {/* Enrollment Button with gradient background */}
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

          {/* Bottom Navigation Bar */}
          <View style={styles.bottomNav}>
            {/* Home navigation button */}
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => handleNavigation("home")}
              activeOpacity={0.7}
            >
              <Ionicons name="home-outline" size={24} color="#4B5563" />
              <Text style={styles.navLabel}>Home</Text>
            </TouchableOpacity>

            {/* Fees/Calculator navigation button (currently active) */}
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => handleNavigation("calc")}
              activeOpacity={0.7}
            >
              <View style={styles.activeNav}>
                <MaterialCommunityIcons
                  name="calculator"
                  size={24}
                  color="#fff"
                />
                <Text style={{ color: "#fff" }}>Fees</Text>
              </View>
            </TouchableOpacity>

            {/* Contact navigation button */}
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

// StyleSheet containing all component styles
const styles = StyleSheet.create({
  // Main container style
  container: {
    flex: 1,
  },
  // Safe area to avoid notches and system UI
  safeArea: {
    flex: 1,
  },
  // Inner container for content
  innerContainer: {
    flex: 1,
  },
  // Header bar style
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
    paddingVertical: 10,
  },
  // Circular back button with shadow
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
  // Clear All button style
  clearButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 22.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  // Clear All button text style
  clearButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2C3E50",
    marginLeft: 6,
  },
  // Container for page title
  titleContainer: {
    paddingHorizontal: 32,
    paddingVertical: 15,
  },
  // Page title text style
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  // Scrollable content padding
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  // Card style for sections with semi-transparent background
  sectionCard: {
    backgroundColor: "rgba(200, 228, 240, 0.7)",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  // Section title style
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 16,
  },
  // Label for input fields
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2C3E50",
    marginBottom: 8,
    marginTop: 8,
  },
  // Text input field style
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
  // Discount information card with teal background
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
  // Discount card title
  discountTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 12,
  },
  // Individual discount text lines
  discountText: {
    fontSize: 16,
    color: "#2C3E50",
    marginBottom: 6,
    fontWeight: "500",
  },
  // Row for each course in selection list
  courseRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#D1D5DB",
  },
  // Container for checkbox and course name
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  // Checkbox base style (unchecked)
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
  // Checkbox style when checked (filled)
  checkboxChecked: {
    backgroundColor: "#2C3E50",
    borderColor: "#2C3E50",
  },
  // Course name text style
  courseName: {
    fontSize: 16,
    color: "#2C3E50",
    fontWeight: "500",
  },
  // Course price text style (gold color)
  coursePrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#B8860B",
  },
  // Calculate button with shadow and gradient
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
  // Gradient style for buttons
  buttonGradient: {
    paddingVertical: 16,
    alignItems: "center",
  },
  // Button text style
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
  // Total fees card with white background
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
  // Total card title
  totalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 16,
    textAlign: "center",
  },
  // Row for fee line items
  feeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  // Label for fee items (regular weight)
  feeLabel: {
    fontSize: 15,
    color: "#4B5563",
  },
  // Label for fee items (bold)
  feeLabelBold: {
    fontSize: 16,
    color: "#2C3E50",
    fontWeight: "bold",
  },
  // Value text for fees (gold color)
  feeValue: {
    fontSize: 16,
    color: "#B8860B",
    fontWeight: "600",
  },
  // Total value text (larger and bold)
  feeTotalValue: {
    fontSize: 18,
    color: "#B8860B",
    fontWeight: "bold",
  },
  // Horizontal divider line
  divider: {
    height: 1,
    backgroundColor: "#D1D5DB",
    marginVertical: 12,
  },
  // Enroll button with shadow
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
  // Bottom navigation bar fixed at bottom
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingBottom: 20,
    borderTopEndRadius: 32,
    borderTopLeftRadius: 32,
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
  // Individual navigation item
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  // Navigation label text
  navLabel: {
    fontSize: 12,
    color: "#4B5563",
    fontWeight: "600",
    marginTop: 4,
  },
  // Active navigation item style (highlighted)
  activeNav: {
    alignItems: "center",
    backgroundColor: "#004D4D",
    borderRadius: 20,
    padding: 12,
    shadowColor: "#000",
    color: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
