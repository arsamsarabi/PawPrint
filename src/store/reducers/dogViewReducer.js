import { OPEN_DOG_MODAL, CLOSE_DOG_MODAL } from "../actionTypes";

const initialState = {
  visibility: false,
  dog: null
};

const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_DOG_MODAL:
      return {
        visibility: true,
        dog: payload
      };
    case CLOSE_DOG_MODAL:
      return {
        ...initialState
      };
    default:
      return { ...state };
  }
};

export default formReducer;
