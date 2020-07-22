import React, {useState, useEffect} from 'react';
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
import {Styles} from '../styles';

export const Title = (props) => {
  return (
    <View style={[Styles.module, Styles.titleModule]}>
      <Text style={Styles.title}>This is OAW</Text>
      <Text style={Styles.subTitle}>A random message here</Text>
    </View>
  );
};
