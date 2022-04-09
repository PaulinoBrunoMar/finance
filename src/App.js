import { AuthProvider } from "./components/context";
import Router from "./routes/router";
import GlobalStyle from "./style/global";

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router />
    </AuthProvider>
  );
}

export default App;
