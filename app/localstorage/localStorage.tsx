'use client'

import store from "../store";

export const loadState = ()=> {
  try {
    const data = localStorage.getItem('listas');
    if(data === null){
      return undefined;
    }
    return JSON.parse(data);
  } catch (error) {
    return undefined;
  }
}

export const setState = (newState:any) => {
  try {
    if(newState){
      localStorage.setItem('listas', JSON.stringify(newState));
    }
    return
  } catch (error) {
    return console.log('falha ao salvar Storage')
  }
}

export const updateState = (index: number) => {
  try {
    const currentState = loadState();
    if(currentState.listas.length) {
      currentState.listas.splice(index, 1)
      console.log(currentState.listas)
      setState(currentState)
    }
    
  } catch (error) {
    console.log('operação não pode ser concluida')
  }
}


