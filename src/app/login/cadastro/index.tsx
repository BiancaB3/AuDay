import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CadastroLoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro AuDay</Text>

      <Pressable style={styles.button} onPress={() => router.push("/")}>
        <Text style={styles.buttonText}>Voltar ao início</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFCFA",
    gap: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#A58BD4",
  },
  button: {
    backgroundColor: "#A58BD4",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
