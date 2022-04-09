import { AuthProvider } from "./components/context";
import Router from "./routes/router";
import ReactDOM from "react-dom";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
