module.exports = {
  preset: "react-native",
  transformIgnorePatterns: [
    "node_modules/(?!(react-native" +
      "|react-navigation-tabs" +
      "|react-native-splash-screen" +
      "|react-native-screens" +
      "|react-native-reanimated" +
      "|react-native-vector-icons" +
      "|expo-image-picker" +
      "|@unimodules" +
      "|unimodules-permissions-interface" +
      "|expo-constants" +
      "|expo-permissions" +
      "|@expo" +
      "|react-native-vector-icons" +
      "|expo-font" +
      "|expo-asset" +
      "|expo-file-system" +
      ")/)"
  ]
};
