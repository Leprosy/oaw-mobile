import React, {useState, useEffect, useContext} from 'react';
import {Image, View, Text} from 'react-native';
import {Styles} from '../styles';
import {ButtonGroup} from '../components/buttongroup';
import {GameContext} from '../context/GameData';

export const Taldos = () => {
  const gameData = useContext(GameContext);
  const buttons = [
    {
      title: 'Taldos',
      onPress: () => {
        gameData.buy(0);
      },
    },
    {
      title: 'Oaws',
      onPress: () => {
        gameData.buy(1);
      },
    },
    {
      title: 'Speed',
      onPress: () => {
        gameData.buy(2);
      },
    },
    {
      title: 'Update',
      onPress: () => {
        gameData.update();
      },
    },
  ];

  useEffect(() => {
    console.log('OAW: Init timer');

    setInterval(() => {
      console.log('OAW: New tick');
      gameData.update();
    }, gameData.speed);
  }, []);

  return (
    <View style={Styles.module}>
      <Text style={Styles.moduleTitle}>TALDOS</Text>
      <Text style={Styles.moduleTitle}>{gameData.oaws} oaws</Text>
      <Text style={Styles.moduleDesc}>These produce Oaws you can use</Text>
      <Text style={Styles.moduleDesc}>
        Taldos:{gameData.taldos} - Oaws per tick:{gameData.value} - Tick speed:
        {gameData.speed}ms
      </Text>
      <ButtonGroup data={buttons} />
    </View>
  );
};
