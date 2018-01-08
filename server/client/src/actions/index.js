import axios from 'axios';
import {FETCH_USER} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

// export const authUser = () => async dispatch => {
//   const res = await axios.get('/auth/');
//   dispatch({ type: FETCH_USER, payload: res.data });
// };

//equals
// const fetchUser = () => {
//   return function(dispatch){
//      axios.get('/api/current_user')
//      .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
//   };
// };
