import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayouts from "./layout/MainLayouts";
import AppRoutes from "./routes/routes";
import ScrollToTop from "./utils/ScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { isTokenExpired } from "./utils/isTokenExpired";

import { useEffect } from "react";

function App() {
   const dispatch = useDispatch();
   const token = useSelector((state)=>state.auth.token);
   

  //     useEffect(() => {
  //   if (token && !user) {
  //     dispatch(fetchUser()); // 🔁 Auto-load profile after refresh
  //   }
  // }, [token, user, dispatch]);


// useEffect(() => {
//   const timeout = setTimeout(() => {
//     if (token) {
//       const expired = isTokenExpired(token);
//       if (expired) {
//         console.warn("⚠️ Token expired, logging out.");
       
//         return;
//       }

//       if (token) {
//     console.log("Token exists in Redux:", token);
//   }
//     }
//   }, 100); 

//   return () => clearTimeout(timeout);
// }, [token]);
  return (
    <div>
      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
