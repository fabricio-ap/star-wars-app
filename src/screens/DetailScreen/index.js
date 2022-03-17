import { GoBack, Hero, ScreenScrollContainer, Text } from '~/components';
import { useDataStore } from '~/services/stores';

export function DetailScreen() {
  const { selectedData } = useDataStore();

  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} onDetail />
      <Text ml={24} fontFamily="black" size={18}>
        Descrição
      </Text>

      <Text
        mt={12}
        mb={24}
        ml={24}
        mr={24}
        size={14}
        lh={20}
        textAlign="justify"
      >
        {selectedData.description}
      </Text>

      <GoBack />
    </ScreenScrollContainer>
  );
}
