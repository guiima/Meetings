import React from 'react';
import {View, Text, Button} from 'react-native';

import {useCount} from '../../context/Count';

// import { Container } from './styles';

const Counter: React.FC = () => {
  const {count, setCount} = useCount();
  return (
    <View>
      <Text>Count: {count} </Text>
      <Button title="add" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Counter;
