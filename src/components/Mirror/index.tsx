import React from 'react';
import {Text, View} from 'react-native';

import {useCount} from '../../context/Count';

const Mirror: React.FC = () => {
  const {count} = useCount();
  return (
    <View>
      <Text>{count}</Text>
    </View>
  );
};

export default Mirror;
