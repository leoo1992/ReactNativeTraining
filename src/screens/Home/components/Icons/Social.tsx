import React from "react";
import { styles, iconStyles } from "./styles";
import { View, TouchableOpacity, Linking } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Social() {
  const handleGithubPress = () => {
    const githubURL = "https://github.com/leoo1992";
    Linking.openURL(githubURL);
  };

  return (
    <TouchableOpacity onPress={handleGithubPress} style={styles.buttonGitHub}>
      <View style={styles.buttonContainer}>
        <FontAwesomeIcon icon={faGithub} {...iconStyles} />
      </View>
    </TouchableOpacity>
  );
}
