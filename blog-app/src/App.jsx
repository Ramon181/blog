import "./App.css";
import { useAppSelector } from "./hooks/store";
import Admin from "./services/Admin";
import Client from "./services/Client";

function App() {
  const auth = useAppSelector(state => state.auth);
  return <>{ auth.value && auth.value.role === "admin" ? <Admin /> : <Client />}</>;
}

export default App;
