import AsyncStorage from '@react-native-community/async-storage';

const collaborators = ['Pedro', 'Luiz', 'Felipe', 'Matheus', 'Rafael', 'Lucas'];

export const saveCollaborators = async () => {
  return await AsyncStorage.setItem(
    'collaborators',
    JSON.stringify(collaborators),
  )
    .then((response) => {
      console.log('response', response);
    })
    .catch((err) => {
      console.log('err', err);
    });
};

export const getCollaborators = async () => {
  const responseCollaborators = await AsyncStorage.getItem('collaborators');
  if (responseCollaborators) {
    const objectSuggestion = JSON.parse(responseCollaborators);
    return objectSuggestion;
    // throw 'errou meu jovem';
  } else {
    return [];
  }
};
