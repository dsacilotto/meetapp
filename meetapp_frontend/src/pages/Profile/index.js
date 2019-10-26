import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { MdSave } from 'react-icons/md';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  oldPassword: Yup.string().min(6, 'Sua senha possui ao menos 6 caracteres'),
  password: Yup.string()
    .min(6, 'Senha deve ter no mínimo 6 caracteres')
    .when('oldPassword', (oldPassword, field) =>
      oldPassword
        ? field
            .required('A nova senha é obrigatória')
            .notOneOf(
              [Yup.ref('oldPassword')],
              'A senha antiga e a nova não podem ser iguais'
            )
        : field
    ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('Confirmação da senha é obrigatória')
          .oneOf(
            [Yup.ref('password')],
            'A nova senha e sua confirmação devem ser iguais'
          )
      : field
  ),
});

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo *" />
        <Input name="email" placeholder="Seu e-mail *" />

        <hr />

        <Input name="oldPassword" type="password" placeholder="Senha atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />

        <button type="submit">
          <div>
            <MdSave size={18} color="#FFF" />
            <span>Salvar perfil</span>
          </div>
        </button>
      </Form>
    </Container>
  );
}
