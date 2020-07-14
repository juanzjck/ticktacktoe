import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TickTackToe from './src/conponents/TickTackToe';
import Game from './src/screens/Game';
//redux provider
import {Provider} from 'react-redux';
import store from './src/store';
export default function App() {
  return (
    <Provider store={store}>
        <Game>

      </Game>
    </Provider>

  );
}


