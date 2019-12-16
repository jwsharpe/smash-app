import { createAppContainer, createSwitchNavigator } from "react-navigation";
import React from "react";
import ChallengeScreen from "../../screens/challenge/Challenge";
import MainStack from "../main/MainStack";
import { connect } from "react-redux";
import { ActionCable } from "react-actioncable-provider";
import { Alert } from "react-native";

const AppSwitch = createAppContainer(
  createSwitchNavigator(
    {
      Main: MainStack,
      Challenge: ChallengeScreen
    },
    { initialRouteName: "Main" }
  )
);

class globalWrapperMainStack extends React.Component {
  static router = AppSwitch.router;

  render() {
    return (
      <>
        <ActionCable
          key={this.props.currentUser.id}
          channel={{
            channel: "GlobalRoomChannel",
            id: this.props.currentUser.id
          }}
          onReceived={this._onReceived}
        />
        <AppSwitch navigation={this.props.navigation} />
      </>
    );
  }

  _onReceived = data => {
    if (data.type === "CHALLENGE") this._showModal(data);
    if (data.type === "ACCEPTED")
      this.props.navigation.navigate("Challenge", {
        id: "challenge",
        message: data.message
      });
    if (data.type === "DECLINED") Alert.alert("declined");
    if (data.type === "WINNER1") Alert.alert("winner 1");
    if (data.type === "WINNER2") Alert.alert("winner 2");
    if (data.type === "RESULT") this.props.navigation.navigate("Main");
  };

  _showModal = data => {
    const { user_1_id } = data.message;
    const challenger = this.props.users.filter(
      user => user.id === user_1_id
    )[0];
    Alert.alert(
      "Incoming Challenge!",
      challenger.player_tag + " challenges you!",
      [
        {
          text: "Cancel",
          onPress: () => this._rejectChallenge(data),
          style: "cancel"
        },
        { text: "Accept", onPress: () => this._acceptChallenge(data) }
      ],
      { cancelable: false }
    );
  };

  _acceptChallenge = data => {
    const mainBody = {
      match: data.message
    };
    const content = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(mainBody)
    };
    fetch("http://10.0.2.2:3000/matches/accept", content);
    this.props.navigation.navigate("Challenge", {
      id: "challenger",
      message: data.message
    });
  };
  _rejectChallenge = data => {
    const mainBody = {
      user_2_id: this.props.currentUser.id
    };
    const content = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(mainBody)
    };
    fetch("http://10.0.2.2:3000/matches/reject", content);
  };
}

const mapStateToProps = state => ({
  currentUser: state.main.currentUser,
  users: state.main.users
});

export default connect(mapStateToProps)(globalWrapperMainStack);
