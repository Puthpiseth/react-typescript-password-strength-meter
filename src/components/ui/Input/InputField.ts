import styled from 'styled-components';

export const InputField = styled.input`
  color: '#666464';
  padding: 1.2vh;
  border: 1px solid #6c6b6b;
  border-radius: 4px;
  font-size: 14px;
  &::placeholder {
    color: lightgray;
    font-size: 13px;
  }
  &:focus {
    outline: none;
    border: 1px solid #07882b;
    box-shadow: 0 0 2px #07882b;
  }
`;
