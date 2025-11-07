import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from "./context/AuthProvider";
import Register from './pages/Register';

function AppRoutes() {
  const { authToken } = useAuth();

  return (
    <Routes>
      {!authToken ? (
        <>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/register" replace />} />
        </>
      ) : (
        <>
          {/* <Route path="/" element={<RootLayout />}>
            <Route index element={<Page1 />} />
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
          </Route>
          <Route path="*" element={<Navigate to="/page1" replace />} /> */}
        </>
      )}
    </Routes>
  );
}

export default function App() {
  return (
     <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}