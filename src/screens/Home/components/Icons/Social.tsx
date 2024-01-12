import React from "react";
import { View, TouchableOpacity, StyleSheet, Linking } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Social() {
  const handleGithubPress = () => {
    const githubURL = "https://github.com/leoo1992";
    Linking.openURL(githubURL);
  };

  return (
    <TouchableOpacity onPress={handleGithubPress}>
      <View style={styles.buttonContainer}>
        <FontAwesomeIcon icon={faGithub} size={30} color="#000" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    width: 40,
    height: 40,
    padding: 5,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
