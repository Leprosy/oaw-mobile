import React from 'react';
import {View, Button} from 'react-native';
import {Colors} from '../styles';

interface ButtonData {
  title: string;
  onPress: Function;
}
interface ButtonGroupProps {
  data: Array<ButtonData>;
}

export const ButtonGroup = (props: ButtonGroupProps) => {
  const buttons = props.data.map((item: ButtonData, id: number) => (
    <View style={{flex: 1, marginTop: 10}} key={id}>
      <Button
        title={item.title}
        onPress={item.onPress}
        color={Colors.main}></Button>
    </View>
  ));

  return <View style={{flexDirection: 'row'}}>{buttons}</View>;
};
