import React, { Component } from "react";
import { Button, FlatList, Text, Alert, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import styles from "../../assets/styles";
import MatchItem from "../../components/MatchItem";

class ThreadContainer extends Component {
  render() {
    return (
      <>
        <FlatList
          data={this._matchesFilter(this.props.id)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <MatchItem id={item.id} profile={item} style={styles.item} />
          )}
        />
      </>
    );
  }

  _matchesFilter = id => {
    if (id === "public") return this.props.matches;
    if (id === "me") {
      return [...this.props.matches].filter(
        match =>
          match.user_1_id === this.props.currentUser.id ||
          match.user_2_id === this.props.currentUser.id
      );
    }
  };
}

const mapStateToProps = state => {
  return {
    users: state.main.users,
    matches: state.main.matches,
    currentUser: state.main.currentUser
  };
};

export default withNavigation(connect(mapStateToProps)(ThreadContainer));
