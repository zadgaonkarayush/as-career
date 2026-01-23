import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import JobDetailsScreen from '../screen/JobDetailsScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Tabs'
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Job-Detail'
        component={JobDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
