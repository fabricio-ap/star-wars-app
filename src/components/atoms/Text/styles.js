import styled from 'styled-components/native';

export const CustomText = styled.Text`
  font-size: 24px;
  font-style: normal;
  line-height: 30px;
  font-family: 'SourceSansPro_700Bold';
  color: ${({ color }) => color || 'white'};
  margin-top: 16px;
`;
