import React from 'react';
import {
  StyleSheet, Text, View, Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RNCamera } from 'react-native-camera';
import { container, menu, content } from '../styles';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Icon
          // onPress={() => navigation.openDrawer()}
          name="ios-menu"
          size={28}
          color="black"
        />
      </View>
      <View style={styles.content}>
        <RNCamera 
          style={{
            flex: 1,
            height: '100%',
            width: '100%'
          }}
        ></RNCamera>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...container,
  },
  menu: {
    ...menu,
    marginTop: Platform.OS === 'ios' ? 40 : 10,
  },
  content: {
    ...content,
  },
});


export default Home;
