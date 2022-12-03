import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/operations';
import {
  Form,
  Label,
  LabelName,
  Submit,
} from '../RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const userLogIn = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(login(userLogIn));

    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <LabelName> Email</LabelName>
        <input
          type="email"
          name="email"
          id="email"
          pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
          required
        />
      </Label>
      <Label>
        <LabelName> Password</LabelName>
        <input type="password" name="password" autoComplete="true" required />
      </Label>
      <Submit type="submit">Log In</Submit>
    </Form>
  );
};
