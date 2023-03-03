import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import StorePage from "./pages/StorePage";
import { getUserProfileAction } from "./reducers/asyncAuthReducer";
import Cart from "./pages/Cart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfileAction());
  }, []);
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/store" element={<StorePage/>}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
