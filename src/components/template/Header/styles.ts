import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 4.875rem;
  border-bottom: 2px solid #e8ecef;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.palette.background.paper};
  padding: 0 3rem 0 3rem;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  justify-content: space-between;
`
