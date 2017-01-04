import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  DeviceEventEmitter,
  ListView,
  Image
} from 'react-native';
import { Container, Header, Title, Button, Icon, Content, Card, CardItem, Tabs, View, Text, List, ListItem, Badage } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Menu extends Component {
  render() {
    return (
    
      <Container>
        <Header>
        <Text>Menu </Text>
         </Header>
        <Content>
            <List>
              <ListItem onPress={Actions.pageOne}>
                <Text>Introduction</Text>
              </ListItem>
              <ListItem onPress={Actions.pageTwo}>
                <Text>Beacon Location</Text>
              </ListItem>
              <ListItem onPress={Actions.listOfBeacons} >
                <Text>List of Beacons</Text>
              </ListItem>
              <ListItem onPress={Actions.RangeOfBeacons}>
                <Text>Beacon Range</Text>
              </ListItem>
            </List>
        </Content>
      </Container>
    
    );
  }
}

