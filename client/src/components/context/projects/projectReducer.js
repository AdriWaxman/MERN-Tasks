import { FORM_PROJECT, SET_PROJECT } from '../../types';


//Logica de Reducer
//eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch(action.type){
    case FORM_PROJECT:
      return {
        ...state,
        newformproject: true
      }
      case SET_PROJECT:
        return{
          ...state,
          projects: action.payload
        }
    default:
        return state;
  }
}
/* Otra opcion

export default function projectReducer(state, action) {
  switch(action.type){
    default:
        return state;
  }
}
*/