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