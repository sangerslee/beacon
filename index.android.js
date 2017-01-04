/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  DeviceEventEmitter,
  ListView,
  Image
} from 'react-native';
import { Container, Header, Title, Button, Icon, Content, Card, CardItem, Tabs, View, Text, List, ListItem, Badage, Col, Grid } from 'native-base';
import Beacons from 'react-native-beacons-android';
import BluetoothState from 'react-native-bluetooth-state';
import { Router, Scene, Actions } from 'react-native-router-flux';
import PageOne from './information';
import PageTwo from './location';
import MenuPage from './menu';
import Beacon from './beacon';
import RangeBeacon from './range';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Menupage" component={MenuPage} title="Menu" initial={true}/>
          <Scene key="pageOne" component={PageOne} title="Introduction" />
          <Scene key="pageTwo" component={PageTwo} title="Beacon Locations" />
          <Scene key="listOfBeacons" component={Beacon} title="List of Beacons" />
          <Scene key="RangeOfBeacons" component={RangeBeacon} title="Beacon range" />
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('Aiebeacon', () => App);
 