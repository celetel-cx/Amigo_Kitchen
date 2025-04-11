import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
