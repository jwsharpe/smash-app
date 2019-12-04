import React from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";
import styles from "../assets/styles";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const MatchProfileItem = props => {
  const id = props.id;
  const match = props.matches.filter(match => match.id === +id)[0];

  const user1 = props.users.filter(user => user.id == match.user_1_id)[0];
  const user2 = props.users.filter(user => user.id == match.user_2_id)[0];

  const winnerLeft = match.user_1_score > match.user_2_score;

  return (
    <View style={{ ...styles.matchProfile }}>
      <TouchableNativeFeedback
        style={{ ...styles.matchProfileItem }}
        onPress={() => props.navigation.navigate("PROFILE", { id: user1.id })}
      >
        <Image
          style={{ width: 80, height: 80, margin: 8, borderRadius: 50 }}
          source={{ uri: user1.avatar }}
        />
        <Text
          style={
            winnerLeft
              ? { ...styles.matchProfileTextWinner }
              : { ...styles.matchProfileText }
          }
        >
          {user1.player_tag}
        </Text>
        <Text
          style={
            winnerLeft
              ? { ...styles.matchProfileScoreWinner }
              : { ...styles.matchProfileScore }
          }
        >
          {match.user_1_score}
        </Text>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        style={{ ...styles.matchProfileItem }}
        onPress={() => props.navigation.navigate("PROFILE", { id: user2.id })}
      >
        <Image
          style={{ width: 80, height: 80, margin: 8, borderRadius: 50 }}
          source={{ uri: user2.avatar }}
        />
        <Text
          style={
            !winnerLeft
              ? { ...styles.matchProfileTextWinner }
              : { ...styles.matchProfileText }
          }
        >
          {user2.player_tag}
        </Text>
        <Text
          style={
            !winnerLeft
              ? { ...styles.matchProfileScoreWinner }
              : { ...styles.matchProfileScore }
          }
        >
          {match.user_2_score}
        </Text>
      </TouchableNativeFeedback>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => ({
  users: state.main.users,
  matches: state.main.matches,
  currentUser: state.main.currentUser
});

export default withNavigation(connect(mapStateToProps)(MatchProfileItem));
