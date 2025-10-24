// import { Outlet } from "react-router-dom";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const Layout = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-1">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ScrollToTop ensures every route scrolls smoothly to top */}
      <ScrollToTop />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
