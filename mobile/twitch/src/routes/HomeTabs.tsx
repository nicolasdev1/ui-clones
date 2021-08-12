import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import colors from '../styles/colors';

import Following from '../pages/Following';
import ComingSoon from '../pages/ComingSoon';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeTabs: React.FC = () => (
  <Navigator
    tabBarOptions={{
      style: {
        height: Platform.OS === 'android' ? 60 : 85,
        
        backgroundColor: colors.tab,
        borderTopWidth: 0.5,
        borderTopColor: colors.tag,
      },
      tabStyle: {
        alignItems: 'center',
        justifyContent: 'center',

        padding: Platform.OS === 'android' ? 0 : 5,
      },
      iconStyle: {
        flex: Platform.OS === 'android' ? 0 : 1,
        width: 20,
        height: 20,
      },
      labelStyle: {
        fontFamily: 'roboto_400',
        fontSize: 11,

        marginTop: Platform.OS === 'android' ? 5 : 0,
      },
        inactiveTintColor: colors.black,
        activeTintColor: colors.purple,
    }}
  >
    <Screen name="Following" component={Following} options={{
      tabBarIcon: ({ size, focused }) => {
        return (
          <Entypo
            name={focused ? 'heart' : 'heart-outlined'}
            size={size}
            color={focused ? colors.purple : colors.black}
          />
        );
      }
    }} />
    <Screen name="Discover" component={ComingSoon} options={{
      tabBarIcon: ({ size, focused }) => {
        return (
          <MaterialCommunityIcons
          name={focused ? 'compass' : 'compass-outline'}
            size={size}
            color={focused ? colors.purple : colors.black}
          />
        );
       }
    }} />
    <Screen name="Browse" component={ComingSoon} options={{
      tabBarIcon: ({ size, focused }) => {
        return (
          <MaterialIcons
            name="content-copy"
            size={size}
            color={focused ? colors.purple : colors.black}
          />
        );
      }
     }} />
     <Screen name="Esports" component={ComingSoon} options={{
      tabBarIcon: ({ size, focused }) => {
        return (
           <MaterialCommunityIcons
          name={focused ? 'trophy' : 'trophy-outline'}
            size={size}
            color={focused ? colors.purple : colors.black}
          />
        );
       }
     }} />
  </Navigator>
);

export default HomeTabs;
