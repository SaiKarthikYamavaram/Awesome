import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import HomeScreen from "./src/screens/HomeScreen";
import {EvaIconsPack} from "@ui-kitten/eva-icons";
import LoginScreen from './src/screens/LoginScreen';


export default () => (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={eva.light}>
        <LoginScreen/>
      </ApplicationProvider>
    </>
);
