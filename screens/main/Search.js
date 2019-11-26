import React, { Component } from "react";
import styles from "../../assets/styles";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import ProfileItem from "../../components/ProfileItem";

export class Search extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={this.props.users}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ProfileItem id={item.id} profile={item} style={styles.item} />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.main.users
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
