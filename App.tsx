import React, { useState, useEffect } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import { Colors } from './src/styles';
import { Config } from './src/config';
import { Taldos } from './src/modules/taldos';
import { Cats } from './src/modules/cats';
import { Title } from './src/modules/title';
import { GameProvider } from './src/context/GameData';

const App = () => {
  /* const [oaws, setOaws] = useState(0);
  const [cat, setCat] = useState(`${Config.catURI}1`);

  const updateOaws = () => {
    const die = Math.round(Math.random() * 10);
    setCat(`${Config.catURI}${die}`);
    setOaws((previousOaws) => previousOaws + 1);
  };

  useEffect(() => {
    console.log('OAW: Init timer');

    setInterval(() => {
      updateOaws();
      console.log('OAW: New tick');
    }, Config.timer);
  }, []); */

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{
            backgroundColor: Colors.bg,
          }}>
          <GameProvider>
            <Title />
            <Taldos />
            <Cats />
          </GameProvider>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
