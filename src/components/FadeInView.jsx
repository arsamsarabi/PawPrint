import React, { useState, useEffect } from "react";
import { Animated } from "react-native";

export const FadeInView = ({ style, children }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...style,
        opacity: fadeAnim
      }}
    >
      {children}
    </Animated.View>
  );
};
