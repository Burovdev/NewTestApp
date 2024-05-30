/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainPage from '../screens/MainPage/MainPage';

const AppStack = createStackNavigator();

export default function AppNavigator(): React.ReactElement {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'MainPage'}>
        <AppStack.Screen name="MainPage" component={MainPage} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
