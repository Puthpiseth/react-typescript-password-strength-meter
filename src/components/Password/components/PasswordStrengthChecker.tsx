import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PasswordValidator } from '../../../types/password-validator';
import { PasswordInnerContainerLayout, PasswordStrengthContainer } from '../styles/PasswordStrength.style';
import { minOneLowercase, minOneNumber, minOneSpecialCharacter, minOneUppercase } from '../validator-regex';
import PasswordStrengthIndicatorItem from './PasswordStrengthIndicatorItem';

interface PasswordProps {
  password: string;
}

const PasswordStrengthChecker = ({ password }: PasswordProps) => {
  const [passwordValidator, setPasswordValidator] = useState<PasswordValidator>();

  const passwordValidatorCheck = {
    minLength: password?.length >= 8,
    minOneLowercase: !!minOneLowercase.test(password),
    minOneUppercase: !!minOneUppercase.test(password),
    minOneNumber: !!minOneNumber.test(password),
    minOneSpecialCharacter: !!minOneSpecialCharacter.test(password),
  };

  useEffect(() => {
    setPasswordValidator(passwordValidatorCheck);
  }, [password]);

  return (
    <>
      <PasswordStrengthContainer>
        <PasswordInnerContainerLayout>
          <SubTitle>Password must contain the following</SubTitle>
          <PasswordStrengthIndicatorItem text={'A lowercase letter'} isValid={passwordValidator?.minOneLowercase} />
          <PasswordStrengthIndicatorItem text={'An uppercase letter'} isValid={passwordValidator?.minOneUppercase} />
          <PasswordStrengthIndicatorItem text={'A number'} isValid={passwordValidator?.minOneNumber} />
          <PasswordStrengthIndicatorItem
            text={'A special character'}
            isValid={passwordValidator?.minOneSpecialCharacter}
          />
          <PasswordStrengthIndicatorItem text={'8 characters minimum'} isValid={passwordValidator?.minLength} />
        </PasswordInnerContainerLayout>
      </PasswordStrengthContainer>
    </>
  );
};

export default PasswordStrengthChecker;

const SubTitle = styled.p`
  font-weight: bold;
  font-size: 12px;
  color: #666464;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`;
