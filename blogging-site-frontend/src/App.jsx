import { AuthProvider } from "./auth/context/auth-provider";
import router from "./routes/router";
import SnackbarProvider from './components/Snackbar/snackbar-provider';
import { RouterProvider } from "react-router-dom";
import { AuthConsumer } from "./auth/context/auth-consumer";

function App() {
  return (
    <AuthProvider>
      <SnackbarProvider>
        <AuthConsumer>
          <RouterProvider router={router} />
        </AuthConsumer>
      </SnackbarProvider>
    </AuthProvider>
  );
}

export default App;
