import React from "react";
import { styles, iconStyles } from "./styles";
import { View, Pressable, Linking } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Icon from "react-native-vector-icons/FontAwesome";

export function GitHubLinkIcon() {
  const handleGithubPress = () => {
    const githubURL = "https://github.com/leoo1992";
    Linking.openURL(githubURL);
  };

  return (
    <Pressable
      onPress={handleGithubPress}
      style={styles.buttonGitHub}
      accessible={true}
      role="button"
    >
      <View style={styles.buttonContainer}>
      <Icon name="github" {...iconStyles} />
      </View>
    </Pressable>
  );
}
