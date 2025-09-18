import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  LoginScreen  from '../screens/login';
import   WelcomeScreen  from '../screens/welcomescreen';
import  SignUpScreen  from '../screens/signup';

 type RootStackParamList = { 
  Welcome: undefined; 
  Login: undefined;
  Signup: undefined;
  homepage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Welcome"> 
         <Stack.Screen name="Welcome" component={WelcomeScreen} />
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Signup" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
