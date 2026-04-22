import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import LawyerProfile from './pages/LawyerProfile';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/ui/Preloader';
import ScrollProgressBar from './components/ui/ScrollProgressBar';

const App = () => {
  return (
    <BrowserRouter>
      <Preloader />
      <CustomCursor />
      <ScrollProgressBar />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="lawyer/:id" element={<LawyerProfile />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;