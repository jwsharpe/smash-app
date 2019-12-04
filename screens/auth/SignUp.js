import React from "react";
import { View, Button, AsyncStorage, Picker } from "react-native";
import t from "tcomb-form-native";
import Characters from "../../assets/characters";
import { connect } from "react-redux";
import styles from "../../assets/styles";
import { setUsers, setMatches, setCurrentUser } from "../../redux/actions";

const Form = t.form.Form;

t.form.Form.stylesheet.pickerContainer.normal.color = "#ffffff";

const User = t.struct({
  email: t.String,
  player_tag: t.String,
  avatar: Characters
});

const options = {
  auto: "placeholders",
  fields: {
    player_tag: {
      error: "You need a player tag, or how will people find you? :("
    },
    email: {
      error:
        "Without an email address how are you going to reset your password when you forget it?"
    },
    avatar: {
      nullOption: { value: "", text: "Choose your main" }
    }
  }
};

class SignIn extends React.Component {
  static navigationOptions = {
    headerStyle: { elevation: 0, backgroundColor: "#607D8B" }
  };

  render() {
    return (
      <View style={styles.splash}>
        <View style={styles.signInForm}>
          <Form options={options} ref={c => (this._form = c)} type={User} />
          <Button title="sign up" onPress={this._signUpAsync} />
        </View>
      </View>
    );
  }

  _signUpAsync = async () => {
    const value = this._form.getValue(); // use that ref to get the form value
    if (value) {
      const mainBody = {
        user: value
      };
      const content = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(mainBody)
      };
      fetch("http://10.0.2.2:3000/users", content)
        .then(e => e.json())
        .then(json => {
          if (json)
            AsyncStorage.setItem("userToken", "" + json.id).then(e => {
              this.props.navigation.navigate("AuthLoading");
            });
        });
    }
  };
}

const mapStateToProps = state => ({
  users: state.main.users,
  currentUser: state.main.currentUser,
  matches: state.main.matches
});

const mapDispatchToProps = { setUsers, setMatches, setCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
