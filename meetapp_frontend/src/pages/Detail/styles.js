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

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        height: 42px;
        border: 0;
        border-radius: 4px;

        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;

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

      #btEdit {
        width: 116px;
        background: #4dbaf9;
        margin-right: 7px;

        &:hover {
          background: ${darken(0.07, '#4dbaf9')};
        }
      }

      #btCancel {
        width: 138px;
        background: #d44059;
        margin-left: 7px;

        &:hover {
          background: ${darken(0.07, '#d44059')};
        }
      }
    }
  }

  section {
    margin-top: 50px;

    img {
      height: 300px;
      width: 940px;
      border-radius: 4px;
    }

    p {
      margin-top: 25px;

      white-space: pre-line;
      line-height: 32px;
      font-size: 18px;
    }
  }

  footer {
    margin-top: 25px;
    display: flex;
    justify-content: flex-start;

    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);

    div {
      margin-right: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
        margin-right: 10px;
      }
    }
  }
`;
