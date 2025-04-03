import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput } from 'react-native';
import { Link } from 'expo-router';

export default function LoginDeUso() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Login</Text>
     
      <TextInput style={styles.email} placeholder="E-mail" />
      <TextInput style={styles.senha} placeholder="Senha" secureTextEntry={true} />

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
  email: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
    color: '#FF1493',
  },
  senha: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
    color: '#FF1493',
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