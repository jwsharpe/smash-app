import React from "react";
import { Text, Image, View } from "react-native";
import { withNavigation } from "react-navigation";
import styles from "../assets/styles";

import { Icon } from "react-native-elements";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
const ProfileItem = props => {
  return (
    <TouchableNativeFeedback
      style={styles.searchProfile}
      onPress={() => props.navigation.navigate("PROFILE", { id: props.id })}
    >
      <View style={styles.searchProfileContent}>
        <Image
          style={{ width: 50, height: 50, margin: 8, borderRadius: 50 }}
          source={{ uri: props.profile.avatar }}
        />
        <View>
          <Text style={{ ...styles.searchProfileContentText }}>
            {props.profile.player_tag}
          </Text>
          <Text
            style={{
              ...styles.searchProfileContentText,
              color: "#757575",
              fontSize: 13
            }}
          >
            rating {props.profile.elo}
          </Text>
        </View>
      </View>
      <View style={styles.searchProfileActions}>
        <Icon
          name="keyboard-arrow-right"
          type="material"
          size={18}
          color="#757575"
        />
      </View>
    </TouchableNativeFeedback>
  );
};

export default withNavigation(ProfileItem);
