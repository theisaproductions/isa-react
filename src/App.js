import React, { lazy, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import NotFoundPage from './landing/components/notFoundPage';
import BlogsRoot from './landing/subpages/pages/blogs/blogsRoot';
import AllBlogsPage from './landing/subpages/pages/blogs/pages/allBlogsPage';
import BlogPage from './landing/subpages/pages/blogs/pages/blogPage';

// pages
const Landing = lazy(() => import('./landing/landing'));
const HomePage = lazy(() => import('./landing/homepage/homepage'));
const AboutPage = lazy(() => import('./landing/subpages/pages/aboutPage'));
const ActingPage = lazy(() => import('./landing/subpages/pages/actingPage'));
const AnimationsPage = lazy(() => import('./landing/subpages/pages/animationsPage'));
const ArtPage = lazy(() => import('./landing/subpages/pages/artPage'));
const CorporatePage = lazy(() => import('./landing/subpages/pages/corporatePage'));
const DancePage = lazy(() => import('./landing/subpages/pages/dancePage'));
const FilmmakingPage = lazy(() => import('./landing/subpages/pages/filmmakingPage'));
const FitnessPage = lazy(() => import('./landing/subpages/pages/fitnessPage'));
const MarketingPage = lazy(() => import('./landing/subpages/pages/marketingPage'));
const MotivationPage = lazy(() => import('./landing/subpages/pages/motivationPage'));
const MusicPage = lazy(() => import('./landing/subpages/pages/musicPage'));
const PhotographyPage = lazy(() => import('./landing/subpages/pages/photographyPage'));
const ProductionPage = lazy(() => import('./landing/subpages/pages/productionsPage'));
const RoutesvillePage = lazy(() => import('./landing/subpages/pages/routesvillePage'));
const SchoolPage = lazy(() => import('./landing/subpages/pages/schoolPage'));
const TalentPage = lazy(() => import('./landing/subpages/pages/talentPage'));

// application pages
const ApplyPage = lazy(() => import('./landing/subpages/pages/applyPage/applicationPage'));
const ActingApplication = lazy(() => import('./landing/subpages/pages/applyPage/pages/actingApplicationPage'));
const AnimationApplication = lazy(() => import('./landing/subpages/pages/applyPage/pages/animationApplicationPage'));
const FilmmakingApplication = lazy(() => import('./landing/subpages/pages/applyPage/pages/filmmakingApplicationPage'));

// Scroll to top wrapper
const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {
  return (
    <div className=''>
      <Wrapper>
        <Routes>
            <Route path="/" element={<Landing />}>
              <Route path='*' element={<NotFoundPage />} />
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="acting" element={<ActingPage />} />
              <Route path="filmmaking" element={<FilmmakingPage />} />
              <Route path="animations" element={<AnimationsPage />} />
              <Route path="photography" element={<PhotographyPage />} />
              <Route path="fitness" element={<FitnessPage />} />
              <Route path="dance" element={<DancePage />} />
              <Route path="music" element={<MusicPage />} />
              <Route path="marketing" element={<MarketingPage />} />
              <Route path="art" element={<ArtPage />} />
              <Route path="motivation" element={<MotivationPage />} />
              <Route path="school" element={<SchoolPage />} />
              <Route path="corporate" element={<CorporatePage />} />
              <Route path="productions" element={<ProductionPage />} />
              <Route path="talent-management" element={<TalentPage />} />
              <Route path="routesville" element={<RoutesvillePage />} />
              <Route path="apply" element={<ApplyPage />}>
                <Route path="acting" element={<ActingApplication />}></Route>
                <Route path="animation" element={<AnimationApplication />}></Route>
                <Route path="filmmaking" element={<FilmmakingApplication />}></Route>
              </Route>
              <Route path="blogs" element={<BlogsRoot />} >
                  <Route index element={<AllBlogsPage />}/>
                  <Route path=":id" element={<BlogPage />}/>
              </Route>
            </Route>
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
