import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../component/layout/layout';
import { store } from "../store/index";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";
import { Provider as ReduxProvider } from "react-redux";

export const backgroundColor = theme("theme", {
  light: "hsl(0, 0%, 98%)",
  dark: "hsl(207, 26%, 17%)",
});

export const textColor = theme("theme", {
  light: "hsl(200, 15%, 8%)",
  dark: "hsl(0, 0%, 100%)",
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${backgroundColor};
  color: ${textColor};`

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ReduxProvider store={store}>
      <ThemeProvider theme={{ theme: "light" }}>
        <Container>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </ThemeProvider>
    </ReduxProvider>
   
  ) 
}
