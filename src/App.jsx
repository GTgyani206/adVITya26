import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Dashboard from './pages/Dashboard';
import SignupLogin from './pages/SignupLogin';
import Team from './pages/Team';
import Sponsor from './pages/Sponsor';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<SignupLogin />} />
            <Route path="/team" element={<Team />} />
            <Route path="/sponsor" element={<Sponsor />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
