import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Button } from "../../src/components";

describe("<Button />", () => {
  test("Should render a large button", () => {
    const component = renderer
      .create(
        <Button
          text="Large Button"
          icon="times"
          onClick={() => jest.fn()}
          mode="Large"
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
