import { createSlice } from '@reduxjs/toolkit';



// Defina os reducers individuais
const Listas = createSlice({
  name: 'Listas',
  initialState: [],
  reducers: {
    addLista(state: any, action):any {
      const newState = [...state, action.payload];
      localStorage.setItem('listas', JSON.stringify(newState));
      return state = newState;
    },
    getlocal(state: any, action): any{
          
    },
  },
});

// Combine os reducers
export const rootReducer = {
  listas: Listas.reducer,
};

export const { addLista, getlocal } = Listas.actions;
