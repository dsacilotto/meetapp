import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';
import { pt } from 'date-fns/locale';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import Toast from '~/components/Toast';

import {
  Container,
  Banner,
  Info,
  Title,
  Data,
  Text,
  SubmitButton,
} from './styles';

export default function Meetup({ data, buttonText, isCanceling = false }) {
  const dateFormat = useMemo(() => {
    return format(parseISO(data.date), "d 'de' MMMM, 'às' HH'h'", {
      locale: pt,
    });
  }, [data.date]);

  async function handleSubscription() {
    try {
      await api.post(`meetups/${data.id}/subscriptions`);

      Toast('Inscrição realizada', 'success');
    } catch (error) {
      Toast('Erro ao realizar inscrição', 'error');
    }
  }

  async function handleUnsubscribe() {
    try {
      await api.delete(`meetups/${data.id}/subscriptions`);

      Toast('Inscrição cancelada', 'success');
    } catch (error) {
      Toast('Erro ao cancelar inscrição', 'error');
    }
  }

  return (
    <Container>
      <Banner source={{ uri: data.file && data.file.url }} />

      <Info>
        <Title>{data.title}</Title>
        <Data>
          <Icon name="event" size={20} color="#999" />
          <Text>{dateFormat}</Text>
        </Data>
        <Data>
          <Icon name="room" size={20} color="#999" />
          <Text>{data.location}</Text>
        </Data>
        <Data>
          <Icon name="person" size={20} color="#999" />
          <Text>Organizador: {data.User.name}</Text>
        </Data>
        <SubmitButton
          onPress={isCanceling ? handleUnsubscribe : handleSubscription}
        >
          {buttonText}
        </SubmitButton>
      </Info>
    </Container>
  );
}

Meetup.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    file: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    User: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  buttonText: PropTypes.string.isRequired,
  isCanceling: PropTypes.bool,
};

Meetup.defaultProps = {
  isCanceling: false,
};
