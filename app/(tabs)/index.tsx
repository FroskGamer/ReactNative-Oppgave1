import React from "react";
import { View, StyleSheet } from "react-native";

import Oppgave from "../../Oppgaver/oppgave1";
// Bytt tallet i det siste ordet i linje 4 for å få de andre oppgavene


export default function Index() {
  return (
    <View style={styles.container}>
      <Oppgave />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});