import { createStackNavigator } from "react-navigation";
import HomeTab from "./HomeTab";
import SearchScreen from "../../screens/main/Search";
import ProfileScreen from "../../screens/main/Profile";
import React from "react";
import { connect } from "react-redux";
import { setMatches, setUsers } from "../../redux/actions";
const MainStack = createStackNavigator(
  {
    HOME: HomeTab,
    SEARCH: SearchScreen,
    PROFILE: ProfileScreen
  },

  {
    defaultNavigationOptions: {
      headerTitle: `SmashLO`,
      headerStyle: {
        backgroundColor: "#607D8B",
        elevation: 0,
        height: 12,
        paddingBottom: 20
      },
      headerTitleStyle: {
        fontSize: 14,
        color: "white",
        fontWeight: "bold"
      }
    }
  }
);

class mainStack extends React.Component {
  static router = MainStack.router;

  componentDidMount() {
    fetch("http://10.0.2.2:3000/matches", null)
      .then(response => response.json())
      .then(this.props.setMatches);

    fetch("http://10.0.2.2:3000/users", null)
      .then(response => response.json())
      .then(this.props.setUsers);
  }
  render() {
    return <MainStack navigation={this.props.navigation} />;
  }
}

const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = { setMatches, setUsers };

export default connect(mapStateToProps, mapDispatchToProps)(mainStack);
