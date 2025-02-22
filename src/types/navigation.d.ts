import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Category: undefined;
  EventDetails: undefined;
  Booking: undefined;
  Payment: undefined;
  Success: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
