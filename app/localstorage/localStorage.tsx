'use client'
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
    const state = loadState()
    state.listas.splice(index, 1)
    console.log(state)
    setState(state)
  } catch (error) {
    console.log('operação não pode ser concluida')
  }
}


