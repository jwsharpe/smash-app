import React from "react";
import { Text } from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

const ProfileItem = props => {
  const user1 = props.users[props.profile.user_1_id];
  const user2 = props.users[props.profile.user_2_id];
  return (
    <Text
      //   onPress={() => props.navigation.navigate("PROFILE", { id: props.id })}
      style={props.style}
    >
      {props.profile.user_1_score} {user1.player_tag} - {user2.player_tag}{" "}
      {props.profile.user_2_score}
    </Text>
  );
};

const mapStateToProps = (state, ownProps) => ({
  users: state.main.users
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(ProfileItem));
