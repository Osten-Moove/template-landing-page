import styled from 'styled-components';

export const Content = styled.div`
  z-index: 1;
  .hide {
    display: none;
  }
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #000000 0%, #303131 100%);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  border: none;
  position: fixed;
  left: 5%;
  bottom: 5%;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 2;
`;
