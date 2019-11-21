import React, { Component } from "react";
import { Text, View } from "react-native";

export class Profile extends Component {
  render() {
    const { id } = this.props.navigation.state.params;
    return (
      <View>
        <Text> profile {id}</Text>
      </View>
    );
  }
}

export default Profile;
