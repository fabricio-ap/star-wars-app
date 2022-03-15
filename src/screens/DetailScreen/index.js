import { GoBack, Hero, ScreenScrollContainer } from '~/components';
import { useDataStore } from '~/services/stores';

export function DetailScreen() {
  const { selectedData } = useDataStore();

  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} onDetail />
      <GoBack />
    </ScreenScrollContainer>
  );
}
