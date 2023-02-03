import styled from 'styled-components';

interface PasswordStrengthIndicatorItemProps {
  isValid: boolean | undefined | null;
  text: string;
}

const PasswordStrengthIndicatorItem = ({ isValid, text }: PasswordStrengthIndicatorItemProps) => {
  return <>{isValid ? <TextGreen>{text}</TextGreen> : <TextGray>{text}</TextGray>}</>;
};

export default PasswordStrengthIndicatorItem;

const TextGreen = styled.p`
  font-size: 12px;
  color: #07882b;

  &::before {
    content: '✓';
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

const TextGray = styled.p`
  font-size: 12px;
  color: #666464;

  &::before {
    content: 'X';
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    font-size: 13px;
  }
`;
