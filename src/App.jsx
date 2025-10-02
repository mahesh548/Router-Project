import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import AllPost from "./component/AllPost";

export default function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<AllPost />} />
        <Route path="*" element={<h1>404 NotFound!!</h1>} />
      </Route>
    </Routes>
  );
}
