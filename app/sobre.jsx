import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Sobre() {
  return (
    <View>
      <Text>Esta é a tela Sobre!</Text>

      <Link href="/">Ir para home</Link>
    </View>
  );
}