import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { parseISO } from 'date-fns';
import * as Yup from 'yup';

import { MdAddCircleOutline } from 'react-icons/md';

import {
  meetupCreateRequest,
  meetupUpdateRequest,
} from '~/store/modules/meetup/actions';

import BannerInput from './BannerInput';
import Datepicker from './Datepicker';

import { Container } from './styles';

const schema = Yup.object().shape({
  file_id: Yup.number().required('Imagem para o banner é obrigatória'),
  title: Yup.string().required('Título é obrigatório'),
  description: Yup.string().required('Descrição é obrigatória'),
  date: Yup.date('Formato de data inválida')
    .required('Data é obrigatória')
    .min(new Date(), 'Data deve ser futura'),
  location: Yup.string().required('A localização é obrigatória'),
});

export default function Meet() {
  const dispatch = useDispatch();
  const meetup = useSelector(state => state.meetup.data);

  const isEdit = !!(meetup && meetup.id);

  const meetupFormatted = isEdit
    ? {
        ...meetup,
        date: parseISO(meetup.date),
      }
    : {};

  function handleSubmit(data) {
    if (isEdit) {
      data.id = meetup.id;
      dispatch(meetupUpdateRequest(data));
    } else {
      dispatch(meetupCreateRequest(data));
    }
  }

  return (
    <Container>
      <Form
        schema={schema}
        initialData={meetupFormatted}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <BannerInput name="file_id" />

        <Input name="title" placeholder="Título do Meetup *" />
        <Input
          multiline
          rows="5"
          name="description"
          placeholder="Descrição completa *"
        />
        <Datepicker name="date" placeholder="Data do meetup *" />
        <Input name="location" placeholder="Localização *" />

        <button type="submit">
          <div>
            <MdAddCircleOutline size={20} />
            <span>Salvar meetup</span>
          </div>
        </button>
      </Form>
    </Container>
  );
}
