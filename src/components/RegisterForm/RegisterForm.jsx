import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label, LabelName, Submit } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const newUser = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(register(newUser));

    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <LabelName> Username</LabelName>
        <input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
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
      <Submit type="submit">Register</Submit>
    </Form>
  );
};
