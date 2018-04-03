import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './src/components/MainPage.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>React-Native & Redux Example: State Switching</Text>
      <MainPage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
