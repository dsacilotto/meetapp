import { all, takeLatest, call, put } from 'redux-saga/effects';

import Toast from '~/components/Toast';
import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    Toast('Perfil atualizado', 'success');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    Toast('Erro ao atualizar o perfil!', 'error');

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
