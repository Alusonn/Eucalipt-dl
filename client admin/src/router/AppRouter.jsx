import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AdminProducts } from "../pages/AdminProducts";
import { LoginPage } from "../pages/LoginPage";
import { CheckingPage } from "../pages/CheckingPage";

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
