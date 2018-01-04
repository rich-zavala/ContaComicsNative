import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  // ScrollView,
  SectionList,
  Button,
  // Switch,
  DrawerLayoutAndroid
} from 'react-native';

import { Header } from './containers/Header';
import { SideBar } from './containers/SideBar';

class DataSection {
  key;
  data = [];
  constructor(key) {
    this.key = key;
  }

  addData(record) {
    this.data.push(record);
  }
}

export default class App extends React.Component {
  sections = [];
  constructor(props) {
    super(props);

    let section;
    for (let i = 0; i < 10; i++) {
      if (i === 0 || i % 10 === 0) {
        let key = i.toString();
        section = new DataSection('Section #' + key);
        this.sections.push(section);
      }
      let record = {
        id: i,
        title: "Item " + i,
        price: 26,
        owned: true,
        date: '2017-10-23'
      }
      section.addData(record);
    }
  }

  render() {
    let renderItem = (item) => {
      return <Text style={styles.listItem}>{item.item.title}</Text>
    };

    let renderHeader = (headerItem) => {
      return <Text>{headerItem.section.key}</Text>;
    };

    return (
      <DrawerLayoutAndroid
        ref={'DRAWER'}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <SideBar />}>
        <View style={styles.container}>
          <Header showDrawer={this.showDrawer.bind(this)} />
          <SectionList
            style={styles.sectionList}
            renderItem={renderItem}
            renderSectionHeader={renderHeader}
            sections={this.sections}
            keyExtractor={item => item.id}
          />
        </View>
      </DrawerLayoutAndroid>
    );
  }

  showDrawer() {
    console.log("Showing Drawer!");
    this.refs['DRAWER'].openDrawer();
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: 'green',
    width: '100%',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  headerText: {
    color: 'white',
    fontSize: 16
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 24
  },
  sectionList: {
    width: "100%",
    backgroundColor: "#474645"
  },
  listItem: {
    // width: "100%",
    backgroundColor: '#8BC34A'
  }
});
