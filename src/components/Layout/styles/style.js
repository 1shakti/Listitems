import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 90%;
  margin: auto;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  background-color: #d3d3d3;

  button {
    cursor: pointer;
    border: none;
    outline: none;
    padding: 4px 8px;
    border-radius: 4px;
    background-color: #2a52be;
    color: #fff;
    font-weight: 500;
  }
`;

export const Main = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
`;
