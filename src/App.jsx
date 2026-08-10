import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing Page/HeroPage/index.jsx";
import BlogDetail from "./components/pages/Blogs/BlogDetail.jsx";
import NotFoundPage from "./pages/Landing Page/NotFoundPage.jsx";
import AgencyPage from "./pages/Landing Page/agency/Page.jsx";
import AboutPage from "./pages/Landing Page/about/Page.jsx";
import PricingPage from "./pages/Landing Page/pricing/Page.jsx";
import HelpCenter from "./pages/HelpCenter/index.jsx";
import BlogPage from "./pages/HelpCenter/BlogPage.jsx";
import TopicPage from "./pages/HelpCenter/TopicPage.jsx";
import ArticlePage from "./pages/HelpCenter/ArticlePage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/agency" element={<AgencyPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      {/* The old blog listing fetched posts and blocked on <Loader/>; the
          redesigned resources UI renders in its place with no data dependency.
          GrowdexBlog.jsx is untouched on disk if it needs to come back. */}
      <Route path="/blog" element={<BlogPage />} />
      {/* Three segments, so this never collides with /blog/:slug. */}
      <Route path="/blog/topic/:slug" element={<TopicPage />} />
      <Route path="/blog/article/:slug" element={<ArticlePage />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/help-center" element={<HelpCenter />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
