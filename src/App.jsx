import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
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
          <Route path="/" element={"HOME"} />
          <Route path="/about" element={"About"} />
          <Route path="/contacts" element={"Contacts"} />
          <Route path="/projects" element={"Projects"} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
