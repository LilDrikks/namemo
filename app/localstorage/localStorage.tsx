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
    localStorage.setItem('listas', JSON.stringify(newState));
  } catch (error) {
    return console.log('falha ao salvar Storage')
  }
}

export const updateState = (index: number) => {
  try {
    console.log(loadState()[index])
    return loadState()
  } catch (error) {
    
  }
}


