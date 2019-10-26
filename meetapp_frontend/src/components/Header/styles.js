import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 92px;
  background: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 31px;
      height: 32px;
      margin: 30px 0;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;
    margin: auto;

    strong {
      margin-bottom: 4px;
      display: block;
      color: #fff;
      font-size: 14px;
    }

    a {
      display: block;
      margin-top: 4px;
      font-size: 14px;
      color: #fff;
      opacity: 0.7;

      :hover {
        opacity: 1;
      }
    }
  }

  button {
    margin-left: 20px;
    width: 71px;
    height: 42px;
    background: #d44059;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.07, '#D44059')};
    }
  }
`;
