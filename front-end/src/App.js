import './App.css';
import BookUnit from './BookUnit';
import Header from './Header';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import {AuthProvider} from './AuthContext';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <AuthProvider>

        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bookunit" element={<BookUnit />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Add more routes */}
          </Routes>
        </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
