import { useEffect, useState } from 'react';
import { PasswordValidator } from '../../../types/password-validator';
import { SubTitle } from '../../UI/Text/SubTitle';
import { PasswordInnerContainerLayout, PasswordStrengthContainer } from '../styles/PasswordStrength.style';
import { minOneLowercase, minOneNumber, minOneSpecialCharacter, minOneUppercase } from '../validator-regex';
import PasswordStrengthIndicatorItem from './PasswordStrengthIndicatorItem';

interface PasswordProps {
  password: string;
}

const PasswordStrengthChecker = ({ password }: PasswordProps) => {
  const [passwordValidator, setPasswordValidator] = useState<PasswordValidator>();

  useEffect(() => {
    setPasswordValidator({
      minLength: password?.length >= 8,
      minOneLowercase: !!minOneLowercase.test(password),
      minOneUppercase: !!minOneUppercase.test(password),
      minOneNumber: !!minOneNumber.test(password),
      minOneSpecialCharacter: !!minOneSpecialCharacter.test(password),
    });
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
