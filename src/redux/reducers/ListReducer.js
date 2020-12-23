import axios from 'axios';

const initialState = {
  lists: [],
}

export const GET_LISTS = 'GET_LISTS';

export const getLists = (_id) => {
  return (dispatch) => {
    return axios
      .get(`/api/lists/${_id}`)
      .then(({ data }) => {
        dispatch({
          type: GET_LISTS,
          payload: data
        })
      })
  }
}

export default (state=initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case GET_LISTS:
      return {
        ...state,
        lists: payload
      }
    default: return state;
  }
}