import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeContext from "./Contexts/ThemeContext";
import AppMainTheme from "./Components/AppMainTheme";
import AuthContext from "./Contexts/AuthContext";
import Home from "./Components/Home";
import Clothes from "./Components/Clothes";
import Decoration from "./Components/Decoration";
import Fashion from "./Components/Fashion";
import Travel from "./Components/Travel";
import AuthContainer from "./Auth/AuthContainer";
import PrivateRoute from "./PrivateRoute/Private_Route";
function App() {
  return (
    <>
      <AuthContext>
        <ThemeContext>
          <AppMainTheme>
            <Router>
              <Routes>
                <Route exact path="/" element={<PrivateRoute />}>
                  <Route exact path="/" element={<AuthContainer />} />
                </Route>
                <Route path="/Home" element={<Home />} />
                <Route path="/Clothes" element={<Clothes />} />
                <Route path="/Decoration" element={<Decoration />} />
                <Route path="/Fashion" element={<Fashion />} />
                <Route path="/Travel" element={<Travel />} />
              </Routes>
            </Router>
          </AppMainTheme>
        </ThemeContext>
      </AuthContext>
    </>
  );
}

export default React.memo(App);
