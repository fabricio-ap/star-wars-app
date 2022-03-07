import { Hero, ScreenScrollContainer } from '~/components';
import { useDataStore } from '~/services/stores';

export function Detail() {
  const { selectedData } = useDataStore();

  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} />
    </ScreenScrollContainer>
  );
}
