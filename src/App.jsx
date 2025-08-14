import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Testimonials from '@/pages/Testimonials';
import Blog from '@/pages/Blog';
import Registration from '@/pages/Registration';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/temoignages" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/inscription" element={<Registration />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;