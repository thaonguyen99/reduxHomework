import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "./actions";

const initialState = {
  number: "",
  error: null,
  isLoading: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        number: action.number,
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
