import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';

const ImageComponent = () => {
  return (
    <View>
      <Image
        style={{width: 200, height: 200}}
        source={require('../../assets/driver.png')}
      />
      <ImageBackground
        source={require('../../assets/zazu.jpg')}
        style={{width: '100%', height: '100%'}}>
        <Text>Inside</Text>
      </ImageBackground>
    </View>
  );
};

export default ImageComponent;
