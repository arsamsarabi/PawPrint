import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { OPEN_FORM } from "../store/actionTypes";
import { List } from "./List";
import { Form } from "./Form";
import { Header, Button, FadeInView } from "../components";

export const LandingPage = () => {
  const dispatch = useDispatch();
  const handleOnAdd = () =>
    dispatch({
      type: OPEN_FORM
    });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <FadeInView>
          <Header />
          <Button
            text="Add a new dog"
            icon="plus"
            onClick={handleOnAdd}
            mode="Large"
          />
          <List />
          <Form />
        </FadeInView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 75,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollView: {
    alignSelf: "stretch"
  },
  header: {
    alignItems: "center"
  },
  logo: {
    height: 175,
    width: 175
  }
});
