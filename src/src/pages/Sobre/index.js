import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.textoSujeitoProgramador}>
        Tela Sobre
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