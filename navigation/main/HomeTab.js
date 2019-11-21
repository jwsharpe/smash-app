import React from "react";
import { AsyncStorage, TouchableOpacity, Text, View } from "react-native";
import ThreadContainer from "../../screens/main/Main";
import styles from "../../assets/styles";
import { createMaterialTopTabNavigator } from "react-navigation";

const PublicScreen = () => <ThreadContainer hi={"public"} />;
const FriendsScreen = () => <ThreadContainer hi={"friends"} />;
const MeScreen = () => <ThreadContainer hi={"me"} />;

TopTabNavigator = createMaterialTopTabNavigator(
  {
    PUBLIC: PublicScreen,
    FRIENDS: FriendsScreen,
    ME: MeScreen
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
        textAlign: "center",
        fontWeight: "bold"
      },
      style: {
        backgroundColor: "#607D8B"
      }
    }
  }
);

export default class Home extends React.Component {
  static router = TopTabNavigator.router;

  render() {
    return (
      <View style={styles.mainContainer}>
        <TopTabNavigator
          navigateToProfile={() => this._navigateToProfile}
          navigation={this.props.navigation}
        />
        <TouchableOpacity onPress={this._navigateToSearch} style={styles.fab}>
          <Text style={styles.fabText}>S</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this._signOutAsync}
          style={{ ...styles.fab, left: 16 }}
        >
          <Text style={styles.fabText}>S.O.</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("AuthLoading");
  };

  _navigateToSearch = () => {
    this.props.navigation.navigate("SEARCH");
  };

  _navigateToProfile = () => {
    this.props.navigation.navigate("PROFILE");
  };
}
