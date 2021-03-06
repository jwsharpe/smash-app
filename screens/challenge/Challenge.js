import React from "react";
import { View, Text, Image } from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import styles from "../../assets/styles";

const _fetchWinner = (user1Score, user2Score, user1Id, user2Id) => {
  const mainBody = {
    user_1_score: user1Score,
    user_2_score: user2Score,
    user_1_id: user1Id,
    user_2_id: user2Id
  };
  const content = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(mainBody)
  };
  fetch("http://10.0.2.2:3000/matches/results", content);
};

const Challenge = props => {
  const { user_1_id, user_2_id } = props.navigation.state.params.message;
  const { id } = props.navigation.state.params;

  const user1 = props.users.filter(user => user_1_id === user.id)[0];
  const user2 = props.users.filter(user => user_2_id === user.id)[0];
  return (
    <View style={{ ...styles.profileContainer, backgroundColor: "#607D8B" }}>
      {id === "challenger" ? (
        <View style={styles.matchProfileContainer}>
          <View style={styles.matchChallengeContainer}>
            <TouchableNativeFeedback
              onPress={() => _fetchWinner(1, 0, user_1_id, user_2_id)}
              style={{
                ...styles.challengeProfileItem,
                alignItems: "center"
              }}
            >
              <Image
                style={{
                  width: 80,
                  height: 80,
                  margin: 8,
                  borderRadius: 50
                }}
                source={{ uri: user1.avatar }}
              />
              <Text style={styles.matchProfileTextWinner}>
                {user1.player_tag}
              </Text>
              <Text style={styles.matchProfileScoreWinner}>{user1.elo}</Text>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              onPress={() => _fetchWinner(0, 1, user_1_id, user_2_id)}
              style={{
                ...styles.challengeProfileItem,
                alignItems: "center"
              }}
            >
              <Image
                style={{
                  width: 80,
                  height: 80,
                  margin: 8,
                  borderRadius: 50
                }}
                source={{ uri: user2.avatar }}
              />
              <Text style={styles.matchProfileTextWinner}>
                {user2.player_tag}
              </Text>
              <Text style={styles.matchProfileScoreWinner}>{user2.elo}</Text>
            </TouchableNativeFeedback>
          </View>
          <Text style={styles.challengeText}>Choose A Winner!</Text>
        </View>
      ) : (
        <View style={styles.matchProfileContainer}>
          <Text style={styles.challengedText}>Waiting on Winner...</Text>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state, ownProps) => ({
  users: state.main.users
});

export default connect(mapStateToProps)(withNavigation(Challenge));
