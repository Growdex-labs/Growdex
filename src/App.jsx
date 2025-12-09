import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing Page/HeroPage/index.jsx";
import BlogDetail from "./components/pages/Blogs/BlogDetail.jsx";
import GrowDexBlog from "./components/pages/Blogs/GrowdexBlog.jsx";
import NotFoundPage from "./pages/Landing Page/NotFoundPage.jsx";
import AgencyPage from "./pages/Landing Page/agency/Page.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/agency" element={<AgencyPage />} />
      <Route path="/blog" element={<GrowDexBlog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
