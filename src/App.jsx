// import Bills from "./component/Bills";
// import { BillContextProvider } from "./context/BillContextProvider";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import AllPost from "./component/AllPost";
import AllComments from "./component/AllComments";
import Post from "./component/Post";
import { ThemeContext } from "./context/ThemeContext";
import ThemeSwitcher from "./component/ThemeSwitcher";
import { lazy, Suspense, useState } from "react";
import Counter from "./component/Counter";
import Modal from "./component/Modal";
const Bills = lazy(() => import("./component/Bills")); // lazy loading component
//lazy loading context (named export)
const BillContextProvider = lazy(() =>
  import("./context/BillContextProvider").then((module) => ({
    default: module.BillContextProvider,
  }))
);

export default function App() {
  const [isOpen, setOpen] = useState({ msg: "", bool: false });

  const showModal = (msg) => {
    setOpen({ msg, bool: true });
  };
  const hideModal = (bool) => {
    setOpen({ msg: "", bool });
  };
  return (
    <>
      <ThemeContext>
        <ThemeSwitcher />
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<AllPost />} />
            <Route path="/comments" element={<AllComments />} />
            <Route path="/post/:id" element={<Post />} />
            <Route
              path="/counter"
              element={
                <Counter
                  name={"My Counter"}
                  subtitle="This Counter made by class component!"
                  showModal={showModal}
                />
              }
            />
            <Route
              path="/bills"
              element={
                <Suspense fallback={<h1>Loading..</h1>}>
                  <BillContextProvider>
                    <Bills />
                  </BillContextProvider>
                </Suspense>
              }
            />
            <Route path="*" element={<h1>404 NotFound!!</h1>} />
          </Route>
        </Routes>
      </ThemeContext>
      <Modal isOpen={isOpen.bool} setOpen={hideModal} content={isOpen.msg} />
    </>
  );
}
