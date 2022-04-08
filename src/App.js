import { AuthProvider } from "./components/context";
import Router from "./routes/router";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
