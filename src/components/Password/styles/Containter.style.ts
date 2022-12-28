import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 4vh 2vh;
  background: #fffdfd;
  border-radius: 6px;
  box-shadow: 0px 1px 3px rgba(30, 30, 30, 0.3);

  @media (min-width: 600px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }
`;

export const InnerLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
