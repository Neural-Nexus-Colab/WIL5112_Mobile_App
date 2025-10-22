// Imports of the necessary libraries and components
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login";
import WelcomeScreen from "../screens/welcomescreen";
import SignUpScreen from "../screens/signup";
import SixWeekCoursesScreen from "../screens/sixweekcourses";
import SixMonthCoursesScreen from "../screens/sixmonthcourses";
import CookingCourseDetailScreen from "../screens/courses/cooking";
import GardenMaintenanceDetailScreen from "../screens/courses/gardening";
import ChildMindingCourseDetailScreen from "../screens/courses/child";
import CourseFeeCalculationScreen from "../screens/calc";
import HomeScreen from "../screens/homepage";
import FirstAidCourseDetailScreen from "../screens/monthcourses/firstaid";
import LandscapingDetailScreen from "../screens/monthcourses/landscaping";
import LifeSkillDetailedScreen from "../screens/monthcourses/life";
import SewingDetailedScreen from "../screens/monthcourses/sewing";
import ContactUsScreen from "../screens/contact";

// Definition of the type for the navigation parameters
type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  sixweekcourses: undefined;
  monthcourses: undefined;
  cooking: undefined;
  garden: undefined;
  childmind: undefined;
  calc: undefined;
  home: undefined;
  firstaid: undefined;
  land: undefined;
  life: undefined;
  sewing: undefined;
  contact: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Main function that sets up the navigation container and stack navigator
export default function StackNavigator() {
  return (
    /* Code Attribution: 
    Title: Hello React Navigation
    Author: React Navigation
    Date Accessed: 10 October 2025
    Date Created: 2025
    Version: Not specified
    Availability: https://reactnavigation.org/docs/hello-react-navigation 
    */
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="sixweekcourses"
          component={SixWeekCoursesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="cooking"
          component={CookingCourseDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="garden"
          component={GardenMaintenanceDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="childmind"
          component={ChildMindingCourseDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="calc"
          component={CourseFeeCalculationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="monthcourses"
          component={SixMonthCoursesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="firstaid"
          component={FirstAidCourseDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="land"
          component={LandscapingDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="sewing"
          component={SewingDetailedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="life"
          component={LifeSkillDetailedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="contact"
          component={ContactUsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
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
