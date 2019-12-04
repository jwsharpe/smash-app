import React from "react";
import { View, StatusBar, ActivityIndicator, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { setUsers, setMatches, setCurrentUser } from "../../redux/actions";

class AuthLoading extends React.Component {
  componentDidMount() {
    fetch("http://10.0.2.2:3000/users")
      .then(response => response.json())
      .then(users => {
        this.props.setUsers(users);
        this._bootstrapAsync();
      });
  }
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    const cUser = this.props.users.filter(user => +userToken === user.id)[0];
    this.props.setCurrentUser(cUser);
    if (userToken) this.props.navigation.navigate("App");
    else {
      this.props.navigation.navigate("Auth");
    }
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.main.users,
  currentUser: state.main.currentUser,
  matches: state.main.matches
});

const mapDispatchToProps = { setUsers, setMatches, setCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
