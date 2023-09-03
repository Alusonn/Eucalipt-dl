import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AdminProducts } from "../pages/AdminProducts";
import { LoginPage } from "../pages/LoginPage";
import { CheckingPage } from "../pages/CheckingPage";
import { AdminProduct } from "../pages/AdminProduct";

export const AppRouter = () => {
  const authStatus = "authenticated";


  if (authStatus === 'checking') {
    return <CheckingPage />
  }

  return (
    <Routes>
      {authStatus === "authenticated" ? (
        <>
          <Route path="/" element={<AdminProducts />} />
          <Route path="/:_id" element={<AdminProduct />} />
        </>
      ) : (
        <>
        <Route path="/*" element={ <Navigate to="/login" /> } />
          <Route path="/login" element={<LoginPage />} />
        </>
      )}
    </Routes>
  );
};
