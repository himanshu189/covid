import {
  FETCH_USER_FAILURE,
  FETCH_USER_FAILURE2,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_SUCCESS2,
} from "./types";
import axios from "axios";
export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
export const fetchUserSuccess2 = (users2) => {
  return {
    type: FETCH_USER_SUCCESS2,
    payload: users2,
  };
};
export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};
export const fetchUserFailure2 = (error) => {
  return {
    type: FETCH_USER_FAILURE2,
    payload: error,
  };
};
export const fetchUsers = () => {
  
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get(
        `https:/covid19.mathdro.id/api/`
      )
      .then((response) => {
        console.log("console",response.data);
        const users = response.data;
        {users&&dispatch(fetchUserSuccess(users)) }
        ;
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};
export const fetchUsers2 = (countryName) => {
  
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get(
        `https:/covid19.mathdro.id/api/countries/${countryName}`
      )
      .then((response) => {
        console.log("console",response.data);
        const users2 = response.data;
        {users2&&dispatch(fetchUserSuccess2(users2)) }
        ;
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUserFailure2(errorMsg));
      });
  };
};