import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
 
  return (
    <View>
        <Link href="/about" asChild>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Bem-Vindo!</Text>
            </Pressable>
        </Link>

        <Link href="/login">Login</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/(aux)/termos">Termos</Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20
  },
  button: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
  },
  buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center'
  }
});