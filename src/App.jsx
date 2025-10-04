import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import AllPost from "./component/AllPost";
import AllComments from "./component/AllComments";
import Post from "./component/Post";
import { ThemeContext } from "./context/ThemeContext";
import ThemeSwitcher from "./component/ThemeSwitcher";

export default function App() {
  return (
    <ThemeContext>
      <ThemeSwitcher />
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<AllPost />} />
          <Route path="/comments" element={<AllComments />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<h1>404 NotFound!!</h1>} />
        </Route>
      </Routes>
    </ThemeContext>
  );
}
