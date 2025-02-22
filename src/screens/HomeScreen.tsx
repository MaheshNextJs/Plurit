import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../types/navigation';
import tw from 'twrnc';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={tw`flex-1 bg-white justify-center items-center px-6`}>
      <Text style={tw`text-lg font-bold text-center mb-4`}>
        Concept Design of an{'\n'}event discovery app
      </Text>
      <Text style={tw`text-base font-semibold mb-2`}>Note:</Text>
      <View style={tw`mb-6`}>
        <Text style={tw`text-gray-700`}>
          • All elements on prototype are not clickable{'\n'}• Click anywhere on
          screen to see hints on clickable elements - it will be highlighted in
          blue.
        </Text>
      </View>

      <TouchableOpacity
        style={tw`bg-purple-600 px-6 py-3 rounded-full`}
        onPress={() => navigation.navigate('Login')}>
        <Text style={tw`text-white font-semibold`}>Go to prototype</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
