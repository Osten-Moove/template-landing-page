import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 4.875rem;
  border-bottom: 2px solid #e8ecef;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.palette.background.paper};
  justify-content: center;
  margin-top: 40%;
  
`;

export const Content = styled.div`
  text-align: center;
`;
