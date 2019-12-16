import { StyleSheet, Platform, StatusBar } from "react-native";

const Dimensions = require("Dimensions");
const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  splash: {
    height: height,
    backgroundColor: "#607D8B"
  },

  splashLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  splashText: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    fontFamily: "sans-serif"
  },

  splashActions: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  splashActionText: {
    color: "#efefef",

    margin: 2
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },

  itemProfile: {
    flexDirection: "row",
    flex: 9,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  itemProfileText: {
    fontSize: 13,
    margin: 8,
    color: "#757575",
    fontFamily: "Roboto",
    textAlignVertical: "center"
  },
  itemProfileTextWinner: {
    fontSize: 14,
    margin: 8,
    fontWeight: "bold",
    fontFamily: "Roboto",
    textAlignVertical: "center"
  },

  date: {
    position: "absolute",
    bottom: 0,
    right: 0,
    color: "#757575",
    fontSize: 10,
    marginRight: 2
  },
  commentTitleText: {
    fontSize: 12,
    color: "#757575",
    marginLeft: 8
  },

  itemProfileScore: {
    fontSize: 22,
    color: "#757575",

    fontFamily: "monospace",
    textAlignVertical: "center"
  },

  itemProfileScoreWinner: {
    fontSize: 22,
    fontWeight: "bold",

    fontFamily: "monospace",
    textAlignVertical: "center"
  },

  item: {
    backgroundColor: "#FFFFFF",
    color: "#212121",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  searchBar: {
    height: 35,
    margin: 16,
    borderRadius: 4,
    padding: 8,
    borderColor: "gray",
    backgroundColor: "white",
    borderWidth: 1
  },

  searchBarContainer: {
    backgroundColor: "#607D8B",
    elevation: 2
  },

  fab: {
    position: "absolute",
    width: 56,
    elevation: 5,
    height: 56,
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#448AFF",
    justifyContent: "center",
    right: 16,
    bottom: 16
  },
  fabText: { color: "white", fontWeight: "bold" },
  tabMenu: {
    flexDirection: "row"
  },
  tabButton: {
    backgroundColor: "#455A64",
    padding: 20,
    flex: 1,
    maxHeight: 10
  },
  tabButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  signOut: {
    position: "absolute",
    width: 86,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#448AFF",
    bottom: 30,
    borderRadius: 15,
    elevation: 2,
    right: 100
  },
  signOutText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center"
  },

  signInForm: {
    justifyContent: "center",
    margin: 80
  },

  matchContainer: {
    flex: 1
  },

  matchProfile: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
    marginBottom: 8
  },

  comments: {
    flex: 2,
    paddingBottom: 36
  },

  commentMessage: {
    position: "absolute",
    bottom: 0,
    height: 36,
    backgroundColor: "white",
    zIndex: 2,
    width: width,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BDBDBD"
  },

  commentMessageText: {
    width: width - 40,
    padding: 8
  },
  commentMessageSend: {
    width: 40
  },

  matchProfileItem: {
    alignItems: "center",
    borderColor: "#448aff",
    margin: 24,
    borderBottomWidth: 2
  },
  matchProfileText: {
    fontSize: 13,
    margin: 8,
    color: "#757575",
    fontFamily: "Roboto",
    textAlignVertical: "center"
  },
  matchProfileTextWinner: {
    fontSize: 14,
    margin: 8,
    fontWeight: "bold",
    fontFamily: "Roboto",
    textAlignVertical: "center"
  },

  matchProfileScore: {
    fontSize: 22,
    color: "#757575",
    fontFamily: "monospace",
    textAlignVertical: "center"
  },
  matchProfileScoreWinner: {
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "monospace",
    textAlignVertical: "center"
  },

  comment: {
    minHeight: 60,
    padding: 8,
    margin: 8,
    borderBottomColor: "#bdbdbd",
    borderBottomWidth: 1
  },
  commentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 8
  },
  commentProfile: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  commentDelete: {
    color: "#757575"
  },

  searchProfile: {
    color: "#212121",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  searchProfileContent: {
    flexDirection: "row",
    alignItems: "center",
    margin: 8
  },
  searchProfileContentText: {
    fontSize: 18,
    marginLeft: 4,
    marginBottom: 1,
    color: "#000"
  },
  searchProfileActions: {
    margin: 8
  },

  profileContainer: {
    flex: 1
  },

  matchProfileContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    marginTop: 8,
    marginBottom: 8
  },
  challengeText: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold"
  },
  matchChallengeContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexDirection: "row"
  },
  challengeProfileItem: {
    alignItems: "center",
    borderColor: "#607D8B",
    backgroundColor: "#fff",
    padding: 8,
    margin: 16,
    minWidth: 150,
    borderRadius: 4,
    borderBottomWidth: 2
  },
  challengedText: {
    color: "white",
    fontSize: 22,
    textAlignVertical: "center",
    textAlign: "center"
  }
});

export default styles;
