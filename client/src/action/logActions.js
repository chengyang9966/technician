import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOGS,
  DELETE_LOGS,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS,
  BaseUrl,
} from './type';

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`${BaseUrl}/logs`);
    const Data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: Data.data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.error,
    });
  }
};
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`${BaseUrl}/logs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.error,
    });
  }
};
export const deleteLogs = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`${BaseUrl}/logs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_LOGS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response,
    });
  }
};
export const addLogs = (logs) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`${BaseUrl}/logs`, {
      method: 'POST',
      body: JSON.stringify(logs),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOGS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response,
    });
  }
};
//Set Current
export const SetCurrent = (Log) => {
  return {
    type: SET_CURRENT,
    payload: Log,
  };
};
//Clear Current
export const ClearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
export const updateLogs = (logs) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`${BaseUrl}/logs/${logs._id}`, {
      method: 'PUT',
      body: JSON.stringify(logs),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.error,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
