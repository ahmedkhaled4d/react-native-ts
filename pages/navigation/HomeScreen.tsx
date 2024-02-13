import React from 'react';

import {Button} from 'react-native';

const HomeScreen = ({navigation}): React.JSX.Element => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
    />
  );
};

export default HomeScreen;
