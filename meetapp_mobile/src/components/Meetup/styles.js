import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  margin-bottom: 20px;
  border-radius: 4px;
  background: #fff;
`;

export const Banner = styled.Image`
  width: auto;
  height: 150px;
`;

export const Info = styled.View`
  display: flex;
  padding: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #999;

  margin-left: 10px;
`;

export const Data = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const SubmitButton = styled(Button)`
  width: auto;
  margin-top: 10px;
`;
