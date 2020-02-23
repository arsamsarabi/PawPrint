jest.mock("react-native-vector-icons", () => ({
  FontAwesome: ({ name }) => {
    return name;
  }
}));
