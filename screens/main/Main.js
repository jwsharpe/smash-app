import React, { Component } from "react";
import { FlatList, Text, Alert, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import ProfileItem from "../../components/ProfileItem";
import { withNavigation } from "react-navigation";

import styles from "../../assets/styles";
class ThreadContainer extends Component {
  render() {
    return (
      <>
        <TouchableOpacity style={styles.tabButton} onPress={this._showModal}>
          <Text style={styles.tabButtonText}>OPEN DIALOG</Text>
        </TouchableOpacity>

        <FlatList
          data={this.props.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ProfileItem id={index} style={styles.item} />
          )}
        />
      </>
    );
  }

  _showModal = () => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.main.data,
    currentUser: state.main.currentUser
  };
};

export default withNavigation(connect(mapStateToProps)(ThreadContainer));
