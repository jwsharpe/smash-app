import React from "react";
import {
  AsyncStorage,
  TouchableOpacity,
  Button,
  Text,
  View
} from "react-native";
import { Icon } from "react-native-elements";
import ThreadContainer from "../../screens/main/Main";
import styles from "../../assets/styles";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { connect } from "react-redux";
import { setUsers, setMatches, setCurrentUser } from "../../redux/actions";

const PublicScreen = () => <ThreadContainer id="public" />;
// const FriendsScreen = () => <ThreadContainer hi={"friends"} />;
const MeScreen = () => <ThreadContainer id="me" />;

TopTabNavigator = createMaterialTopTabNavigator(
  {
    PUBLIC: PublicScreen,
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

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Text
          style={{
            fontSize: 14,
            color: "white",
            paddingRight: 16,
            fontWeight: "bold",
            fontFamily: "sans-serif-light"
          }}
        >
          {navigation.getParam("cUser")}
        </Text>
      )
    };
  };

  componentDidMount() {
    fetch("http://10.0.2.2:3000/matches", null)
      .then(response => response.json())
      .then(this.props.setMatches);

    fetch("http://10.0.2.2:3000/users", null)
      .then(response => response.json())
      .then(this.props.setUsers);

    AsyncStorage.getItem("userToken").then(userToken => {
      const cUser = this.props.users.filter(user => +userToken === user.id)[0];
      this.props.setCurrentUser(cUser);

      this.props.navigation.setParams({
        cUser: "Welcome " + cUser.player_tag + "!"
      });
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <TopTabNavigator
          navigateToProfile={() => this._navigateToProfile}
          navigation={this.props.navigation}
        />
        <TouchableOpacity onPress={this._navigateToSearch} style={styles.fab}>
          <Icon name="search" type="material" color="white" />
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
  users: state.main.users,
  currentUser: state.main.currentUser,
  matches: state.main.matches
});

const mapDispatchToProps = { setUsers, setMatches, setCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
