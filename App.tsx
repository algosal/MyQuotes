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
    height: '4%',
     },
  myTextH: {
    color: 'gold',
    fontSize: 32,
    fontWeight: 'bold',
    backgroundColor: 'maroon',
    width: '100%',
    textAlign: 'center',
    padding: '4%',
  },
});
