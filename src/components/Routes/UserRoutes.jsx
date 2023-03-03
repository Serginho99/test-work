import UserPage from 'pages/UserPage';
import UserPagePosts from 'pages/UserPagePosts';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/users" element={<UserPage />} />
      <Route path="/posts/:id" element={<UserPagePosts />} />
      <Route path="*" element={<Navigate to="/users" />} />
    </Routes>
  );
}
