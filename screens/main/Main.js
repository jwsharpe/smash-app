import React, { Component } from "react";
import { FlatList, View } from "react-native";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import MatchItem from "../../components/MatchItem";

class ThreadContainer extends Component {
  render() {
    return (
      <FlatList
        data={this._matchesFilter(this.props.id)}
        keyExtractor={item => "" + item.id}
        renderItem={({ item }) => <MatchItem id={item.id} profile={item} />}
        ListFooterComponent={<View style={{ height: 84 }}></View>}
      />
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
