import * as React from 'react';
import { StatusBar } from 'react-native';
//ATENÇÃO: USEI O SAFEAREAVIEW DENTRO DA PRIMEIRA VIEW E ENCAPSULANDO A SEGUNDA VIEW, 
//POIS ENCAPSULANDO/FORA DA PRIMEIRA VIEW BUGAVA E NÃO APARECIA O MENU
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
//IMPORT DA IMAGEM USER
import logoUser from '../../src/assets/user.png';

//ATENÇÃO NO PARÂMETRO PROPS DA FUNÇÃO QUE É RECEBIDO NESTE CASO COMO UM OBJETO (ENTRE CHAVES)
function CustomDrawer({ ...props }) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle = "dark-content"
        hidden = {false}
        backgroundColor = "#0066CC"
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />
      <SafeAreaView>
        <View style={styles.userArea}>
          <Image source={logoUser} style={styles.user} />
          <Text style={styles.nome}>Ricardo Santana</Text>
          <Text style={styles.email}>nadajrp12@gmail.com</Text>
        </View>
        <DrawerNavigatorItems {...props} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userArea: {
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 10,
  },
  user: {
    width: 55,
    height: 55,
  },
  nome: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 15,
  },
});

export default CustomDrawer;
