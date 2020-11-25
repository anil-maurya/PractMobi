import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { container, menu, content } from '../styles';

function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Icon
          onPress={() => navigation.openDrawer()}
          name="ios-menu"
          size={28}
          color="black"
        />
      </View>
      <View style={styles.content}>
        <Text>Settings Screen</Text>
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

Settings.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Settings;
