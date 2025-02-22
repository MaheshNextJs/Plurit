import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {NavigationProp} from '../types/navigation';

const PaymentScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={tw`flex-1 justify-center p-6 bg-white`}>
      <Text style={tw`text-2xl font-bold mb-4 text-center`}>
        Payment Options
      </Text>

      <TouchableOpacity style={tw`bg-blue-600 p-3 rounded mb-4`}>
        <Text style={tw`text-white text-center font-semibold`}>
          Pay with UPI
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={tw`bg-blue-600 p-3 rounded mb-4`}>
        <Text style={tw`text-white text-center font-semibold`}>
          Credit/Debit Card
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`bg-blue-600 p-3 rounded`}
        onPress={() => navigation.navigate('Success')}>
        <Text style={tw`text-white text-center font-semibold`}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentScreen;
