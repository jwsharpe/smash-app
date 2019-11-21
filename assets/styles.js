import { StyleSheet, Platform, StatusBar } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },
  item: {
    backgroundColor: "#FFFFFF",
    color: "#212121",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    height: 80
  },

  fab: {
    position: "absolute",
    width: 56,
    elevation: 5,
    height: 56,
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "black",
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
    flex: 1
  },
  tabButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});
export default styles;
