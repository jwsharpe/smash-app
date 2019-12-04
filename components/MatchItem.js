import React from "react";
import { Text, Image, View } from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import styles from "../assets/styles";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const MatchItem = props => {
  const user1 = props.users[props.profile.user_1_id];
  const user2 = props.users[props.profile.user_2_id];
  const winnerLeft = props.profile.user_1_score > props.profile.user_2_score;
  return (
    <TouchableNativeFeedback
      style={styles.item}
      onPress={() => props.navigation.navigate("MATCH", { id: props.id })}
    >
      <View style={{ ...styles.itemProfile }}>
        <Text
          style={
            winnerLeft
              ? { ...styles.itemProfileTextWinner }
              : { ...styles.itemProfileText }
          }
        >
          {user1.player_tag}
        </Text>
        <Text
          style={
            winnerLeft
              ? { ...styles.itemProfileScoreWinner }
              : { ...styles.itemProfileScore }
          }
        >
          {props.profile.user_1_score}
        </Text>
        <Image
          style={{ width: 50, height: 50, margin: 8, borderRadius: 50 }}
          source={{ uri: user1.avatar }}
        />
      </View>

      <Text
        style={{
          flex: 1,
          textAlign: "center",
          fontFamily: "Roboto",
          color: "#757575"
        }}
      >
        vs
      </Text>

      <View style={{ ...styles.itemProfile, flexDirection: "row-reverse" }}>
        <Text
          style={
            !winnerLeft
              ? { ...styles.itemProfileTextWinner }
              : { ...styles.itemProfileText }
          }
        >
          {user2.player_tag}
        </Text>
        <Text
          style={
            !winnerLeft
              ? { ...styles.itemProfileScoreWinner }
              : { ...styles.itemProfileScore }
          }
        >
          {props.profile.user_2_score}
        </Text>
        <Image
          style={{ width: 50, height: 50, margin: 8, borderRadius: 50 }}
          source={{ uri: user2.avatar }}
        />
      </View>
    </TouchableNativeFeedback>
  );
};

const mapStateToProps = (state, ownProps) => ({
  users: state.main.users
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(MatchItem));
