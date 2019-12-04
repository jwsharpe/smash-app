import React, { Component } from "react";
import { Text, View, Image, FlatList } from "react-native";
import { connect } from "react-redux";
import styles from "../../assets/styles";
import MatchItem from "../../components/MatchItem";
import { Button } from "react-native-elements";

export class Profile extends Component {
  render() {
    const { id } = this.props.navigation.state.params;
    const user = this.props.users.filter(user => user.id === +id)[0];

    return (
      <View style={{ ...styles.profileContainer }}>
        <View style={{ ...styles.matchProfileItem, alignItems: "center" }}>
          <Image
            style={{ width: 80, height: 80, margin: 8, borderRadius: 50 }}
            source={{ uri: user.avatar }}
          />
          <Text style={styles.matchProfileTextWinner}>{user.player_tag}</Text>
          <Text style={styles.matchProfileScoreWinner}>{user.elo}</Text>
        </View>
        <Button
          title="CHALLENGE"
          onPress={() => this._fetchChallenge(user, id)}
        />
        <FlatList
          data={this._matchesFilter(id)}
          keyExtractor={item => "" + item.id}
          renderItem={({ item }) => <MatchItem id={item.id} profile={item} />}
        />
      </View>
    );
  }

  _matchesFilter = id => {
    return [...this.props.matches].filter(
      match => match.user_1_id === id || match.user_2_id === id
    );
  };

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
  matches: state.main.matches,
  currentUser: state.main.currentUser
});

export default connect(mapStateToProps)(Profile);
