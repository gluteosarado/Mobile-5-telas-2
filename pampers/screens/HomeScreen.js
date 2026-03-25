import { Text, View, StyleSheet, Image , Button, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function AssetExample() {
  const navigation = useNavigation();
  return (    
    <View style={styles.container}>
     <Text style={styles.title}>
        Tela inicial da Pampers
      </Text>
      <Text style={styles.paragraph}>
        Esta tela te levara para outros lugares
      </Text>
      <TouchableOpacity 
      style={[styles.button, { 
        marginTop: 377, 
        backgroundColor: '#4169E1', 
        borderRadius: 11,
        padding: 10,
        width: 180,
        }]}
        onPress={() => navigation.navigate('About')}
>
<Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>SOBRE</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#6495ED',
    
  },
  paragraph: {
    margin: 24,
    marginTop: 10,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 200,
  }
});
