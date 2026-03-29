import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';
import MeeshoCropper from './components/MeeshoCropper';
import FlipkartCropper from './components/FlipkartCropper';
import ResultsPage from './components/ResultsPage';
import Footer from './components/Footer';

function App() {
  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navbar />

        <main className="max-w-5xl mx-auto px-6 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meesho" element={<MeeshoCropper onBack={handleBackToHome} />} />
            <Route path="/flipkart" element={<FlipkartCropper onBack={handleBackToHome} />} />
            <Route path="/results" element={<ResultsPage onBack={handleBackToHome} />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;