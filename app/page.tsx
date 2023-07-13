'use client'
import { Provider, useDispatch } from 'react-redux'
import { DrawerExample } from './components/DrawerExample'
import RootLayout from './layout'
import store from './store'
import { useEffect, useState } from 'react'
import { getlocal } from './store/reducers'
 

export default function Home() {
  const dispatch = useDispatch()
  const [getListasStorage, setGetListasStorage] = useState<string|[]|null>([])
  useEffect(() => {
    let getListas = localStorage.getItem('listas')
    if(getListas){
      getListas = JSON.parse(getListas)
      setGetListasStorage(getListas)
    }
    console.log(getListasStorage)
  }, [])
  return (
    <Provider store={store}>

      <RootLayout>
        <main className={`flex p-2 h-screen bg-azul`}>
          <DrawerExample />
        </main>
      </RootLayout>
    </Provider>
    )
}


