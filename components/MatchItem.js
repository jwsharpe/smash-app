import React from "react";
import { Text, Image, View } from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import styles from "../assets/styles";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

function dateParse(dateStr) {
  const year = dateStr.slice(0, 4);
  const month = dateStr.slice(5, 7);
  const day = dateStr.slice(8, 10);
  const hour = dateStr.slice(11, 13);
  const minute = dateStr.slice(17, 19);
  return { year, month, day, hour, minute };
}

const MatchItem = props => {
  const { user_1_id, user_2_id } = props.profile;
  const user1 = props.users.filter(user => user_1_id === user.id)[0];
  const user2 = props.users.filter(user => user_2_id === user.id)[0];
  const winnerLeft = props.profile.user_1_score > props.profile.user_2_score;

  const date = dateParse(props.profile.created_at);

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
      <Text style={styles.date}>
        {date.year}-{date.month}-{date.day}
        {"  "}
        {date.hour}:{date.minute}
      </Text>
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
