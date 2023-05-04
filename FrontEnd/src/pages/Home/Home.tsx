import Header from "../../components/Header";
import { Card, CardMedia } from "@mui/material";
import background1Image from "../../assets/img/1.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-white dark:bg-accent-white-50 mt-1">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-black-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black-900 dark:text-black">
              Your Journey Begins
            </h2>
            <p className="mb-4">
              Welcome to our travel website, where we believe that traveling is
              not just a hobby, but a way of life. We are passionate about
              helping you plan your next adventure and creating unforgettable
              experiences that will last a lifetime. Our site is designed to
              make travel planning easy, efficient, and enjoyable. From flights
              and hotels to car rentals and vacation packages, we have
              everything you need to make your dream trip a reality. Whether
              you're planning a romantic getaway, a family vacation, or a solo
              adventure, our site offers a wide range of options to suit your
              unique travel style and budget. 
            </p>
            <p>
            So, sit back, relax, and let us
              help you plan the trip of a lifetime. Start exploring our site now
              and get ready to embark on your next great adventure!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src={background1Image}
              alt="office content 1"
            />
            
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
}
