import {FETCH_USER} from "../actions/types";

export default function(state={},action){

  switch(action.type){
    case FETCH_USER:
      return action.payload || false;//TODO new state
    default:
      return state;
  }
}
