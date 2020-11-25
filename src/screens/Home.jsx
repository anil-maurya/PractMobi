import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import { container, menu, content } from '../styles';

function Home({navigation}){
    return( 
       <View style={styles.container}>
           <View style={styles.menu}>
                <Icon
                    onPress={()=>navigation.openDrawer()} 
                    name="ios-menu" size={28} 
                    color="black" 
                />
           </View>
           <View style={styles.content}>
                <Text>Home Screen</Text>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...container,
    },
    menu: {
        ...menu
    },
    content : {
        ...content
    }
})

export default Home;