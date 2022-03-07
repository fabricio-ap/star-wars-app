import { Logo, Text } from '~/components/atoms';
import { IconButton, Tag } from '~/components/molecules';
import { colors } from '~/styles/colors';
import {
  ButtonView,
  HeroContainer,
  HeroGradient,
  HeroImageBackground,
} from './styles';

export function Hero({ item, onDetail }) {
  const { image_url, title, subtitle, type } = item;

  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: image_url,
        }}
      >
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          {!onDetail && <Logo size="small" />}
          <Tag mt={onDetail ? 224 : 200}>{type}</Tag>
          <Text fontFamily="bold" size={28} mt={12}>
            {title}
          </Text>
          <Text size={18}>{subtitle}</Text>

          <ButtonView>
            <IconButton label="Favoritos" iconName="add-circle-outline" />
            {!onDetail && (
              <IconButton
                label="Saiba Mais"
                iconName="information-circle-outline"
              />
            )}
          </ButtonView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  );
}
