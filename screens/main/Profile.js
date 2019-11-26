import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";

export class Profile extends Component {
  render() {
    const { id } = this.props.navigation.state.params;
    const user = this.props.users[+id];

    return (
      <View>
        <Text>
          profile {user.player_tag} - elo {user.elo}
        </Text>
        <Button
          title="challenge"
          onPress={() => this._fetchChallenge(user, id)}
        />
      </View>
    );
  }

  _fetchChallenge = (user, id) => {
    const mainBody = {
      user_1_id: this.props.currentUser.id,
      user_2_id: user.id
    };
    const content = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(mainBody)
    };
    fetch("http://10.0.2.2:3000/matches/challenge", content);
  };
}

const mapStateToProps = (state, ownProps) => ({
  users: state.main.users,
  currentUser: state.main.currentUser
});

export default connect(mapStateToProps)(Profile);
