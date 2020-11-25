import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { container } from '../styles';

function Settings(){
    return( 
       <View style={styles.container}>
            <Text>Settings Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...container,
    }
})

export default Settings;