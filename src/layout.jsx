import Navbar from './components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { WindowProvider } from './components/WindowContext';

function Layout() {
  const location = useLocation();

  const getBgClass = () => {
    if (location.pathname.startsWith("/rafting/shivpuri") ||
        location.pathname.startsWith("/rafting/nim") ||
        location.pathname.startsWith("/rafting/marine") ||
        location.pathname.startsWith("/rafting/kodilyla")) {
      return "bg-gradient-to-b from-[#dff6ff] via-[#b7e4f4] to-[#dff6ff]";
    }

    if (location.pathname.startsWith("/trek/dayarabuyal") ||
        location.pathname.startsWith("/trek/kedarKatha") ||
        location.pathname.startsWith("/trek/hiddenWaterFall") ||
        location.pathname.startsWith("/trek/tungnath") ||
        location.pathname.startsWith("/trek/gaumukh")) {
      return "bg-[#FDFAF6]";
    }

    if (location.pathname.toLowerCase().startsWith("/gallery")) {
      return "bg-gradient-to-r from-[#ffffff] to-[#f1daff]";
    }

    if (location.pathname.toLowerCase().startsWith("/rafting")) {
      return "bg-gradient-to-r from-[#fafafa] to-[#B2EBF2]";
    }

    if (location.pathname.toLowerCase().startsWith("/stays")) {
      return "bg-gradient-to-r from-white via-amber-50 to-orange-100";
    }

    if (location.pathname.toLowerCase().startsWith("/bungee")) {
      return "bg-gradient-to-r from-white to-[#cceeff]";
    }

    if (location.pathname.toLowerCase().startsWith("/trek")) {
      return "bg-gradient-to-r from-[#fafafa] to-[#DBFCE7]";
    }

    if (location.pathname.toLowerCase().startsWith("/kayaking")) {
      return "bg-gradient-to-r from-blue-100 via-cyan-50 to-teal-100";
    }

    if (location.pathname.toLowerCase().startsWith("/zipline")) {
      return "bg-gradient-to-r from-[#fafafa] to-[#FFF5E4]";
    }

    if (location.pathname === "/") {
      return "bg-gradient-to-r from-[#ffffff] via-[#f6fbf9] to-[#e9f5f1]";
    }

    return "bg-white"; // fallback
  };

  return (
    <div className={getBgClass()}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Wrap Layout in WindowProvider here
export default function LayoutWrapper() {
  return (
    <WindowProvider>
      <Layout />
    </WindowProvider>
  );
}