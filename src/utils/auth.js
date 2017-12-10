import {AsyncStorage} from 'react-native';

export function saveToAsyncStorage(user) {
  return AsyncStorage.setItem('user_data', JSON.stringify(user))
}

export function checkAsyncStorageForUser() {
  return AsyncStorage.getItem('user_data')
}