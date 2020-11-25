import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { container } from '../styles';

function Profile({navigation}){
    return( 
       <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Button title='Go Back' onPress={()=>navigation.navigate('Home', {screen: 'Home'})}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...container,
    }
})

export default Profile;