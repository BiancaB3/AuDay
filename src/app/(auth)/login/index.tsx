import { router } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titulo}>Bem-vindo de volta! 💜</Text>

        <Text style={styles.subtitulo}>
          Entre na sua conta para acompanhar o dia do seu pet.
        </Text>

        <View style={styles.formulario}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput style={styles.input} placeholder="Senha" secureTextEntry />

          <Pressable
            style={styles.esqueciSenha}
            onPress={() => router.push("/recuperarSenha")}
          >
            <Text style={styles.link}>Esqueci minha senha</Text>
          </Pressable>

          <Pressable style={styles.botao}>
            <Text style={styles.textoBotao}>Entrar</Text>
          </Pressable>

          <View style={styles.cadastroContainer}>
            <Text style={styles.textoCadastro}>Ainda não tem uma conta? </Text>

            <Pressable onPress={() => router.push("/cadastro")}>
              <Text style={styles.link}>Criar conta</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFCFA",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 28,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "800",
    color: "#A58BD4",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitulo: {
    fontSize: 15,
    color: "#8B8295",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 36,
  },
  formulario: {
    width: "100%",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5DDF0",
    borderRadius: 12,
    padding: 15,
    fontSize: 15,
    marginBottom: 16,
  },
  esqueciSenha: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },
  link: {
    color: "#8C70C1",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  botao: {
    backgroundColor: "#A58BD4",
    borderRadius: 30,
    paddingVertical: 17,
    alignItems: "center",
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
  cadastroContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 28,
  },
  textoCadastro: {
    color: "#8B8295",
    fontSize: 14,
  },
});
