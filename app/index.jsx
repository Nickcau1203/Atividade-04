import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/736x/a0/bb/ee/a0bbee9042baa781f11962bbdb0daffd.jpg",
        }}
        style={styles.background}
        resizeMode="cover"
        imageStyle={{ opacity: 0.5 }}
      >
        <Text style={styles.welcomeText}>Bem Vindo ao Site da Barbie</Text>

        <View style={styles.linkContainer}>
          <Link href="/login">
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </Link>
          <Link href="/sobre">
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Sobre</Text>
            </Pressable>
          </Link>
          <Link href="/(aux)/termos">
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Termos</Text>
            </Pressable>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    width: "100%",
    height: "100%",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -1,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },
  button: {
    backgroundColor: "#f17ea1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF1493",
    marginBottom: 20,
  },
});
