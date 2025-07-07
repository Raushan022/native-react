/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Button, Text, View } from 'react-native';
// import UserForm from './components/UserForm';
// import ListFlatList from './components/ListFlatList';
// import FlexStyles from './components/FlexStyles';
// import RadioButtons from './components/RadioButtons';
// import DynamicRadioButton from './components/DynamicRadioButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
