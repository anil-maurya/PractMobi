import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Profile from '../screens/Profile';
import TabNavigator from '../navigators/TabNavigator';

const Drawer = createDrawerNavigator()


function DrawerNavigation(){

    return(
        <NavigationContainer>
             <Drawer.Navigator>
                <Drawer.Screen name="Home" component={TabNavigator} />
                <Drawer.Screen name="Profile" component={Profile} />
            </Drawer.Navigator>
        </NavigationContainer>
       
    )
}

export default DrawerNavigation;