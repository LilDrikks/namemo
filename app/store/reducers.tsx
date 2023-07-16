import { createSlice } from '@reduxjs/toolkit';
import { setState } from '../localstorage/localStorage';



// Defina os reducers individuais
const Listas = createSlice({
  name: 'Listas',
  initialState: [],
  reducers: {
    addLista(state: any, action):any {
      const newState = [...state, action.payload];
      console.log(newState)
      setState(newState)
      return newState;
    },
    attLista(state, action) {
      const indexToRemove = action.payload;
      const newListas = [...state]

      if(indexToRemove >= 0 && indexToRemove < newListas.length){
        newListas.splice(indexToRemove, 1)
        setState(newListas)
        return newListas;
      }
      return state
    }
  },
});

// Combine os reducers
export const rootReducer = {
  listas: Listas.reducer,
};

export const { addLista, attLista } = Listas.actions;
