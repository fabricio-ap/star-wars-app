import styled from 'styled-components/native';

export const BottomBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.metrics.px(64)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`;

// O flex: 1 faz ocupar o máximo de espaço possível
export const BarItem = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
