import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Login from './screens/auth/login';

export default function App() {
  return (
    <View style={styles.container}>
      <Text >Welcome to legodesk </Text>
      <Login/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#99b3ff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
