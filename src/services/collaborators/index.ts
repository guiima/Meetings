import AsyncStorage from '@react-native-community/async-storage';

const collaborators = [
  {label: 'Pedro', value: 'Pedro'},
  {label: 'Luiz', value: 'Luiz'},
  {label: 'Felipe', value: 'Felipe'},
  {label: 'Matheus', value: 'Matheus'},
  {label: 'Lucas', value: 'Lucas'},
];

export const saveCollaborators = async () => {
  return await AsyncStorage.setItem(
    'collaborators',
    JSON.stringify(collaborators),
  );
};

export const getCollaborators = async () => {
  const responseCollaborators = await AsyncStorage.getItem('collaborators');
  if (responseCollaborators) {
    const objectSuggestion = JSON.parse(responseCollaborators);
    return objectSuggestion;
  } else {
    return [];
  }
};
