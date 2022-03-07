import { Hero, HomeList, ScreenScrollContainer } from '~/components';

const FAKE_DATA = [
  {
    id: 0,
    image_url:
      'https://i.pinimg.com/originals/f2/e0/db/f2e0db4f98cf813bb076fc7db200dbc5.png',
    title: 'Darth Vader',
    subtitle: 'Anakin Skywalker',
    type: 'Personagem',
    description:
      'Darth Vader (anteriormente chamado Anakin Skywalker) é um dos personagens centrais da série de filmes Star Wars (Guerra nas Estrelas), tendo sido um dos protagonistas, juntamente com Obi-Wan Kenobi, da trilogia prequel (mas se tornando o vilão secundário no terceiro filme após a morte do General Grievous), um dos antagonistas principais da trilogia original ao lado do Imperador Palpatine (porém acaba se redimindo no final), e um anti-herói póstumo na trilogia de sequência, sendo que suas ações ainda afetam o universo de Star Wars, sendo para o bem ou para o mal, principalmente quando se trata de seu neto, Ben Solo, o Kylo Ren, que tem por Vader uma admiração cega, e deseja mais do que tudo ser como ele (e até superá-lo).',
  },
  {
    id: 1,
    image_url:
      'https://sm.ign.com/ign_br/screenshot/default/mestre-yoda-disney-1383071006475-v2-1600x1200_7zn8.jpg',
    title: 'Yoda',
    subtitle: 'Mestre Yoda',
    type: 'Personagem',
    description:
      'Yoda é um personagem fictício no universo de Star Wars, criado por George Lucas. Ele aparece em seis filmes da saga, todos os filmes da trilogia prequela e da original exceto pelo episódio 4, e também aparece no episódio 8. Frank Oz, célebre criador dos Muppets, é o responsável pela sua voz. Possui apenas 76 centímetros, mas foi um sábio Mestre Jedi que liderou o Conselho Jedi por anos.',
  },
];

export function Home() {
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
      <HomeList title="Filmes" data={FAKE_DATA} />
      <HomeList title="Personagens" data={FAKE_DATA} />
    </ScreenScrollContainer>
  );
}
