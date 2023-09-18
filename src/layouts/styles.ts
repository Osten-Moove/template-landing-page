import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow-x: hidden;

`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Main = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.palette.background.default};
  flex-direction: row;
  flex: 1;
  max-height: calc(100% - 48px);
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  height: 100%;
`;
