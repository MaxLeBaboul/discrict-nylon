import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Actualites from './pages/Actualites';
import Contact from './pages/Contact';
import Services from './pages/Services';
import APropos from './pages/APropos';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/services" element={<Services />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;