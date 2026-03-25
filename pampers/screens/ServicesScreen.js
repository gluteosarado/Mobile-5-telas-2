import { Text, View, StyleSheet, Image , Button, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function AssetExample() {
  const navigation = useNavigation();
  return (    
    <View style={styles.container}>
     <Text style={styles.title}>
        Serviços da Pampers
      </Text>
      <Text style={styles.paragraph}>
        A Pampers oferece uma linha completa de produtos, incluindo fraldas, toalhinhas umedecidas e cuidados para a pele do bebê. Além disso, a marca disponibiliza conteúdos educativos, dicas para pais e programas de fidelidade, buscando apoiar as famílias em todas as fases do crescimento infantil.
      </Text>
      <TouchableOpacity 
      style={[styles.button, { 
        marginTop: 280, 
        backgroundColor: '#4169E1', 
        borderRadius: 11,
        padding: 10,
        width: 180,
        }]}
        onPress={() => navigation.navigate('Contact')}
>
<Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>CONTATO</Text>
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
