import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button';
  text: string;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 1.1vh;
  margin: 1vh 0;
  font-size: 16px;
  color: white;
  border-radius: 4px;
  background-color: #07882b;
  border: 1px solid #07882b;
  cursor: pointer;
  transition: all 300ms;
  &:hover {
    opacity: 0.9;
  }
`;

export const Button = (props: ButtonProps) => {
  const { text, onClick, type = 'submit' } = props;

  return (
    <StyledButton onClick={onClick} text={text} type={type}>
      <span>{text}</span>
    </StyledButton>
  );
};
