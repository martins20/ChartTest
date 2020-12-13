import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
  height: 100%;
`;

export const Graph = styled.div`
  /* border: 1px solid red; */

  width: 60%;

  height: 500px;

  position: relative;

  &:after {
    content: '......';

    color: transparent;
    background: #fff;

    padding: 6px 23px;
    position: absolute;
    bottom: 0;
    z-index: 2;
  }
`;
