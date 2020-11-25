import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import { container, menu, content } from '../styles';

function Profile({navigation}){
    return( 
       <View style={styles.container}>
           <View style={styles.menu}>
                <Icon
                    onPress={()=>navigation.goBack()}
                    // onPress={()=>navigation.navigate('Home', {screen: 'Home'})
                    name="md-arrow-back" 
                    size={22} 
                    color="black" 
                />
           </View>
           <View style={styles.content}>
                <Text>Profile Screen</Text>
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

export default Profile;