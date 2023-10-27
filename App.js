import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaxMin from './components/MaxMin';

const App = () => {
  return (
    <View style={styles.container}>
      <MaxMin x={23} y={0} /> 
      <MaxMin x={23} y={18} /> 
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
