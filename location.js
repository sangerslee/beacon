import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  DeviceEventEmitter,
  ListView,
  Image
} from 'react-native';
import { Container, Header, Title, Button, Icon, Content, Card, CardItem, Tabs, View, Text, List, ListItem, Badage } from 'native-base';


export default class TabTwo extends Component {
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
            <Text header>Beacon Locations</Text>
          </CardItem>
        </Card>
        <Card>  
          <CardItem header>
            <Text>AIE LONDON</Text>
           <Image  style={styles.instructions} source={require('./img/aie.png')} />
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
          <Text>AIE ASTON </Text>
            <Image  style={styles.instructions} source={require('./img/aie.png')} />
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
          <Text>AIE BIRMINGHAM </Text>
            <Image  style={styles.instructions} source={require('./img/aie.png')} />
          </CardItem>
        </Card>   
        </Content>
      </Container>

    );
  }
};

const styles = StyleSheet.create({
  instructions: {
   
    width: 200,
    height: 100, 
  },
});
//AppRegistry.registerComponent('tabTwo', () => TabTwo);