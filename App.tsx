import React from 'react';
import {Text, View, Button} from 'react-native';

function App(): JSX.Element {
  const fruit = (val: string) => {
    console.warn(val);
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>Button and onPress Event</Text>
      <Button
        title="On Press"
        onPress={() => fruit('Hello Tanay')}
        color={'green'}
      />
    </View>
  );
}

export default App;
