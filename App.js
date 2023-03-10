import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import GoogleSuggestions from "./Components/GooglSuggestion";
import FeedBackApp from "./Components/FeedBackAPP";
import TechCards from "./Components/techCard";
import UserDetails from "./Components/userDetails";

class App extends Component {
  render() {
    return (
      <View style={styles.appContainer}>
        {/* <TechCards /> */}
        <UserDetails />
        {/* <GoogleSuggestions /> */}
        {/* <FeedBackApp /> */}

        {/* <p>it included 4 apps, check needed once</p> */}
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    height: "100%",
    width: "100%",
  },
});
