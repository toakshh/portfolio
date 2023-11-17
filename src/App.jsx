import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Project = lazy(() => import("./pages/Project"));
// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: "HOme",
//       children: [
//         {
//           path: "about",
//           element: "ABout",
//         },
//         {
//           path: "contacts",
//           element: "Contacts",
//         },
//         {
//           path: "projects",
//           element: "Projects",
//         },
//       ],
//     },
//   ]);

const App = () => {
  return (
    <main className="bg-slate-300/20 ">
      <Router>
        <Navbar />
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <div className="w-16 h-16 border-4 border-opacity-40 border-blue-400 border-t-green-800 rounded-full animate-ping"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </Suspense>
      </Router>
    </main>
  );
};

export default App;
