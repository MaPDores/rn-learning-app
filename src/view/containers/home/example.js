import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  View,
  Text,
  Button,
} from 'react-native';

export default function Home() {
  const data = useSelector((state)=> state.data);
  const dispatch = useDispatch();

  function add() {
    // Logica da ação, como chamar uma api ou algo assim.
    dispatch({ type: 'ADD' });
  }

  function sub() {
    // Logica da ação, como chamar uma api ou algo assim.
    dispatch({ type: 'SUB' });
  }
  
  return (
    <View>
      <View>
        <Text>{data}</Text>
      </View>
      <View>
        <Button title='ADD' type='button' onPress={()=>add()}/>
        <Button title='SUB' type='button' onPress={()=>sub()}/>
      </View>
    </View>
  );
}
