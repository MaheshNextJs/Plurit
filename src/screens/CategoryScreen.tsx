import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../types/navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const imageMap: {[key: string]: any} = {
  '1.png': require('../../src/images/1.png'),
};

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={tw`flex-1 bg-white`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={tw`p-4`}>
          <View style={tw`flex-row items-center justify-between`}>
            <Image
              source={require('../../src/images/logo.jpg')}
              style={tw`w-28 h-8`}
              resizeMode="contain"
            />
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} color="purple" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={tw`flex-row items-center bg-gray-100 p-3 rounded-lg mt-4`}>
            <Ionicons name="location-outline" size={18} color="purple" />
            <View style={tw`ml-2`}>
              <Text style={tw`text-purple-600 font-semibold`}>Bangalore</Text>
              <Text style={tw`text-gray-500 text-xs`}>
                #2 KR Layout, Indiranagar
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center my-4`}>
          <TouchableOpacity
            style={tw`bg-purple-600 px-4 py-2 rounded-full mx-2`}>
            <Text style={tw`text-white`}>Entertainment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`border border-gray-300 px-4 py-2 rounded-full mx-2`}>
            <Text style={tw`text-gray-700`}>Academic</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`border border-gray-300 px-4 py-2 rounded-full mx-2`}>
            <Text style={tw`text-gray-700`}>Volunteering</Text>
          </TouchableOpacity>
        </View>

        <View style={tw`px-4`}>
          <Text style={tw`text-lg font-semibold mb-2`}>Pick your category</Text>
          <View style={tw`flex-row flex-wrap`}>
            {[
              {name: 'Plays', image: '1.png'},
              {name: 'Pets Show', image: '1.png'},
              {name: 'Concert', image: '1.png'},
              {name: 'Magician', image: '1.png'},
              {name: 'Food Fest', image: '1.png'},
              {name: 'Dance', image: '1.png'},
              {name: 'Premiere', image: '1.png'},
              {name: 'Sports', image: '1.png'},
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={tw`w-1/4 p-2`}
                onPress={() => navigation.navigate('EventDetails')}>
                <View style={tw`bg-gray-100 p-2 rounded-lg items-center`}>
                  <Image
                    source={imageMap[item.image]}
                    style={tw`w-16 h-16`}
                    resizeMode="contain"
                  />
                  <Text style={tw`text-sm text-center mt-1`}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={tw`px-4 mt-6`}>
          <Text style={tw`text-lg font-semibold mb-2`}>Most Popular</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image
              source={imageMap['1.png']}
              style={tw`w-64 h-32 mr-4 rounded-lg`}
              resizeMode="cover"
            />
            <Image
              source={imageMap['1.png']}
              style={tw`w-64 h-32 rounded-lg`}
              resizeMode="cover"
            />
          </ScrollView>
        </View>

        <View style={tw`px-4 mt-6 mb-4`}>
          <Text style={tw`text-lg font-semibold mb-2`}>
            Resume your booking
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image
              source={imageMap['1.png']}
              style={tw`w-32 h-20 mr-4 rounded-lg`}
              resizeMode="cover"
            />
            <Image
              source={imageMap['1.png']}
              style={tw`w-32 h-20 rounded-lg`}
              resizeMode="cover"
            />
          </ScrollView>
        </View>
      </ScrollView>

      <View
        style={tw`flex-row justify-around bg-white py-3 border-t border-gray-300`}>
        <TouchableOpacity style={tw`items-center`}>
          <Ionicons name="home" size={24} color="purple" />
          <Text style={tw`text-purple-600 text-xs`}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`items-center`}>
          <Ionicons name="calendar-outline" size={24} color="gray" />
          <Text style={tw`text-gray-500 text-xs`}>Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`items-center`}>
          <Ionicons name="search-outline" size={24} color="gray" />
          <Text style={tw`text-gray-500 text-xs`}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`items-center`}>
          <Ionicons name="heart-outline" size={24} color="gray" />
          <Text style={tw`text-gray-500 text-xs`}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`items-center`}>
          <Ionicons name="person-outline" size={24} color="gray" />
          <Text style={tw`text-gray-500 text-xs`}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
