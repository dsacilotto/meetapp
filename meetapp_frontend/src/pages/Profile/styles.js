import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      font-size: 16px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    > span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 20px 0 19px;
    }

    button {
      margin: 10px 0 0 auto;
      height: 42px;
      width: 162px;
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;
      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.07, '#f94d6a')};
      }

      div {
        display: flex;
        margin: auto;

        svg {
          margin-right: 10px;
        }

        span {
          font-size: 16px;
          font-weight: bold;
          color: #fff;
        }
      }
    }
  }
`;
