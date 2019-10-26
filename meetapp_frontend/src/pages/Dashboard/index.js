import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import pt from 'date-fns/locale/pt-BR';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';
import history from '~/services/history';

import { meetupDetail, newMeetupRequest } from '~/store/modules/meetup/actions';

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get('organized');

      const data = response.data.map(meet => {
        return {
          ...meet,
          dateFormatted: format(
            parseISO(meet.date),
            "d 'de' MMMM, 'às' HH'h'",
            {
              locale: pt,
            }
          ),
        };
      });

      setMeetup(data);
    }

    loadMeetup();
  }, []);

  function handleDetails(meetup) {
    dispatch(meetupDetail(meetup));
    history.push('detail');
  }

  function handleNewMeetup() {
    dispatch(newMeetupRequest());
    history.push('meet');
  }

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="button" onClick={handleNewMeetup}>
          <div>
            <MdAddCircleOutline size={20} />
          </div>
          <span>Novo meetup</span>
        </button>
      </header>

      <ul>
        {meetup.map(meet => (
          <Meetup key={meet.id} past={meet.past}>
            <strong>{meet.title}</strong>
            <div>
              <span>{meet.dateFormatted}</span>
              <MdChevronRight size={24} onClick={() => handleDetails(meet)} />
            </div>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
