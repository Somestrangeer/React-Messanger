import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import AuthPage from './src/pages/AuthPage';
import ChatPage from './src/pages/ChatPage';
import RegPage from './src/pages/RegPage';
import { UserAuthStore } from './src/store/userStore';

const ProtectedRoute = ({children}: {children: JSX.Element}) =>{
  const isAuthenticated  = UserAuthStore(state => state.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/auth" />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/chat" element={<ChatPage />}/>
        <Route path="/reg" element={<RegPage />}/>
        <Route path="*" element={<AuthPage />} /> // Все пути ведут на авторизацию
      </Routes>
    </BrowserRouter>
  );
}

export default App;