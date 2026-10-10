import { StyleSheet, Text, View } from "react-native";

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Criar conta</Text>
      <Text>Cadastro de usuário do AuDay</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFCFA",
  },
  titulo: {
    fontSize: 28,
    color: "#A58BD4",
    marginBottom: 15,
  },
});
