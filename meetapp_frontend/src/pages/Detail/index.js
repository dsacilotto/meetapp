import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MdEdit, MdDeleteForever, MdEvent, MdLocationOn } from 'react-icons/md';

import { meetupCancelRequest } from '~/store/modules/meetup/actions';

import history from '~/services/history';

import { Container } from './styles';

export default function Detail() {
  const dispatch = useDispatch();
  const meetup = useSelector(state => state.meetup.data);

  function handleEdit() {
    history.push('meet');
  }

  function handleCancel() {
    dispatch(meetupCancelRequest(meetup));
  }

  return (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
        {!meetup.past && (
          <div>
            <button type="button" id="btEdit" onClick={handleEdit}>
              <div>
                <MdEdit size={20} />
              </div>
              <span>Editar</span>
            </button>
            <button type="button" id="btCancel" onClick={handleCancel}>
              <div>
                <MdDeleteForever size={20} />
              </div>
              <span>Cancelar</span>
            </button>
          </div>
        )}
      </header>

      <section>
        <img src={meetup.file ? meetup.file.url : ''} alt="banner" />
        <p>{meetup.description}</p>
      </section>

      <footer>
        <div>
          <MdEvent size={20} />
          <p>{meetup.dateFormatted}</p>
        </div>
        <div>
          <MdLocationOn size={20} />
          <p>{meetup.location}</p>
        </div>
      </footer>
    </Container>
  );
}
