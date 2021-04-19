import Axios from "axios";
export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_LOADING = "USER_REGISTER_LOADING";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

const register = (user) => {
  return (dispatch) => {
    dispatch(Loading());
    const { data } = Axios.post(
      "https://6079b473460a6600174fc2cb.mockapi.io/api/getotp/",
      user
    )
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          throw res.error;
        }
        dispatch(Success(res));
        return res;
      });
  };
};

const Success = (number) => {
  return {
    type: USER_REGISTER_SUCCESS,
    payload: number,
  };
};

const Loading = () => {
  return {
    type: USER_REGISTER_LOADING,
  };
};
function failure(error) {
  return { type: USER_REGISTER_FAIL, error };
}

export { register };
