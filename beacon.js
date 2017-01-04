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
 const dataSource = null;

export default class Beacon extends Component {
  constructor(props) {
    super(props);
    // Create our dataSource which will be displayed in the ListView
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2 }
    );
    this.state = {
      bluetoothState: '',
      // region information
      identifier: 'GemTot for iOS',
      uuid: '6665542b-41a1-5e00-931c-6a82db9b78c1',
      // React Native ListView datasource initialization


      dataSource: ds.cloneWithRows([])
    };
  }
  componentWillMount(){ 
Beacons.detectIBeacons();
const uuid = this.state.uuidRef;
Beacons.startRangingBeaconsInRegion('REGION1', uuid).then(() => console.log('Beacons ranging started succesfully')).catch(error => console.log('Beacons ranging not started, error: ${error}'));

}
componentDidMount(){ 
  this.beaconsDidRange = DeviceEventEmitter.addListener('beaconsDidRange', (data) => {this.setState({dataSource: this.DataSource.cloneWithRows(data.beacons)}); // debug needed here -> undefined data source
}
);
}
componentWillUnMount(){ 
  this.beaconsDidRange = null;
}

  render() {
    const {bluetoothState,dataSource} = this.state;
    return (
      <Container>
  <Header>
    <Button transparent>
      <Icon name='ios-arrow-back' />
    </Button>
      <Title>List of Beacons</Title>
    </Header>
    <View style={styles.container}> 
        <Text style={styles.headline}> 
          All beacons in the area 
        </Text> 
         <ListView 
           dataSource={ dataSource } 
           enableEmptySections={ true } 
           renderRow={(rowData) => this.renderRow(rowData)} 
         /> 
    </View>
</Container>
    );
  }
  renderRow(rowData) {
    return (
      <View style={styles.row}>
        <Text style={styles.smallText}>
          UUID: {rowData.uuid ? rowData.uuid  : 'NA'}
        </Text>
        <Text style={styles.smallText}>
          Major: {rowData.major ? rowData.major : 'NA'}
        </Text>
        <Text style={styles.smallText}>
          Minor: {rowData.minor ? rowData.minor : 'NA'}
        </Text>
        <Text>
          RSSI: {rowData.rssi ? rowData.rssi : 'NA'}
        </Text>
        <Text>
          Proximity: {rowData.proximity ? rowData.proximity : 'NA'}
        </Text>
        <Text>
          Distance: {rowData.accuracy ? rowData.accuracy.toFixed(2) : 'NA'}m
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

