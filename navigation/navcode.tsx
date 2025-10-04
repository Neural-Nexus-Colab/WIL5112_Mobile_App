import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  LoginScreen  from '../screens/login';
import   WelcomeScreen  from '../screens/welcomescreen';
import  SignUpScreen  from '../screens/signup';
import  SixWeekCoursesScreen from '../screens/sixweekcourses'
import CookingCourseDetailScreen from '../screens/courses/cooking'
import GardenMaintenanceDetailScreen from '../screens/courses/gardening'
import ChildMindingCourseDetailScreen from '../screens/courses/child'


 type RootStackParamList = { 
  Welcome: undefined; 
  Login: undefined;
  Signup: undefined;
  sixweekcourses: undefined;
  cooking: undefined;
  garden:undefined;
  childmind:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Welcome"> 
         <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
         <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
         <Stack.Screen name="Signup" component={SignUpScreen}  options={{ headerShown: false }}/>
         <Stack.Screen name="sixweekcourses" component={SixWeekCoursesScreen}  options={{ headerShown: false }}/>
          <Stack.Screen name="cooking" component={CookingCourseDetailScreen}  options={{ headerShown: false }}/>
          <Stack.Screen name="garden" component={GardenMaintenanceDetailScreen}  options={{ headerShown: false }}/>
           <Stack.Screen name="childmind" component={ChildMindingCourseDetailScreen}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
