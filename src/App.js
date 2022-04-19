import { MyContextProvider } from "./components/context";
import Router from "./routes/router";
import GlobalStyle from "./style/global";

function App() {
  return (
    <MyContextProvider>
      <GlobalStyle />
      <Router />
    </MyContextProvider>
  );
}

export default App;
