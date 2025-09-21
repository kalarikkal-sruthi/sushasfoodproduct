import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function MainLayouts() {
  return (
    <div className="page-wrapper">
      <Header />

      <main className="content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
