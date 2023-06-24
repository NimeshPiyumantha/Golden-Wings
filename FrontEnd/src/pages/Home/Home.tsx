
import Blog from "../../components/Blogs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PlacesCard from "../../components/PlacesCard";
import Form from "../Contact/Form/Form";
import Collection from "../Gallery/Collection";
import Hero from "./Hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <h2 className="pt-24 text-center text-3xl font-bold px-6 font-Poppins text-accent-green-200">Places</h2>
      <PlacesCard/>
      <Collection/>
      <Form/>
      <Footer/>
    </>
  );
}
