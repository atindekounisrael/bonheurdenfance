import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      {/* Autres routes */}
    </Routes>
  </BrowserRouter>
);

export default App;
