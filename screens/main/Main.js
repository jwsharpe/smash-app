import React, { Component } from "react";
import {
  FlatList,
  Text,
  Alert,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

import styles from "../../assets/styles";
class ThreadContainer extends Component {
  render() {
    console.log(this.props.hi);
    return (
      <>
        <TouchableOpacity style={styles.tabButton} onPress={this._signOutAsync}>
          <Text style={styles.tabButtonText}>SIGN OUT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={this._showModal}>
          <Text style={styles.tabButtonText}>OPEN DIALOG</Text>
        </TouchableOpacity>

        <FlatList
          data={this.props.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.title}</Text>
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

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("AuthLoading");
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.main.data,
    currentUser: state.main.currentUser
  };
};

export default connect(mapStateToProps)(ThreadContainer);
