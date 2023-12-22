// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Constants from 'expo-constants';



import Calculator from './src/screens/Calculator';

const statusBarHeight = Constants.statusBarHeight;
export default function App() {
  const styles = StyleSheet.create({
    container: {
      paddingTop: statusBarHeight,
      paddingBottom: '5%',
      paddingHorizontal: '3%',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
  })
  return (

    <View style={styles.container}>
      <Calculator/>
      {/* <StatusBar style="auto" /> */}
    </View>

  );
}

