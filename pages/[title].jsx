'use client'
import { useRouter } from 'next/router';
import React from 'react'
import { DrawerExample } from '../app/components/DrawerExample'
import { Provider } from 'react-redux';
import store from '../app/store/index';
import {Providers} from '../app/providers'
function ListaDePaginas() {
  const router = useRouter();
  const { title } = router.query;

  return (
    <Provider store={store}>
      <Providers>
      <h1>{title}</h1>
      <DrawerExample />

      </Providers>
    </Provider>
  );
}

export default ListaDePaginas