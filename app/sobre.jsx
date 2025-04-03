import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';


export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre o aplicativo</Text>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre o App</Text>
        <Text style={styles.sectionText}>
          Bem-vindo ao nosso aplicativo, neste jogo, você terá a oportunidade única de vivenciar a vida da Barbie de uma maneira divertida e interativa. Crie sua própria história e explore diferentes mundos, desde a carreira dos seus sonhos até aventuras emocionantes com os amigos.🩷
          <br />
          <br />
          <strong>O que você pode fazer?</strong>
          <br />
          <br />
<strong>Personalize sua Barbie:</strong>  Escolha entre uma variedade de roupas, penteados e acessórios para expressar seu estilo único.
<br />
<br />
<strong>Explore Fantásticos Cenários:</strong>  Viaje por lugares incríveis, como a praia, a cidade e até mesmo o espaço!
<br />
<br />
<strong>Junte-se a Desafios e Atividades</strong> : Participe de mini-jogos e desafios que testam suas habilidades e criatividade.
<br />
<br />
<strong>Construa Relações:</strong>  Faça amizade com outros personagens e descubra histórias emocionantes.
        </Text>
      </View>
     
      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Voltar para Home</Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f17ea1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF1493',
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#f17ea1',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});