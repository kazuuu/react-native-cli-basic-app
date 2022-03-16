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
class App extends Component {
  render() {
    const msg = 'Estou aqui';
    console.log('Class Component', msg);

    return (
      <View style={styles.container}>
        <Text>Hybrid Mobile App</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}
export default App;


// *********************
// Function Component
// *********************
// export default function App() {
// const msg = 'Estou aqui';
// console.log('Function Component', msg);
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
// const App = () => {
// const msg = 'Estou aqui';
// console.log('Arrow Function Component', msg);
//   return (
//     <View style={styles.container}>
//       <Text>Hybrid Mobile App</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// };
// export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});