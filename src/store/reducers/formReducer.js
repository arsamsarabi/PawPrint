import {
  OPEN_FORM,
  UPDATE_FORM_VALUE,
  EXIT_FORM,
  OPEN_EDIT_FORM
} from "../actionTypes";

const initialState = {
  visibility: false,
  dog: {
    name: "",
    breed: "",
    age: null,
    image: null
  }
};

const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_FORM:
      return {
        ...state,
        visibility: true
      };
    case UPDATE_FORM_VALUE:
      return {
        ...state,
        dog: {
          ...state.dog,
          [payload.name]: payload.value
        }
      };
    case EXIT_FORM:
      return {
        ...initialState
      };
    case OPEN_EDIT_FORM:
      return {
        visibility: true,
        dog: payload
      };
    default:
      return { ...state };
  }
};

export default formReducer;
