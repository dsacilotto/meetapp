import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const DateHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 15px;
`;

export const DateText = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: #fff;
`;
