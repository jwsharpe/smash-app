import React from "react";
import { AsyncStorage, TouchableOpacity, Text, View } from "react-native";
import ThreadContainer from "../../screens/main/Main";
import styles from "../../assets/styles";
import { createMaterialTopTabNavigator } from "react-navigation";
import { connect } from "react-redux";

const PublicScreen = () => <ThreadContainer id="public" />;
// const FriendsScreen = () => <ThreadContainer hi={"friends"} />;
const MeScreen = () => <ThreadContainer id="me" />;

TopTabNavigator = createMaterialTopTabNavigator(
  {
    PUBLIC: PublicScreen,
    // FRIENDS: FriendsScreen,
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

class Home extends React.Component {
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
          style={{ ...styles.signOut }}
        >
          <Text style={styles.signOutText}>Sign Out</Text>
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

const mapStateToProps = state => ({
  matches: state.main.matches
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
