import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SettingPage from "./pages/SettingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { Toaster } from "react-hot-toast";
import useAuth from "./hooks/useAuth";
function App() {
  const { user, loading } = useAuth();
  if (loading) return null; // ⛔ redirect বন্ধ, loop বন্ধ
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              user?.assistantName ? (
                <HomePage />
              ) : (
                <Navigate to="/setting" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/setting"
          element={
            user ? (
              user?.assistantName ? (
                <HomePage />
              ) : (
                <SettingPage />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUpPage />}
        />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
