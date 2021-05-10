import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.textoSujeitoProgramador}>
        Tela Contato
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoSujeitoProgramador: {
    fontSize: 35,
  },
});