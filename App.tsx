import React from 'react';
import AccSocket from './src/components/accSocket';
import {View} from 'react-native';

export const ws = new WebSocket('ws://192.168.0.21:5001');
const App = () => {
  ws.onopen = () => {
    ws.send('Conectando al servidor');
    ws.send('Usuario: Pepe');
  };
  return (
    <View style={{flex: 1}}>
      <AccSocket />
    </View>
  );
};
export default App;