import React from 'react';
import {
  Text,
  View,
  // Button
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Styles } from '../styles/styles';

const ST = Styles.header;

export class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log("Header.props", props);
  }

  render() {
    return (
      <View style={ST.container}>
        <View style={ST.btnMenuContainer}>
          <Icon.Button style={ST.btnMenu} name="bars" underlayColor={Colors.headerBtnUnder} onPress={this.props.showDrawer} />
        </View>

        <View style={ST.textContainer}>
          <Text style={ST.text}>Records list</Text>
        </View>

        <View style={ST.btnAddContainer}>
          <Icon.Button iconStyle={ST.btnAddIcon} backgroundColor={Colors.headerBtn} onPress={this.props.showDrawer} name="plus" underlayColor={Colors.headerBtnUnder}>
            <Text style={ST.btnAddText}>Add record</Text>
          </Icon.Button>
        </View>
      </View>
    );
  }
}