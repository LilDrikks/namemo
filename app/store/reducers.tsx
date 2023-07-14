import { createSlice } from '@reduxjs/toolkit';
import { setState } from '../localstorage/localStorage';



// Defina os reducers individuais
const Listas = createSlice({
  name: 'Listas',
  initialState: [],
  reducers: {
    addLista(state: any, action):any {
      const newState = [...state, action.payload];
      setState(newState)
      return state = newState;
    },
  },
});

// Combine os reducers
export const rootReducer = {
  listas: Listas.reducer,
};

export const { addLista } = Listas.actions;
