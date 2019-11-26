import React from "react";
import { View, StatusBar, ActivityIndicator, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/actions";

class AuthLoading extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");

    this.props.setCurrentUser(this.props.users[+userToken]);
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
  users: state.main.users
});

const mapDispatchToProps = { setCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
