import styled from 'styled-components/native';

export const CustomText = styled.Text`
  font-size: 24px;
  font-style: normal;
  font-weight: bold;
  line-height: 30px;
  color: ${({ color }) => color || 'white'};
  margin-top: 16px;
`;
