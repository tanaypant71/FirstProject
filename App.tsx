import React from 'react';
import {Text, View, Button} from 'react-native';

const name = 'Tanay';
var email = 'tanay@mail.com';

function fruit()
{
  return "Apple";
}

function App(): JSX.Element {
  let age = 21;
  return (
    <View>
      <Text style={{fontSize: 30}}>{name}</Text>
      <Text style={{fontSize: 30}}>{age}</Text>
      <Text style={{fontSize: 30}}>{email}</Text>
      <Text style={{fontSize: 30}}>{fruit()}</Text>
    </View>
  );
}

export default App;
