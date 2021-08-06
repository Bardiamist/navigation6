import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home = ({
  navigation,
}) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
      title="Navigate to Settings screen"
      onPress={() => {
        navigation.navigate('Settings');
      }}
    />
  </View>
);

const Settings = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Settings screen</Text>
  </View>
);

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
