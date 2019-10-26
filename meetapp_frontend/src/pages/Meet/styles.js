import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      width: 100%;
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

    textarea {
      resize: none;
      overflow: hidden;
      padding: 15px 15px;
      height: auto;
    }

    > button {
      margin: 0 0 0 auto;
      height: 42px;
      width: 180px;
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
        color: #fff;

        svg {
          margin-right: 10px;
        }

        span {
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
  }
`;
