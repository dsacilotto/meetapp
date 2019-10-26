import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 20px;

  label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 300px;
    width: 940px;
    border-radius: 4px;
    margin-top: 50px;

    background: #000;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 300px;
      width: 940px;
      border-radius: 4px;
    }

    div {
      text-align: center;
      opacity: 0.3;
    }

    input {
      display: none;
    }
  }
`;
