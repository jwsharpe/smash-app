import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../../assets/styles";
import { TouchableOpacity } from "react-native-gesture-handler";

class Splash extends React.Component {
  static navigationOptions = {
    headerStyle: { elevation: 0, backgroundColor: "#607D8B" }
  };

  render() {
    return (
      <View style={styles.splash}>
        <View style={styles.splashLogo}>
          {/* <Image
            style={{ width: 200, height: 200, margin: 4, borderRadius: 50 }}
            source={{
              uri:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.bleacherreport.net%2Fimages%2Fteam_logos%2F328x328%2Fsuper_smash_bros.png&f=1&nofb=1"
            }}
          /> */}
          <Text style={styles.splashText}>smashlo</Text>
        </View>
        <View style={styles.splashActions}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SignIn")}
          >
            <Text style={styles.splashActionText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            title="Sign Up!"
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            <Text style={styles.splashActionText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Splash;
