import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { container } from '../styles';

function Profile(){
    return( 
       <View style={styles.container}>
            <Text>Profile Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...container,
    }
})

export default Profile;