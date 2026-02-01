import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { LoginPage } from './pages/auth/LoginPage';
import { SellerDashboard } from './pages/seller/SellerDashboard';
import { BuyerDashboard } from './pages/buyer/BuyerDashboard';
import { DeliveryDashboard } from './pages/delivery/DeliveryDashboard';

import { SellerOnboarding } from './pages/seller/SellerOnboarding';

const ProtectedRoute = null; // Removed in favor of inline check for stability

function App() {
  const [auth, setAuth] = React.useState({ seller: false, delivery: false, buyer: false });

  return (
    <Router>
      <Layout auth={auth}>
        <Routes>
          <Route path="/" element={<HomePage auth={auth} />} />
          <Route path="/work" element={<WorkPage />} />

          {/* Login Page receives the setter to update auth state */}
          <Route path="/login" element={<LoginPage setAuth={setAuth} />} />

          {/* Seller Flow: Login -> Onboarding -> Dashboard */}
          <Route
            path="/seller-onboarding"
            element={auth.seller ? <SellerOnboarding /> : <Navigate to="/login" state={{ role: 'seller' }} replace />}
          />

          <Route
            path="/seller"
            element={auth.seller ? <SellerDashboard /> : <Navigate to="/login" state={{ role: 'seller' }} replace />}
          />

          <Route path="/buyer" element={<BuyerDashboard isLoggedIn={auth.buyer} />} />

          {/* Delivery Flow: Simple Login -> Dashboard */}
          <Route
            path="/delivery"
            element={auth.delivery ? <DeliveryDashboard /> : <Navigate to="/login" state={{ role: 'delivery' }} replace />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
