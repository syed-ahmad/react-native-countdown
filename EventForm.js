import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

class EventForm extends Component {
  handleAddPress = () => {
    this.props.navigation.navigate('list');
  };
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.handleAddPress}>
          <Text style={{ padding: 20 }}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default EventForm;
