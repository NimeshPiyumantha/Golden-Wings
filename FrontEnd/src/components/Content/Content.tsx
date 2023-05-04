import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Gallery from "../../pages/Gallery";
import Blog from "../../pages/Blog";
import Contact from "../../pages/Contact";
import Places from "../../pages/Places";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

export default function Content() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/places" element={<Places />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}
