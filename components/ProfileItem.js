import React from "react";
import { View, Text } from "react-native";
import { withNavigation } from "react-navigation";

const ProfileItem = props => {
  return (
    <Text
      onPress={() => props.navigation.navigate("PROFILE", { id: props.id })}
      style={props.style}
    >
      go to profile
    </Text>
  );
};

export default withNavigation(ProfileItem);
