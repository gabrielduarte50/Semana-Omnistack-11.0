import React from "react";
import { View } from "react-native";

import styles from "./styles";

export default function Incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Total de 0 casos</Text>
      </View>

      <Text style={styles.title}>Bem vindo</Text>

      <Text style={styles.title}>Escolha um dos casos abaixo</Text>
    </View>
  );
}
