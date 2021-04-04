import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
  BaseUrl,
} from './type';

export const GetTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`${BaseUrl}/techs`);
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response,
    });
  }
};
export const addTechs = (tech) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`${BaseUrl}/techs`, {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response,
    });
  }
};
export const deleteTechs = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`${BaseUrl}/techs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
