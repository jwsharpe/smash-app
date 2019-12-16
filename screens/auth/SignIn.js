import React from "react";
import { View, Button, AsyncStorage } from "react-native";
import t from "tcomb-form-native";
import { connect } from "react-redux";
import styles from "../../assets/styles";

const Form = t.form.Form;

t.form.Form.stylesheet.textbox.normal.color = "#FFF";

const User = t.struct({
  email: t.String,
  password: t.String
});

const options = {
  auto: "placeholders",
  fields: {
    email: {
      error: "Enter a valid email"
    },
    password: {
      error: "Please input a password",
      password: true,
      secureTextEntry: true
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
          <Button title="sign in" onPress={this._signInAsync} />
        </View>
      </View>
    );
  }

  _signInAsync = async () => {
    const value = this._form.getValue(); // use that ref to get the form value

    if (value) {
      item = this.props.users.find(item => item.email === value.email);
      if (item) await AsyncStorage.setItem("userToken", "" + item.id);
      this.props.navigation.navigate("AuthLoading");
    }
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.main.users
  };
};

export default connect(mapStateToProps)(SignIn);
