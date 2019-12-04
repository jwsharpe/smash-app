import React, { Component } from "react";
import styles from "../../assets/styles";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import ProfileItem from "../../components/ProfileItem";
import { TextInput } from "react-native-gesture-handler";

export class Search extends Component {
  state = {
    value: ""
  };

  _onChangeText = text => {
    this.setState({ value: text });
  };

  _filterUsers = () => {
    const users = [...this.props.users].filter(
      user => this.props.currentUser.id !== user.id
    );
    return [...users].filter(user => {
      return user.player_tag
        .toLowerCase()
        .includes(this.state.value.toLowerCase());
    });
  };

  render() {
    return (
      <View>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            onChangeText={this._onChangeText}
            value={this.state.value}
            placeholder={"Search by Player Tag"}
          />
        </View>
        <FlatList
          data={this._filterUsers()}
          keyExtractor={item => "" + item.id}
          renderItem={({ item }) => (
            <ProfileItem id={item.id} profile={item} style={styles.item} />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.main.users,
  currentUser: state.main.currentUser
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
