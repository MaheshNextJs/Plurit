import React from 'react';
import {View, Text, Button} from 'react-native';

import {NavigationProp} from '@react-navigation/native';

interface ProfileScreenProps {
  navigation: NavigationProp<any>;
}

const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default ProfileScreen;
