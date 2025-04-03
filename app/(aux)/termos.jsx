import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function TermoDeUso() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Termos de Uso</Text>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Introdução</Text>
        <Text style={styles.sectionText}>
          Bem-vindo ao nosso App. Ao utilizar nossos serviços, você concorda com estes Termo de uso.
        </Text>
      </View>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Uso do App</Text>
        <Text style={styles.sectionText}>
          Você se compromete a usar o App de forma ética, legal e de acordo com todas as leis e regulamentos aplicáveis.
        </Text>
      </View>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Privacidade</Text>
        <Text style={styles.sectionText}>
          Respeitamos sua privacidade. Os dados pessoais são tratados de acordo com nossa Política de Privacidade.
        </Text>
      </View>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Limitação de Responsabilidade</Text>
        <Text style={styles.sectionText}>
          Nosso App é fornecido "como está", sem garantias de qualquer tipo, expressas ou implícitas.
        </Text>
      </View>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. Modificações</Text>
        <Text style={styles.sectionText}>
          Reservamos o direito de modificar estes Termo a qualquer momento. As alterações serão comunicadas aos usuários, pelo o E-mail ou pelo App.
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
    backgroundColor: '#FFFFFF',
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