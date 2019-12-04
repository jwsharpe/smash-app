import React from "react";
import { Text, View, FlatList, TextInput, Button } from "react-native";
import styles from "../assets/styles";
import Comment from "./CommentItem";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";

class MatchComments extends React.Component {
  state = {
    comments: [],
    value: "",
    claps: 0
  };

  _onChangeText = text => {
    this.setState({ value: text });
  };

  _onSubmit = () => {
    this._addComment(this.state.value);
    this.setState({ value: "" });
  };

  _addComment = message => {
    const id = this.props.id;
    const mainBody = {
      match_id: id,
      user_id: this.props.currentUser.id,
      content: message
    };
    const content = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(mainBody)
    };
    fetch("http://10.0.2.2:3000/messages/", content)
      .then(e => e.json())
      .then(match => this._setComments(match.messages));
  };

  _setComments = messages => {
    this.setState({
      comments: messages
    });
  };

  _addClap = () => {
    const id = this.props.id;
    fetch(`http://10.0.2.2:3000/matches/${id}/clap`)
      .then(e => e.json())
      .then(this._setClaps);
  };

  _setClaps = claps => {
    this.setState({ claps: claps });
  };

  componentDidMount() {
    const id = this.props.id;

    fetch(`http://10.0.2.2:3000/matches/${id}`)
      .then(e => e.json())
      .then(match => {
        this._setComments(match.messages);
        this._setClaps(match.claps);
      });
  }

  render() {
    return (
      <View style={styles.comments}>
        <Text style={styles.commentTitleText}>Comments</Text>
        <FlatList
          data={this.state.comments}
          renderItem={comment => (
            <Comment setComments={this._setComments} {...comment} />
          )}
          keyExtractor={comment => "" + comment.id}
        />
        <View style={styles.commentMessage}>
          <TextInput
            style={styles.commentMessageText}
            onChangeText={this._onChangeText}
            value={this.state.value}
            placeholder={"Message"}
          />
          <Icon
            onPress={this._onSubmit}
            name="send"
            type="material"
            size={16}
            color="#CFD8DC"
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  users: state.main.users,
  matches: state.main.matches,
  currentUser: state.main.currentUser
});

export default connect(mapStateToProps)(MatchComments);
