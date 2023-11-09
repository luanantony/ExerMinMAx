// Exercicio 02

import React from 'react';
import { View } from 'react-native';
import Contador from './components/Contador';

const App = () => {
  return (
    <View>
      <Contador />
    </View>
  );
}

export default App;


// Exercicio 01

// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import MaxMin from './components/MaxMin';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <MaxMin x={10} y={0} /> 
//       <MaxMin x={10} y={10} /> 
//     </View>
//   );
// }

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });
