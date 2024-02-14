import React from 'react';

import {Button, View} from 'react-native';

const HomeScreen = ({navigation}): React.JSX.Element => {
  return (
    <View style={{padding: 10}}>
      <Button
        title="Profile Screen"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
      <Button
        title="Auth Screen"
        onPress={() => navigation.navigate('Auth', {name: 'Jane'})}
      />
    </View>
  );
};

export default HomeScreen;
