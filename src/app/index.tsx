import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/AuDay.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />

          <Text style={styles.logoText}>AuDay</Text>

          <Text style={styles.slogan}>O dia dele, pertinho de você.</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <Pressable
            style={styles.loginButton}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.loginButtonText}>Entrar</Text>
          </Pressable>

          <Pressable
            style={styles.registerButton}
            onPress={() => router.push("/cadastro")}
          >
            <Text style={styles.registerButtonText}>Criar conta</Text>
          </Pressable>

          <Pressable onPress={() => router.push("/recuperarSenha")}>
            <Text style={styles.forgotPassword}>Esqueci a minha senha</Text>
          </Pressable>
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 32,
    paddingTop: 40,
    paddingBottom: 40,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  logoImage: {
    width: 290,
    height: 210,
  },
  logoText: {
    fontSize: 56,
    fontWeight: "800",
    color: "#A58BD4",
    letterSpacing: 1,
  },
  slogan: {
    marginTop: 10,
    fontSize: 16,
    color: "#8B8295",
    textAlign: "center",
  },
  buttonsContainer: {
    width: "100%",
    gap: 16,
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#A58BD4",
    width: "100%",
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
  registerButton: {
    backgroundColor: "#F0EBFA",
    width: "100%",
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: "center",
  },
  registerButtonText: {
    color: "#8C70C1",
    fontSize: 17,
    fontWeight: "600",
  },
  forgotPassword: {
    marginTop: 12,
    color: "#8C70C1",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
