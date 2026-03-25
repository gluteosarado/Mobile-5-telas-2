import { Text, View, StyleSheet, Image , Button, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function AssetExample() {
  const navigation = useNavigation();
  return (    
    <View style={styles.container}>
     <Text style={styles.title}>
        Tela final da Pampers
      </Text>
      <Text style={styles.paragraph}>
A Pampers segue comprometida em cuidar do que há de mais precioso: os bebês. Com qualidade, confiança e dedicação, a marca continua sendo uma parceira essencial para pais que buscam o melhor para seus filhos desde os primeiros momentos de vida.
      </Text>
      <TouchableOpacity 
      style={[styles.button, { 
        marginTop: 296, 
        backgroundColor: '#4169E1', 
        borderRadius: 11,
        padding: 10,
        width: 180,
        }]}
        onPress={() => navigation.navigate('Home')}
>
<Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>HOME</Text>
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
    textAlign: 'justify',
    color: 'white',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 200,
  }
});
