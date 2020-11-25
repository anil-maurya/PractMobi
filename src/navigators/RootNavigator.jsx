import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigation from './DrawerNavigator';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

function RootNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Home" component={DrawerNavigation} />
                <Stack.Screen name="Tab" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default RootNavigator;