import { Text, View, StyleSheet, Image , Button, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function AssetExample() {
  const navigation = useNavigation();
  return (    
    <View style={styles.container}>
     <Text style={styles.title}>
        Tela sobre a Pampers
      </Text>
      <Text style={styles.paragraph}>
        A Pampers é uma marca reconhecida mundialmente por oferecer produtos de alta qualidade para o cuidado dos bebês. Com foco em inovação, conforto e proteção, a empresa desenvolve fraldas e itens essenciais que ajudam no bem-estar e no desenvolvimento saudável dos pequenos, sempre pensando na tranquilidade dos pais.
      </Text>
      <TouchableOpacity 
      style={[styles.button, { 
        marginTop: 265, 
        backgroundColor: '#4169E1', 
        borderRadius: 11,
        padding: 10,
        width: 180,
        }]}
        onPress={() => navigation.navigate('Services')}
>
<Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>SERVIÇOS</Text>
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
