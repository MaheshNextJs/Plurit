import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {NavigationProp} from '../types/navigation';

const BookingScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  const seats = ['Platinum ₹2000', 'Gold ₹1500', 'Silver ₹1000'];

  return (
    <View style={tw`flex-1 p-6 bg-white`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Select Your Seat</Text>
      {seats.map((seat, index) => (
        <TouchableOpacity
          key={index}
          style={tw`p-3 mb-3 rounded ${
            selectedSeat === seat ? 'bg-blue-600' : 'bg-gray-200'
          }`}
          onPress={() => setSelectedSeat(seat)}>
          <Text
            style={tw`text-lg font-semibold ${
              selectedSeat === seat ? 'text-white' : 'text-black'
            }`}>
            {seat}
          </Text>
        </TouchableOpacity>
      ))}

      {selectedSeat && (
        <TouchableOpacity
          style={tw`bg-green-600 p-3 rounded mt-4`}
          onPress={() => navigation.navigate('Payment')}>
          <Text style={tw`text-white text-center font-semibold`}>
            Proceed to Payment
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BookingScreen;
