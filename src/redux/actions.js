// actions.js
import axios from "axios";
import { API_LOCAL } from "../environment";

export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST,
});

const fetchTodosSuccess = (data) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: data,
});

const fetchTodosFailure = (error) => ({
  type: FETCH_TODOS_FAILURE,
  payload: error,
});

export const fetchApiTodos = (params) => {
  return (dispatch) => {
    dispatch(fetchTodosRequest());
    axios
      .get(`${API_LOCAL}/todos`, { params })
      .then((response) => {
        console.log({ response });
        dispatch(fetchTodosSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchTodosFailure(error));
      });
  };
};

export const ADD_TODOS_REQUEST = "ADD_TODOS_REQUEST";
export const ADD_TODOS_SUCCESS = "ADD_TODOS_SUCCESS";
export const ADD_TODOS_FAILURE = "ADD_TODOS_FAILURE";

const addTodosRequest = () => ({
  type: ADD_TODOS_REQUEST,
});

const addTodosSuccess = (data) => ({
  type: ADD_TODOS_SUCCESS,
  payload: data,
});

const addTodosFailure = (error) => ({
  type: ADD_TODOS_FAILURE,
  payload: error,
});

export const addApiTodos = (body) => {
  return (dispatch) => {
    dispatch(addTodosRequest());
    axios
      .post(`${API_LOCAL}/todo`, body)
      .then((response) => {
        dispatch(addTodosSuccess(response.data));
      })
      .catch((error) => {
        dispatch(addTodosFailure(error));
      });
  };
};

export const UPDATE_TODOS_REQUEST = "UPDATE_TODOS_REQUEST";
export const UPDATE_TODOS_SUCCESS = "UPDATE_TODOS_SUCCESS";
export const UPDATE_TODOS_FAILURE = "UPDATE_TODOS_FAILURE";

const updateTodosRequest = () => ({
  type: UPDATE_TODOS_REQUEST,
});

const updateTodosSuccess = (data) => ({
  type: UPDATE_TODOS_SUCCESS,
  payload: data,
});

const updateTodosFailure = (error) => ({
  type: UPDATE_TODOS_FAILURE,
  payload: error,
});

export const updateApiTodos = (id, body) => {
  return (dispatch) => {
    dispatch(updateTodosRequest());
    axios
      .put(`${API_LOCAL}/todo/${id}`, body)
      .then((response) => {
        dispatch(updateTodosSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateTodosFailure(error));
      });
  };
};

export const DELETE_TODOS_REQUEST = "DELETE_TODOS_REQUEST";
export const DELETE_TODOS_SUCCESS = "DELETE_TODOS_SUCCESS";
export const DELETE_TODOS_FAILURE = "DELETE_TODOS_FAILURE";

const deleteTodosRequest = () => ({
  type: DELETE_TODOS_REQUEST,
});

const deleteTodosSuccess = (data) => ({
  type: DELETE_TODOS_SUCCESS,
  payload: data,
});

const deleteTodosFailure = (error) => ({
  type: DELETE_TODOS_FAILURE,
  payload: error,
});

export const deleteApiTodos = (id, body) => {
  return (dispatch) => {
    dispatch(deleteTodosRequest());
    axios
      .delete(`${API_LOCAL}/todo/${id}`)
      .then((response) => {
        dispatch(deleteTodosSuccess(response.data));
      })
      .catch((error) => {
        dispatch(deleteTodosFailure(error));
      });
  };
};
