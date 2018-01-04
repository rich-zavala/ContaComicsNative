import React from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Styles } from '../styles/styles';

import { Divider } from 'react-native-elements'

const ST = Styles.sidebar;

export class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    };
  }

  render() {
    return (
      <ScrollView style={ST.container}>
        <View style={ST.header}>
          <Text style={ST.logo} ><FontAwesome name="comment" size={ST.logo.fontSize} /> ContaComics 2018</Text>
        </View>
        <TouchableHighlight underlayColor="black" onPress={this.handlePress}>
          <View style={ST.btnContainer}>
            <View style={ST.btnIconContainer}><FontAwesome name="plus" style={ST.btnIcon} /></View>
            <Text style={ST.btnTxt} >New record</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="black" onPress={this.handlePress}>
          <View style={ST.btnContainer}>
            <View style={ST.btnIconContainer}><FontAwesome name="list" style={ST.btnIcon} /></View>
            <Text style={ST.btnTxt} >List titles</Text>
          </View>
        </TouchableHighlight>

        <Divider style={ST.divider} />

        <Text style={ST.subtitle} >Years</Text>

        <TouchableHighlight underlayColor="black" onPress={this.handlePress}>
          <View style={ST.yearConainer}>
            <Text style={ST.btnTxt} >2017</Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    );
  }

  handlePress() {
    // this.setState({ toggled: !this.state.toggled })
  }
}