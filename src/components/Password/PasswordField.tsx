import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import PasswordStrengthBar from 'react-password-strength-bar';
import styled from 'styled-components';
import { EyeCloseOpenIcon } from '../Input/components/EyeCloseOpenIcon';
import { InputField } from '../Input/styles/InputField.style';
import PasswordStrengthChecker from './components/PasswordStrengthChecker';
import { Container, InnerLayout } from './styles/Containter.style';

const RegisterForm = () => {
  const { register } = useForm();
  const [password, setPassword] = useState<string>('');
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const [hasfocus, setFocus] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // By adding .split(' ').join('') or .replace(/\s/g, '') or .trim() to prevent to enter space in input field
    const newValue = event.target.value.replace(/\s/g, '');
    setPassword(newValue);
  };

  const togglePassword: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setPasswordShown(!passwordShown);
  };

  return (
    <Container>
      <Title>Password Strength Meter</Title>
      <InnerLayout>
        <Label>Password</Label>
        <InputField
          {...register('password')}
          value={password}
          type={passwordShown ? 'text' : 'password'}
          placeholder="Enter your password"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={handleChange}
        />
        <EyeCloseOpenIcon icon={passwordShown ? FaEye : FaEyeSlash} onClick={togglePassword} />
        <PasswordStrengthBar
          password={password}
          scoreWords={['weak', 'weak', 'medium', 'good', 'great']}
          shortScoreWord={''}
        />
      </InnerLayout>
      {hasfocus ? <PasswordStrengthChecker password={password} /> : null}
    </Container>
  );
};

export default RegisterForm;

const Title = styled.p`
  margin: 0 auto;
  padding-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
  color: #07882b;
`;

const Label = styled.label`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 6px;
  font-size: 14px;
  color: #666464;
`;
