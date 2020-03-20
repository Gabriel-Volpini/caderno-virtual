import React, { useState } from 'react';
import { View  } from 'react-native';

import Empty from './Empty';

import { sMain } from "./styles";

const Main: React.FC = () => {

  return (
    <View style={sMain.container}>
      <Empty/>
    </View>
  );
}
export default Main;