import {
  FETCH_USER_FAILURE,
  FETCH_USER_FAILURE2,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_SUCCESS2,
} from "./types";

const initialState = {
  loading: true,
  users: '',
  users2:'',
  error: "",  

};
export const userReducer = (state = initialState, action)=>{
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
      case FETCH_USER_SUCCESS2:
      return {
        ...state,
        loading: false,
        users2: action.payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,

        loading: false,
        users:"error",
        error: action.payload,
      };
      case FETCH_USER_FAILURE2:
      return {
        ...state,

        loading: false,
        users2:"error",
        error: action.payload,
      };
    default:
      return state;
  }
};