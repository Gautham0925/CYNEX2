import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Quiz from './pages/Quiz';
import CTF from './pages/Ctf';
import Attendance from './pages/Attendance';
import Leave from './pages/Leave';
import LeaveApproval from './pages/LeaveApproval';
import AdminPanel from './pages/AdminPanel';
import HoDApproval from './pages/HoDApproval';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route
          path="/quiz"
          element={
            <PrivateRoute allowedRoles={['student', 'faculty', 'hod', 'admin']}>
              <Quiz />
            </PrivateRoute>
          }
        />
        <Route
          path="/ctf"
          element={
            <PrivateRoute allowedRoles={['student', 'faculty', 'hod', 'admin']}>
              <CTF />
            </PrivateRoute>
          }
        />
        <Route
          path="/attendance"
          element={
            <PrivateRoute allowedRoles={['student', 'faculty', 'hod', 'admin']}>
              <Attendance />
            </PrivateRoute>
          }
        />
        <Route
          path="/leave"
          element={
            <PrivateRoute allowedRoles={['student', 'faculty', 'hod', 'admin']}>
              <Leave />
            </PrivateRoute>
          }
        />
        <Route
          path="/leave-approval"
          element={
            <PrivateRoute allowedRoles={['faculty', 'hod', 'admin']}>
              <LeaveApproval />
            </PrivateRoute>
          }
        />
        <Route
          path="/hod-approval"
          element={
            <PrivateRoute allowedRoles={['hod', 'admin']}>
              <HoDApproval />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-panel"
          element={
            <PrivateRoute allowedRoles={['admin']}>
              <AdminPanel />
            </PrivateRoute>
          }
        />

        {/* Unauthorized Page */}
        <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
      </Routes>
    </Router>
  );
};

export default App;
