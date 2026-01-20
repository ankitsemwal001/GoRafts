import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import LayoutWrapper from "./layout";

// Lazy load pages
const Home = lazy(() => import("./pages/Home/home"));
const Trek = lazy(() => import("./pages/Trek/trek"));
const TrekPage = lazy(() => import("./pages/Trek/TrekPage"));
const DayaraBuyal = lazy(() => import("./pages/Trek/DayaraBugyal/dayarabugyal"));
const KedarKatha = lazy(() => import("./pages/Trek/KedarKatha/kedarKatha"));
const HiddenWaterfall = lazy(() => import("./pages/Trek/HiddenWaterfall/hiddenWaterfall"));
const TungnathTrek = lazy(() => import("./pages/Trek/TungnathTrek/tungnathTrek"));
const GomukhTrek = lazy(() => import("./pages/Trek/GomukhTrek/gomukhTrek"));
const BungeeJumping = lazy(() => import("./pages/bungeeJumping/bungeejumping"));
const Zipline = lazy(() => import("./pages/Zip&kay/Zipline"));
const Kayaking = lazy(() => import("./pages/Zip&kay/Kayaking"));
const Stays = lazy(() => import("./pages/stays/stays"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Rafting = lazy(() => import("./pages/Rafting/Rafting"));
const Shivpuri = lazy(() => import("./pages/Rafting/Raftingpage/Shivpuri"));
const Nim = lazy(() => import("./pages/Rafting/Raftingpage/Nim"));
const Marine = lazy(() => import("./pages/Rafting/Raftingpage/Marine"));
const Kodilyla = lazy(() => import("./pages/Rafting/Raftingpage/Kodilyla"));
const ContactSection = lazy(() => import("./components/Contact"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const done = () => setLoading(false);
    window.addEventListener("load", done);
    const t = setTimeout(done, 1200);
    return () => {
      window.removeEventListener("load", done);
      clearTimeout(t);
    };
  }, []);

  return (
    <Router>
      {loading && <Loader visible={loading} onHidden={() => setLoading(false)} />}
      <ScrollToTop />
      <Suspense fallback={<Loader visible={true} />}>
        <Routes>
          <Route element={<LayoutWrapper />}>
            <Route path="/" element={<Home />} />
            <Route path="/trek" element={<Trek />} />
            <Route path="/trek/:trekId" element={<TrekPage />} />
            <Route path="/trek/dayarabuyal" element={<DayaraBuyal />} />
            <Route path="/trek/kedarKatha" element={<KedarKatha />} />
            <Route path="/trek/hiddenWaterFall" element={<HiddenWaterfall />} />
            <Route path="/trek/tungnath" element={<TungnathTrek />} />
            <Route path="/trek/gaumukh" element={<GomukhTrek />} />
            <Route path="/bungee" element={<BungeeJumping />} />
            <Route path="/stays" element={<Stays />} />
            <Route path="/zipline" element={<Zipline />} />
            <Route path="/kayaking" element={<Kayaking />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/rafting" element={<Rafting />} />
            <Route path="/rafting/shivpuri" element={<Shivpuri />} />
            <Route path="/rafting/nim" element={<Nim />} />
            <Route path="/rafting/marine" element={<Marine />} />
            <Route path="/rafting/kodilyla" element={<Kodilyla />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
