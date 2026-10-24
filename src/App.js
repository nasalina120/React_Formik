import "./App.css";
import LoginPage from "./component/LoginPage";
import NotFound from "./component/NotFound";
import BasePage from "./component/BasePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccount from "./component/RegisterForm/RegisterForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<LoginPage />} />

          <Route path="register" element={<CreateAccount />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
