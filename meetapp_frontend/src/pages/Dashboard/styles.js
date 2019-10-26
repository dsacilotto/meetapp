import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 32px;
    }

    button {
      height: 42px;
      width: 172px;
      background: #f94d6a;
      border: 0;
      border-radius: 4px;

      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.07, '#f94d6a')};
      }

      div {
        display: flex;

        svg {
          margin-right: 5px;
          color: #fff;
        }
      }

      span {
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        margin-left: 5px;
      }
    }
  }

  ul {
    margin-top: 50px;
  }
`;

export const Meetup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 62px;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 0 30px;
  background: rgba(0, 0, 0, 0.1);

  strong {
    font-size: 18px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 16px;
      opacity: 0.6;
      margin-right: 20px;
    }

    svg {
      color: #fff;
      cursor: pointer;
    }
  }
`;
