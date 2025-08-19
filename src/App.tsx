import "./App.css";
import { LoginForm } from "./pages/Login/login-form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegisterForm } from "./pages/Register/register-form";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
              <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
              </Routes>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
