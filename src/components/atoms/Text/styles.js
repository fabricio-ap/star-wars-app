import styled from 'styled-components/native';

export const CustomText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  line-height: ${({ theme }) => theme.metrics.px(32)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ color, theme }) => color || theme.colors.white};
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
`;
