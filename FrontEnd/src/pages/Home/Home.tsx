import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Collection from "../Gallery/Collection";
import Hero from "./Hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Collection/>
      <Footer/>
    </>
  );
}
