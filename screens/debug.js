import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { connect } from "react-redux";
import styles from "../assets/styles";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const Debug = props => {
  const { user_1_id, user_2_id } = { user_1_id: 0, user_2_id: 1 };
  const id = "challengers";
  const user1 = props.users[user_1_id];
  const user2 = props.users[user_2_id];
  return (
    <View style={{ ...styles.profileContainer, backgroundColor: "#607D8B" }}>
      {id === "challenger" ? (
        <View style={styles.matchProfileContainer}>
          <View style={styles.matchChallengeContainer}>
            <TouchableNativeFeedback
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Debug);
