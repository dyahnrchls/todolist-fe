// reducers.js
import { combineReducers } from "redux";
import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  ADD_TODOS_FAILURE,
  UPDATE_TODOS_REQUEST,
  UPDATE_TODOS_SUCCESS,
  UPDATE_TODOS_FAILURE,
  DELETE_TODOS_REQUEST,
  DELETE_TODOS_SUCCESS,
  DELETE_TODOS_FAILURE,
} from "./actions";

const initialState = {
  data: [],
  dataAddTodo: null,
  dataUpdateTodo: null,
  dataDeleteTodo: null,
  loading: false,
  loadingAddTodo: false,
  loadingUpdateTodo: false,
  loadingDeleteTodo: false,
  error: null,
  errorAddTodo: null,
  errorUpdateTodo: null,
  errorDeleteTodo: null
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_TODOS_REQUEST:
      return {
        ...state,
        dataAddTodo: null,
        loadingAddTodo: true,
        errorAddTodo: null,
      };
    case ADD_TODOS_SUCCESS:
      return {
        ...state,
        dataAddTodo: action.payload,
        loadingAddTodo: false,
      };
    case ADD_TODOS_FAILURE:
      return {
        ...state,
        loadingAddTodo: false,
        errorAddTodo: action.payload,
      };
    case UPDATE_TODOS_REQUEST:
      return {
        ...state,
        dataUpdateTodo: null,
        loadingUpdateTodo: true,
        errorUpdateTodo: null,
      };
    case UPDATE_TODOS_SUCCESS:
      return {
        ...state,
        dataUpdateTodo: action.payload,
        loadingUpdateTodo: false,
      };
    case UPDATE_TODOS_FAILURE:
      return {
        ...state,
        loadingUpdateTodo: false,
        errorUpdateTodo: action.payload,
      };
    case DELETE_TODOS_REQUEST:
      return {
        ...state,
        dataDeleteTodo: null,
        loadingDeleteTodo: true,
        errorDeleteTodo: null,
      };
    case DELETE_TODOS_SUCCESS:
      return {
        ...state,
        dataDeleteTodo: action.payload,
        loadingDeleteTodo: false,
      };
    case DELETE_TODOS_FAILURE:
      return {
        ...state,
        loadingDeleteTodo: false,
        errorDeleteTodo: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
