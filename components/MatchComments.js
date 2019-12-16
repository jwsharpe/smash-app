import React from "react";
import {
  Text,
  View,
  FlatList,
  TextInput,
  Keyboard,
  DeviceEventEmitter,
  Dimensions
} from "react-native";
import styles from "../assets/styles";
import Comment from "./CommentItem";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";

class MatchComments extends React.Component {
  state = {
    comments: [],
    value: "",
    claps: 0,
    messageBottom: 0
  };

  _onChangeText = text => {
    this.setState({ value: text });
  };

  _onSubmit = () => {
    if (this.state.value.length) {
      this._addComment(this.state.value);
      this.setState({ value: "" });
    }
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

  _keyboardDidShow = e => {
    this.setState({ messageBottom: e.endCoordinates.height });
  };

  _keyboardDidHide = () => {
    this.setState({ messageBottom: 0 });
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

    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );

    this.interval = setInterval(e => {
      fetch(`http://10.0.2.2:3000/matches/${id}`)
        .then(e => e.json())
        .then(match => {
          this._setComments(match.messages);
          this._setClaps(match.claps);
        });
    }, 500);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments.length !== this.state.comments.length) {
      setTimeout(e => {
        if (this.flatList) this.flatList.scrollToEnd();
      }, 100);
    }
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
    clearInterval(this.interval);
  }

  render() {
    return (
      <View style={styles.comments}>
        <Text style={styles.commentTitleText}>Comments</Text>

        <FlatList
          data={this.state.comments}
          ref={ref => (this.flatList = ref)}
          renderItem={comment => (
            <Comment
              isLast={this.state.comments.length - 1 === comment.index}
              setComments={this._setComments}
              {...comment}
            />
          )}
          keyExtractor={comment => "" + comment.id}
        />

        <View
          style={{ ...styles.commentMessage, bottom: this.state.messageBottom }}
        >
          <TextInput
            style={styles.commentMessageText}
            onChangeText={this._onChangeText}
            onSubmitEditing={this._onSubmit}
            value={this.state.value}
            placeholder={"Message"}
          />
          <Icon
            onPress={this._onSubmit}
            name="send"
            type="material"
            size={16}
            color={this.state.value.length ? "#448AFF" : "#CFD8DC"}
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
