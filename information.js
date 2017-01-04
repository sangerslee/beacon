import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  DeviceEventEmitter,
  ListView,
  Image
} from 'react-native';
import { Container, Header, Title, Button, Icon, Content, Card, CardItem, Tabs, View, Text, List, ListItem, Badage } from 'native-base';


export default class TabOne extends Component {
  render() {
    return (
      <Container>
         <Header>
            <Button transparent>
              <Icon name='ios-arrow-back' />
            </Button>
              <Title>Introduction to Application</Title>
          </Header>
        <Content>
          <Card>
            <CardItem header>
               <Text>Introduction to AIE Beacon Tour Application</Text>
            </CardItem>
            <CardItem>            
              <Text>
               The AIE Becaon Tour Application is a fun self-touring application.
              Beacons are located in various places in the AIE.{"\n"}
              </Text>
              <Text>
              The application will identify and locate the beaoncs, as you will have stronger
              signal when you approach to Beacons closely.
             </Text>
            </CardItem>
            <CardItem>
              <Image  style={{width: 350, height: 650}} source={require('./img/concept.png')} />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
};


//AppRegistry.registerComponent('tabOne', () => TabOne);