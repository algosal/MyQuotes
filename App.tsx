import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyQuotesDisplay from './components/MyQuotes.View';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.myTextH}>Salman Saeed Quotes</Text>
      <MyQuotesDisplay /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    height: '3%', 
  },
  myTextH: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor:'grey',
    width: '100%',  
    textAlign: 'center', 
    padding: '1%',
    },
});
