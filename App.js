import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Splash from './src/screens/auth/splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './src/screens/app/Home';
import Profile from './src/screens/app/Profile';
import Settings from './src/screens/app/Settings';
import Favorites from './src/screens/app/Favorites';
import ProductDetails from './src/screens/app/ProductDetails';
import Home_Active from './src/assets/Tabs/Home_Active';
import Homee from './src/assets/Tabs/Homee';
import Profile_Active from './src/assets/Tabs/Profile_Active';
import Profilee from './src/assets/Tabs/Profilee';
import Bookmark_Active from './src/assets/Tabs/Bookmark_Active';
import Bookmark from './src/assets/Tabs/Bookmark';
import { Colors } from './src/utils/colors';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack =()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const App = () => {
  const isSignedIn = true;
  const theme = {
    colors: {
      background: Colors.white,
    },
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        {isSignedIn ? (
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                if (route.name === 'home') {
                  focused ? (IconName = Home_Active) : (IconName = Homee);
                } else if (route.name === 'Favorites') {
                  focused
                    ? (IconName = Bookmark_Active)
                    : (IconName = Bookmark);
                } else if (route.name === 'ProfileStack') {
                  focused ? (IconName = Profile_Active) : (IconName = Profilee);
                }
                return <IconName />;
              },
              headerShown: false,
              tabBarShowLabel:false,
              tabBarStyle:{borderTopColor:Colors.white},
              
             
            })}>

            <Tab.Screen name="home" component={HomeStackScreen} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="ProfileStack" component={ProfileStack} />
           
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};


// Create a stack navigator for 'ProductDetails' screen
const HomeStack = createNativeStackNavigator();
// Define 'HomeStackScreen' with 'ProductDetails' screen
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
export default App;

const styles = StyleSheet.create({});
