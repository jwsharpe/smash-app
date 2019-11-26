import React from "react";
import { Text } from "react-native";
import { withNavigation } from "react-navigation";

const ProfileItem = props => {
  return (
    <Text
      onPress={() => props.navigation.navigate("PROFILE", { id: props.id })}
      style={props.style}
    >
      {props.profile.player_tag} - elo: {props.profile.elo}
    </Text>
  );
};

export default withNavigation(ProfileItem);
