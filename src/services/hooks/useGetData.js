import { http } from '../api';

export function useGetData() {
  const getFilms = async () => {
    return await http
      .get('/films')
      .then((response) => response.data)
      .catch((error) => {
        // handle error
        console.log(error);
        return { error };
      });
  };

  const getCharacters = async () => {
    return await http
      .get('/characters')
      .then((response) => response.data)
      .catch((error) => {
        // handle error
        console.log(error);
        return { error };
      });
  };

  return { getFilms, getCharacters };
}
