import "./App.css";
import { LoginForm } from "./pages/Login/login-form.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegisterForm } from "./pages/Register/register-form.component";
import { ThemeProvider } from "./components/theme-provider";
import MainPage from "./pages/Main/Main";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
              <Routes>
                <Route path="*" element={<LoginForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/main" element={<MainPage />} />
              </Routes>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
