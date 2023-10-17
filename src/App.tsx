import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./Routes";
import { ListTasks } from "./Pages/ListTasks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListTasks />} />
      </Routes>
      <Router />
    </BrowserRouter>
  );
}

export default App;
