import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Contact, Project } from "./pages";
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
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
