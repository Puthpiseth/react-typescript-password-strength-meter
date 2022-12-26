import { Button } from '../ui/button/Button';
import { InputField } from '../ui/input/Input.style';
import { Label } from '../ui/text/Label';
import { Title } from '../ui/text/Title';
import { Form } from './Form';
import { FormContainer } from './FormContainer';

const RegisterForm = () => {
  return (
    <>
      <FormContainer>
        <Title>Password Strength Meter</Title>
        <Form>
          <Label>Email</Label>
          <InputField error={true} />
          <Label>Password</Label>
          <InputField error={true} />
          <Label>Confirm Password</Label>
          <InputField error={true} />
          <Button text={'Submit'} />
        </Form>
      </FormContainer>
    </>
  );
};

export default RegisterForm;
