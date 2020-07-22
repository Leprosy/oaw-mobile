import {StyleSheet} from 'react-native';
export const Colors = {
  dark: '#333',
  main: '#8AB1EA',
  title: '#ff0',
  bg: '#0D2C5A',
  bgModule: '#5888CE',
  bgTitle: '#184991',
};

export const Styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fee',
  },

  title: {
    color: Colors.dark,
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },
  subTitle: {
    color: Colors.bgModule,
    fontSize: 20,
    textAlign: 'center',
  },
  center: {
    textAlign: 'center',
  },
  moduleTitle: {
    color: Colors.bg,
    fontSize: 20,
    textAlign: 'center',
  },
  moduleDesc: {
    color: Colors.bg,
    fontSize: 15,
    textAlign: 'center',
  },
  module: {
    backgroundColor: Colors.bgModule,
    padding: 20,
    marginBottom: 10,
    fontSize: 20,
  },
  titleModule: {
    backgroundColor: Colors.bgTitle,
  },

  cat: {width: 300, height: 300},
});
