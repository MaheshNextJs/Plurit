import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {NavigationProp} from '../types/navigation';

const EventDetailsScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={tw`flex-1 p-6 bg-white`}>
      <Text style={tw`text-2xl font-bold mb-4`}>A.R. Rahman Concert</Text>
      <Text style={tw`text-gray-600 mb-2`}>📍 Venue: Bangalore</Text>
      <Text style={tw`text-gray-600 mb-2`}>📅 Date: 25th March</Text>
      <Text style={tw`text-gray-600 mb-4`}>💰 Price: ₹1500</Text>

      <TouchableOpacity
        style={tw`bg-blue-600 p-3 rounded`}
        onPress={() => navigation.navigate('Booking')}>
        <Text style={tw`text-white text-center font-semibold`}>
          Proceed to Booking
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventDetailsScreen;
