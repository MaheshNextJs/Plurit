import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {NavigationProp} from '../types/navigation';

const SuccessScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={tw`flex-1 justify-center items-center bg-white p-6`}>
      <Text style={tw`text-3xl font-bold text-green-600 mb-4`}>
        🎉 Success!
      </Text>
      <Text style={tw`text-lg text-center mb-6`}>
        Your ticket has been booked successfully.
      </Text>

      <TouchableOpacity
        style={tw`bg-blue-600 p-3 rounded`}
        onPress={() => navigation.navigate('Home')}>
        <Text style={tw`text-white text-center font-semibold`}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessScreen;
