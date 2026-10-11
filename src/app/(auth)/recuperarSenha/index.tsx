import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function RecuperarSenha() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Esqueceu sua senha?</Text>

      <Text style={styles.subtitulo}>
        Não se preocupe! Informe seu e-mail para recuperar o acesso à sua conta.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Pressable style={styles.botao}>
        <Text style={styles.textoBotao}>Recuperar senha</Text>
      </Pressable>

      <Link href="/login" style={styles.link}>
        Voltar para o login
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFCFA",
    justifyContent: "center",
    padding: 24,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#A58BD4",
    textAlign: "center",
    marginBottom: 16,
  },
  subtitulo: {
    fontSize: 15,
    color: "#8B8295",
    textAlign: "center",
    marginBottom: 28,
    lineHeight: 22,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5DDF0",
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    fontSize: 15,
  },
  botao: {
    backgroundColor: "#A58BD4",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#A58BD4",
    textAlign: "center",
    marginTop: 24,
    fontSize: 14,
  },
});
