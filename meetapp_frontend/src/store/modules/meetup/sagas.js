import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { meetupFailure } from './actions';
import history from '~/services/history';

export function* createMeetup({ payload }) {
  try {
    yield call(api.post, 'meetups', payload.data);

    toast.success('Meetup criado com sucesso :)');

    history.push('/');
  } catch (error) {
    toast.error('Erro ao criar o Meetup, verifique os dados!');

    yield put(meetupFailure());
  }
}

export function* updateMeetup({ payload }) {
  try {
    yield call(api.put, `meetups/${payload.data.id}`, payload.data);

    toast.success('Meetup atualizado :)');

    history.push('/');
  } catch (error) {
    toast.error('Erro ao atualizar o Meetup, verifique os dados!');

    yield put(meetupFailure());
  }
}

export function* cancelMeetup({ payload }) {
  try {
    yield call(api.delete, `meetups/${payload.data.id}`);

    toast.warn(`O evento ${payload.data.title} foi cancelado`);

    history.push('/');
  } catch (error) {
    toast.error('Erro ao cancelar o Meetup!');

    yield put(meetupFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_REQUEST', updateMeetup),
  takeLatest('@meetup/CANCEL_REQUEST', cancelMeetup),
]);
