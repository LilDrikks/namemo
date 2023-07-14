"use client";
import { useRouter } from "next/router";
import React from "react";
import { DrawerExample } from "../app/components/DrawerExample";
import { Provider } from "react-redux";
import store from "../app/store/index";
import { Providers } from "../app/providers";
import "../app/globals.css";
import { Button } from "@chakra-ui/react";

function ListaDePaginas() {
  const router = useRouter();
  const { title } = router.query;

  return (
    <Provider store={store}>
      <Providers>
        <div className="bg-azul h-screen w-screen overflow-hidden p-2">
          <DrawerExample />
          <main className="flex h-full w-full justify-center items-center">
          <h1 className="text-verde">{title}</h1>
            <Button>+</Button>
          </main>
        </div>
      </Providers>
    </Provider>
  );
}

export default ListaDePaginas;
