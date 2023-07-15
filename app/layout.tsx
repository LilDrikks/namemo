'use client'
import "./globals.css";
import { Providers } from "./providers";
import { Provider } from "react-redux";
import store from "./store";
function RootLayout(props: any) {

  return (
    <Provider store={store}>
      <html lang="pt-BR">
        <body>
          <Providers>{props.children}</Providers>
        </body>
      </html>
    </Provider>
  );
}
export default RootLayout;
