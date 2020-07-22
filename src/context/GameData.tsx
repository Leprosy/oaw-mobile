import React, {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {Config} from '../config';

interface GameContextState {
  oaws: number;
  taldos: number;
  speed: number;
  value: number;
}

export const GameContext = React.createContext<GameContextState>();

export const GameProvider = (props) => {
  const [oaws, setOaws] = useState(0);
  const [taldos, setTaldos] = useState(1);
  const [speed, setSpeed] = useState(Config.baseTimer);
  const [value, setValue] = useState(Config.baseValue);

  const update = () => {
    ToastAndroid.show('Updating...', ToastAndroid.SHORT);
    setOaws((prev) => prev + value * taldos);
  };

  const buy = (type: number) => {
    ToastAndroid.show('Buying...', ToastAndroid.SHORT);

    switch (type) {
      case 0:
        setTaldos((prev) => prev + 1);
        break;
      case 1:
        setValue((prev) => prev + 1);
        break;
      case 2:
        setSpeed((prev) => prev - 1);
        break;
      default:
        break;
    }
  };

  return (
    <GameContext.Provider
      value={{
        taldos,
        oaws,
        speed,
        value,
        update,
        buy,
      }}>
      {props.children}
    </GameContext.Provider>
  );
};
