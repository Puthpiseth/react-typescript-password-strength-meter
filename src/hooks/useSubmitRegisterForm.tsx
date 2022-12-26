import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import {
  nameRegex,
  nameRegexMessage,
  passwordRegex,
  passwordRegexMessage,
} from '../components/form/validator-form.regex';

type CreateUserParams = {
  email: string;
  password: string;
  passwordConfirm: string;
};
export const useSubmitRegisterForm = () => {
  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        userName: Yup.string().required('Username is required').matches(nameRegex, nameRegexMessage),
        email: Yup.string().required('Email is required').email('Email is not valid'),
        password: Yup.string().required('Password is required').matches(passwordRegex, passwordRegexMessage),
        passwordConfirm: Yup.string()
          .required('Confirm Password is required')
          .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
      }),
    []
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserParams>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  return {
    control,
    errors,
    handleSubmit,
  };
};
