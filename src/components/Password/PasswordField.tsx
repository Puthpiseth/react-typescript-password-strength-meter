import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import PasswordStrengthBar from 'react-password-strength-bar';
import styled from 'styled-components';
import { InputField } from '../Input/InputField';
import { EyeCloseOpenIcon } from '../Input/components/EyeCloseOpenIcon';
import { Label } from '../UI/Text/Label';
import { Title } from '../UI/Text/Title';

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

const RegisterForm = () => {
  const { register } = useForm();
  const [password, setPassword] = useState<string>('');
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // By adding .split(' ').join('') or .replace(/\s/g, '') or .trim() to prevent to enter space in input field
    const newValue = event.target.value;
    setPassword(newValue);
  };

  const togglePassword: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  return (
    <Container>
      <Title>Password Strength Meter</Title>
      <InnerLayout>
        <Label>Password</Label>
        <InputField
          {...register('password')}
          value={password.trim()}
          type={passwordShown ? 'text' : 'password'}
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <EyeCloseOpenIcon icon={passwordShown ? FaEye : FaEyeSlash} onClick={togglePassword} />
        <PasswordStrengthBar password={password} scoreWords={['weak', 'medium', 'good', 'great']} shortScoreWord={''} />
      </InnerLayout>
    </Container>
  );
};

export default RegisterForm;
