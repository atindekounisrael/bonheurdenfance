import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      {/* Ajoutez ici les autres routes existantes */}
    </Routes>
  </BrowserRouter>
);

export default App;