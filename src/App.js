
import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
//IMPORTAÇÃO DAS TELAS
import Home from './src/pages/Home/index';
import Contato from './src/pages/Contato/index';
import Sobre from './src/pages/Sobre/index';
import CalcIMC from './src/pages/CalcIMC/index';
//IMPORTAÇÃO DO COMPONENTE CUSTOMDRAWER
import CustomDrawer from './components/CustomDrawer/index';

const Routes = createAppContainer(
  createDrawerNavigator(
    {
      Home,
      Contato,
      Sobre,
      CalcIMC,
    },
    {
      initialRouteName: 'Home',
      contentComponent: CustomDrawer,
    }
  )
);

export default Routes;
