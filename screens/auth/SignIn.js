import React from "react";
import { View, Button, AsyncStorage } from "react-native";
import t from "tcomb-form-native";
import { connect } from "react-redux";

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.maybe(t.String),
  password: t.maybe(t.String)
});

const options = {
  fields: {
    email: {
      error:
        "Without an email address how are you going to reset your password when you forget it?"
    },
    password: {
      error:
        "Choose something you use on a dozen other sites or something you won't remember"
    }
  }
};

class SignIn extends React.Component {
  static navigationOptions = {
    title: "Please sign in"
  };

  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this._signInAsync} />
        <Form options={options} ref={c => (this._form = c)} type={User} />
      </View>
    );
  }

  _signInAsync = async () => {
    const value = this._form.getValue(); // use that ref to get the form value
    // console.log("value: ", value);

    if (value) {
      item = this.props.logins.find(item => item.email === value.email);
      if (item) await AsyncStorage.setItem("userToken", item.id);
      this.props.navigation.navigate("AuthLoading");
    }
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    logins: state.main.logins
  };
};

export default connect(mapStateToProps)(SignIn);
