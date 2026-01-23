import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import TemplateScreen from '../screen/TemplateScreen';
import JobListScreen from '../screen/JobListScreen';
import Colors from '../utils/colors';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from '../screen/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.gray,
        tabBarStyle: {
          backgroundColor: Colors.white,
          height: 60,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Resume') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (route.name === 'Job') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          }else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Job' component={JobListScreen} />
      <Tab.Screen name='Resume' component={TemplateScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  );
}
