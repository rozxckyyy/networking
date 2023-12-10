import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './pages/home';
import { Weather } from './pages/weather';
import { Jokes } from './pages/jokes';
import { Chuck } from './pages/Chuck';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Weather" component={Weather}></Stack.Screen>
        <Stack.Screen name="Jokes" component={Jokes}></Stack.Screen>
        <Stack.Screen name="Chuck Norris" component={Chuck}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}