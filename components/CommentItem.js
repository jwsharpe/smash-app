import React from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";
import styles from "../assets/styles";

import { Icon } from "react-native-elements";

function dateParse(dateStr) {
  const year = dateStr.slice(0, 4);
  const month = dateStr.slice(5, 7);
  const day = dateStr.slice(8, 10);
  const hour = dateStr.slice(11, 13);
  const minute = dateStr.slice(17, 19);
  return { year, month, day, hour, minute };
}

const CommentItem = props => {
  const id = props.item.user_id;
  const user = props.users.filter(user => user.id == +id)[0];
  const date = dateParse(props.item.created_at);
  return (
    <View
      style={{ ...styles.comment, borderBottomWidth: props.isLast ? 0 : 1 }}
    >
      <View style={styles.commentHeader}>
        <View style={styles.commentProfile}>
          <Image
            style={{ width: 25, height: 25, margin: 4, borderRadius: 50 }}
            source={{ uri: user.avatar }}
          />
          <Text>{user.player_tag}</Text>
        </View>
        <View style={styles.commentDelete}>
          {props.currentUser.id === id ? (
            <Icon
              onPress={() => _deleteComment(props)}
              name="close"
              type="material"
              size={12}
              color={styles.commentDelete.color}
            />
          ) : (
            <></>
          )}
        </View>
      </View>
      <Text style={{ marginLeft: 4 }}>{props.item.content}</Text>
      <Text style={styles.date}>
        {date.year}-{date.month}-{date.day}
        {"  "}
        {date.hour}:{date.minute}
      </Text>
    </View>
  );
};

_deleteComment = props => {
  const content = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };
  fetch(`http://10.0.2.2:3000/messages/${props.item.id}`, content)
    .then(e => e.json())
    .then(match => props.setComments(match.messages));
};

const mapStateToProps = (state, ownProps) => ({
  users: state.main.users,
  currentUser: state.main.currentUser
});

export default connect(mapStateToProps)(CommentItem);
