import { Text, View, StyleSheet, Image , Button, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function AssetExample() {
  const navigation = useNavigation();
  return (    
    <View style={styles.container}>
     <Text style={styles.title}>
        Contato da Pampers
      </Text>
      <Text style={styles.paragraph}>
Para entrar em contato com a Pampers, os consumidores podem acessar o site oficial da marca ou suas redes sociais, onde encontram suporte, informações sobre produtos e atendimento ao cliente. Também é possível consultar embalagens dos produtos para canais diretos de atendimento ao consumidor.      </Text>
      <TouchableOpacity 
      style={[styles.button, { 
        marginTop: 280, 
        backgroundColor: '#4169E1', 
        borderRadius: 11,
        padding: 10,
        width: 180,
        }]}
        onPress={() => navigation.navigate('Final')}
>
<Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>FINAL</Text>
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
