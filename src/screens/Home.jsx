import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { container } from '../styles';

function Home(){
    return( 
       <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...container,
    }
})

export default Home;