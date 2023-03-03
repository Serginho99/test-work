import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const UserPage = lazy(() => import('pages/UserPage'));
const UserPagePosts = lazy(() => import('pages/UserPagePosts'));

export default function UserRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/users" element={<UserPage />} />
        <Route path="/posts/:id" element={<UserPagePosts />} />
        <Route path="*" element={<Navigate to="/users" />} />
      </Routes>
    </Suspense>
  );
}
