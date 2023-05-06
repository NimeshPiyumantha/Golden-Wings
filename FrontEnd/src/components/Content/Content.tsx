import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Gallery from "../../pages/Gallery";
import Contact from "../../pages/Contact";
import Places from "../../pages/Places";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import UserBlog from "../../pages/UserPages/UserBlog";
import UserContact from "../../pages/UserPages/UserContact";
import UserProfile from "../../pages/UserPages/UserProfile";
import UserHome from "../../pages/UserPages/UserHome";
import UserPlaces from "../../pages/UserPages/UserPlaces";
import UserGallery from "../../pages/UserPages/UserGallery";

export default function Content() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/places" element={<Places />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>

      <Route path="/uprofile" element={<UserProfile />}></Route>
      <Route path="/ublog" element={<UserBlog />}></Route>
      <Route path="/u" element={<UserHome />}></Route>
      <Route path="/uplaces" element={<UserPlaces />}></Route>
      <Route path="/ugallery" element={<UserGallery />}></Route>
      <Route path="/ucontact" element={<UserContact />}></Route>
    </Routes>
  );
}
