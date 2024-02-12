import React from 'react';
import {Text, View} from 'react-native';

const FlexDimensionsBasics = () => {
  return (
    // Try removing the `flex: 1` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    // What if you add `height: 300` instead of `flex: 1`?
    <View style={{flex: 1}}>
      <View style={{flex: 2, backgroundColor: 'red'}}>
        <Text style={{color: 'white', fontSize: 30}}>EGYPT</Text>
      </View>
      <View style={{flex: 2, backgroundColor: 'white'}} />

      <View style={{flex: 2, backgroundColor: 'black'}} />
    </View>
  );
};

export default FlexDimensionsBasics;
