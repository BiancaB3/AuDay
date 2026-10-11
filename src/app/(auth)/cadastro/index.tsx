import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Criar conta</Text>
      <Text style={styles.subtitulo}>Faça parte do AuDay 💜</Text>

      <TextInput style={styles.input} placeholder="Nome completo" />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        keyboardType="phone-pad"
      />

      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />

      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        secureTextEntry
      />

      <Pressable style={styles.botao}>
        <Text style={styles.textoBotao}>Criar conta</Text>
      </Pressable>

      <Link href="/login" style={styles.link}>
        Já tenho uma conta
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
    fontSize: 30,
    fontWeight: "bold",
    color: "#A58BD4",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 16,
    color: "#8B8295",
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5DDF0",
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    fontSize: 15,
  },
  botao: {
    backgroundColor: "#A58BD4",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginTop: 10,
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
