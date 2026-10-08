import React, { lazy, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectedRoutes from "./ProtectedRoutes"
import Counter from "./Counter"

const About = lazy(() => import("./About"));
const Dashboard = lazy(() => import("./Dashboard"))
const Contact = lazy(() => import("./Contact"))
const Login = lazy(() => import("./Login"))


function App() {

  return (
    <div>
      <h1>Protected Routes Example!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
