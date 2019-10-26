import React, { useEffect, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';

import { Container, List } from './styles';

function Subscription({ isFocused }) {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('subscriptions');

      setMeetups(response.data);
    }

    loadMeetups();
  }, [isFocused]);

  return (
    <Background>
      <Header />
      <Container>
        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup data={item} buttonText="Cancelar inscrição" isCanceling />
          )}
        />
      </Container>
    </Background>
  );
}

Subscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="loyalty" size={20} color={tintColor} />
  ),
};

Subscription.propTypes = {
  isFocused: PropTypes.bool,
};

Subscription.defaultProps = {
  isFocused: false,
};

export default withNavigationFocus(Subscription);
