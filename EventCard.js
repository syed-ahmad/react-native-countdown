import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { formatDate, getCountdownParts } from './api';

export default function EventCard({ event }) {
  return (
    <View style={StyleSheet.cardHeader}>
      <Text style={StyleSheet.date}>{formatDate(event.date)}</Text>
      <Text style={StyleSheet.title}>{event.title}</Text>
    </View>
  );
}

EventCard.propTypes = {
  event: PropTypes.shape({
    date: PropTypes.string, //.instanceOf(Date),
    title: PropTypes.string.isRequired
  })
};
