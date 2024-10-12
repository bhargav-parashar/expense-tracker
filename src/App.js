import Home from "../src/Pages/Home";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider>
      <Home />
    </SnackbarProvider>
  );
}

export default App;
