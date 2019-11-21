import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

export class Search extends Component {
  render() {
    return (
      <View>
        <Text> search pls </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
