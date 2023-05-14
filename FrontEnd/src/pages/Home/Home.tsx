import { Blog } from "../../components/Blogs/Blog";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Contact from "../Contact/Contact";
import Collection from "../Gallery/Collection";
import Hero from "./Hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Collection/>
      <Blog/>
      <Contact/>
      <Footer/>
    </>
  );
}
