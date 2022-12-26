import styled from 'styled-components';

interface InputLayoutProps {
  error: boolean;
}

export const InputLayout = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;

export const InputField = styled.input<InputLayoutProps>`
  color: '#6C6B6B';
  padding: 1.2vh;
  border: 1px solid ${(prop) => (prop.error ? '#FF5F59' : '#6C6B6B')};
  border-radius: 4px;
  font-size: 14px;
  &::placeholder {
    color: '#B9B7B7';
    font-size: 14px;
  }
  &:focus {
    outline: none;
    border: 1px solid #07882b;
    box-shadow: 0 0 2px #07882b;
  }
`;

export const InputButton = styled.button`
  position: absolute;
  top: 30%;
  right: 2%;
  background: none;
  border: none;
  cursor: pointer;
`;
