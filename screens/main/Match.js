import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Icon } from "react-native-elements";

import MatchComments from "../../components/MatchComments";
import MatchProfiles from "../../components/MatchProfileItem";
import styles from "../../assets/styles";

export class Match extends Component {
  render() {
    const { id } = this.props.navigation.state.params;
    return (
      <View style={styles.matchContainer}>
        <MatchProfiles id={id} />
        <MatchComments id={id} />
        {/* 
        <View>
           <Text>Claps: {this.state.claps}</Text>
          <TouchableOpacity onPress={this._navigateToSearch} style={styles.fab}>
            <Icon name="thumb-up" type="ion-icons" />
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  users: state.main.users,
  matches: state.main.matches,
  currentUser: state.main.currentUser
});

export default connect(mapStateToProps)(Match);
