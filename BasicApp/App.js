import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// *********************
// Class Component
// *********************
// class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Hybrid Mobile App</Text>
//         <StatusBar style="auto" />
//       </View>
//     );
//   }
// }
// export default App;


// *********************
// Function Component
// *********************
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hybrid Mobile App</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }


// *********************
// Arrow Function Component
// *********************
const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hybrid Mobile App</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});