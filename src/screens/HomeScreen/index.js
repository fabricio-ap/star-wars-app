import React, { useState } from 'react';
import { Hero, HomeList, ScreenScrollContainer } from '~/components';
import { useGetData } from '~/services/hooks';

export function HomeScreen() {
  const { getFilms, getCharacters } = useGetData();
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [characters, setCharacters] = useState([]);

  const callGetData = async () => {
    const filmsResponse = await getFilms();
    const charactersResponse = await getCharacters();

    if (!filmsResponse.error && !charactersResponse.error) {
      setFilms(filmsResponse);
      setCharacters(charactersResponse);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    callGetData();
  }, []);

  return (
    <ScreenScrollContainer>
      <Hero
        item={{
          image_url:
            'https://cdna.artstation.com/p/assets/images/images/022/959/922/large/tyler-wetta-starwars-riseofskywalker24x36v2smaller-copy.jpg?1577472706',
          title: 'Episódio IX',
          subtitle: 'A Ascenção Skywalker',
          type: 'Filme',
        }}
      />
      <HomeList title="Filmes" data={films} />
      <HomeList title="Personagens" data={characters} />
    </ScreenScrollContainer>
  );
}
