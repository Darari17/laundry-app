import { Routes, Route } from "react-router-dom";
import TestPage from "./TestPage";
import HomePage from "./components/pages/HomePage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ReadProducts from "./components/products/ReadProducts";
import ReadCustomers from "./components/customers/ReadCustomers";
import ReadBills from "./components/bills/ReadBills";

function App() {
  return (
    <Routes>
      <Route element={<TestPage />} path="/test" />
      <Route element={<HomePage />} path="/" />
      <Route element={<Register />} path="/auth/register" />
      <Route element={<Login />} path="/auth/login" />
      <Route element={<ReadProducts />} path="/products" />
      <Route element={<ReadCustomers />} path="/customers" />
      <Route element={<ReadBills />} path="/bills" />
    </Routes>
  );
}

export default App;
