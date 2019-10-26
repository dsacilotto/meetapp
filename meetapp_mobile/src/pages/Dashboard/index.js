import React, { useEffect, useState, useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { pt } from 'date-fns/locale';
import { format, subDays, addDays } from 'date-fns';

import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';

import { Container, List, DateText, DateHeader } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organized', {
        params: { date },
      });

      setMeetups(response.data);
    }

    loadMeetups();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }
  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Background>
      <Header />
      <Container>
        <DateHeader>
          <Icon
            name="chevron-left"
            size={30}
            color="#fff"
            onPress={handlePrevDay}
          />
          <DateText>{dateFormatted}</DateText>
          <Icon
            name="chevron-right"
            size={30}
            color="#fff"
            onPress={handleNextDay}
          />
        </DateHeader>

        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup data={item} buttonText="Realizar inscrição" />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
