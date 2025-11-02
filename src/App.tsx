import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ErrorBoundary } from "./components/layout/ErrorBoundary";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { SellerDashboard } from "./pages/SellerDashboard";
import { NotFound } from "./pages/NotFound";
import { LoginRegisterForm } from "./components/auth/LoginRegisterForm";

/**
 * App root - handles routing and global layout
 */
const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
      <Navbar />
      <ErrorBoundary>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/seller" element={<SellerDashboard />} />
            <Route path="/auth" element={<div className="max-w-3xl mx-auto px-4 py-8"><LoginRegisterForm /></div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default App;
