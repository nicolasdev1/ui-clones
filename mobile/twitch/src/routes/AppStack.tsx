import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Notifications from '../pages/Notifications';

import HomeTabs from './HomeTabs';

const { Navigator, Screen } = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        
        <Screen 
          name="HomeTabs"
          component={HomeTabs}
          
        />
        <Screen
          name="Notifications"
          component={Notifications}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
