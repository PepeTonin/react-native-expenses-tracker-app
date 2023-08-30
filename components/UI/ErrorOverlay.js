import { View, Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import Button from "../ManageExpense/Button";

export default function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error ocurred!</Text>
      <Text style={[styles.text, styles.message]}>{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
  },
  message: {
    fontSize: 18,
  },
});
