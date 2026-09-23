import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#2d1e48',
    padding: 8,
  },

   titulo: {
    margin: 8,
    padding:5,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Comic Sans MS',
    backgroundColor: 'rgb(223, 143, 239)',
    borderColor:'black',
    borderWidth:5,
  },

    digitar: {
      margin: 2,
      padding: 3,
      fontSize: 18,
      fontFamily: 'Comic Sans MS',
      fontWeight: 'italic',
      color: '#c1acec',
      textAlign: 'left',
      borderColor:'#593c90',
      backgroundColor: '#593c90',
      borderWidth:2,
  },

    texto: {
      margin:2,
      fontSize: 18,
      fontFamily: 'Comic Sans MS',
      textAlign: 'left',
      color: '#c1acec',
  },

    containerbotao: {
      margin:30,
      fontSize: 30,
 
  },

});

export default function App() {
  
  let a = "teste";
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [mostra, setMostra] = useState(false);
  
  return (

    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Roubador de Dados 3000</Text>
      <Text style={styles.texto}>Nome: </Text>
      <TextInput style={styles.digitar}
        placeholder="Dig. Nome"  
        onChangeText={(texto) => {
        setNome(texto);
        setMostra(false); 
        }}
        
      />

      <Text style={styles.texto}>E-mail: </Text>
      <TextInput style={styles.digitar}
        placeholder="Dig. e-mail"
        onChangeText={(texto) => {
        setEmail(texto);
        setMostra(false); 
        }} 
      />

      <Text style={styles.texto}>Telefone: </Text>
      <TextInput style={styles.digitar}
        placeholder="Dig. telefone"
        onChangeText={(texto) => {
        setTel(texto);
        setMostra(false); 
        }}
      />
      <View style={styles.containerbotao}>
        <Button style={styles.containerbotao}
          title="Exibir logo abaixo"
          onPress={() => {setMostra(true);} }
        />
      </View>

      {mostra && (
        <View>
          <Text style={styles.texto}>Seu nome é: {nome} </Text>
          <Text style={styles.texto}>Seu e-mail é: {email} </Text>
          <Text style={styles.texto}>Seu telefone é: {tel} </Text>
          <Text style={styles.digitar}>Seus dados foram roubados com sucesso! </Text>
        </View>
      )}

    </ScrollView>
  );
}


