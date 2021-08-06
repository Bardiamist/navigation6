import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = ({
  navigation,
}) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
      title="Navigate to Intermediate screen"
      onPress={() => {
        navigation.navigate('Intermediate');
      }}
    />
  </View>
);

const Intermediate = ({
  navigation,
}) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
      title="Navigate to Modal screen"
      onPress={() => {
        navigation.navigate('Modal');
      }}
    />
  </View>
);

const Modal = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Modal screen</Text>
  </View>
);

const StackScreen = () => (
  <Stack.Navigator
    screenOptions={{
      detachPreviousScreen: false,
      headerStyleInterpolator: forFade,
      headerStyle: {
        shadowColor: 'transparent',
        elevation: 0,
        backgroundColor: 'gray',
      },
      cardStyle: {
        backgroundColor: 'gray',
      },
    }}
  >
    <Stack.Screen
      name="Home"
      options={{
        headerLeft: () => <View />,
        headerRight: () => <View />,
      }}
      component={Home}
    />
    <Stack.Screen
      name="Intermediate"
      options={{
        headerLeft: () => <View />,
        headerRight: () => <View />,
      }}
      component={Intermediate}
    />
    <Stack.Screen
      name="Modal"
      options={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'green',
        },
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
      component={Modal}
    />
  </Stack.Navigator>
);

const TabsScreen = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen name="StackScreen" component={StackScreen} />
  </Tab.Navigator>
);

const forFade = ({ current }: StackHeaderInterpolationProps): StackHeaderInterpolatedStyle => {
  const opacity = current.progress;

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

const blueOverlay = <View style={{ flex: 1, backgroundColor: 'blue' }} />;

const renderBlueOverlay = () => blueOverlay;

function MyStack() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          detachPreviousScreen: false,
          headerStyleInterpolator: forFade,
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
            backgroundColor: 'blue',
          },
          cardStyle: {
            backgroundColor: 'blue',
          },
        }}
      >
        <Tab.Screen
          name="TabsScreen"
          options={{
            ...TransitionPresets.ScaleFromCenterAndroid,
            headerShown: false,
            cardOverlayEnabled: true,
            cardOverlay: renderBlueOverlay,
          }}
          component={TabsScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
