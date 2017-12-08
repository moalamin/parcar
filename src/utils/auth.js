import {AsyncStorage} from 'react-native';

export function saveToAsyncStorage(user) {
  return AsyncStorage.setItem('user_data', JSON.stringify(user))
}