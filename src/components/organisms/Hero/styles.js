import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const HeroContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(480)}px;
`;

export const HeroImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const HeroGradient = styled(LinearGradient)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: ${({ theme }) => theme.metrics.px(56)}px;
  padding-horizontal: ${({ theme }) =>
    theme.metrics.px(24)}px; // Propriedade do react-native
`;

export const ButtonView = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
`;
