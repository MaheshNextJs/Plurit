import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {NavigationProp} from '../types/navigation';

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={tw`flex-1 bg-white justify-center items-center px-6`}>
      <Image
        source={require('../../src/images/banner.jpg')}
        style={tw`w-40 h-12 mb-4`}
        resizeMode="contain"
      />

      <Text style={tw`text-lg text-center text-gray-800 mb-4`}>
        Login now to find what's happening around you
      </Text>

      <View style={tw`w-full mb-4`}>
        <TextInput
          style={tw`border border-gray-300 rounded-full px-4 py-3 text-gray-700`}
          placeholder="Email address or mobile number"
          placeholderTextColor="gray"
        />
      </View>

      <View style={tw`w-full mb-4`}>
        <TextInput
          style={tw`border border-gray-300 rounded-full px-4 py-3 text-gray-700`}
          placeholder="Click on Send OTP"
          placeholderTextColor="gray"
        />
      </View>

      <TouchableOpacity
        style={tw`bg-purple-600 w-full py-3 rounded-full items-center mb-2`}
        onPress={() => navigation.navigate('Category')}>
        <Text style={tw`text-white font-semibold`}>Login</Text>
      </TouchableOpacity>

      <Text style={tw`text-purple-600 text-right w-full mb-6`}>Send OTP</Text>

      <Text style={tw`text-gray-500 mb-4`}>or</Text>
      <Text style={tw`text-gray-500 mb-4`}>Sign in with Social Accounts</Text>

      <View style={tw`flex-row space-x-4`}>
        <TouchableOpacity>
          <Image
            source={require('../../src/images/social.png')}
            style={tw`w-40 h-10`}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
