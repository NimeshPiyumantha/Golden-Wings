import lotuesTower from "../../../assets/img/1.jpg";
import beachTree from "../../../assets/img/2.jpg";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-accent-white-50 pt-10">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-black-400">
          <h2
            className="mb-4 text-4xl tracking-tight font-extrabold text-black-900 dark:text-black"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            Your Journey Begins
          </h2>
          <p className="mb-4">
            Welcome to our travel website, where we believe that traveling is
            not just a hobby, but a way of life. We are passionate about helping
            you plan your next adventure and creating unforgettable experiences
            that will last a lifetime. Our site is designed to make travel
            planning easy, efficient, and enjoyable. From flights and hotels to
            car rentals and vacation packages, we have everything you need to
            make your dream trip a reality. Whether you're planning a romantic
            getaway, a family vacation, or a solo adventure, our site offers a
            wide range of options to suit your unique travel style and budget.
          </p>
          <p>
            So, sit back, relax, and let us help you plan the trip of a
            lifetime. Start exploring our site now and get ready to embark on
            your next great adventure!
          </p>

          <NavLink to={"/login"}>
            <Button
              variant="contained"
              sx={{
                m: 1.7,
                mt: 5,
                fontFamily: "Ubuntu",
                border: 1,
                bgcolor: "#1abc9c",
                fontWeight: 600,
                borderRadius: 3,
              }}
              size="medium"
              endIcon={<LoginIcon />}
              color="success"
            >
              Login
            </Button>
          </NavLink>
          <NavLink to={"/register"}>
            <Button
              variant="contained"
              sx={{
                m: 1.7,
                mt: 5,
                fontFamily: "Ubuntu",
                border: 1,
                bgcolor: "gray",
                fontWeight: 600,
                borderRadius: 3,
              }}
              size="medium"
              endIcon={<ArrowForwardIosIcon />}
            >
              Register
            </Button>
          </NavLink>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src={lotuesTower}
            alt="office content 1"
          />

          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={beachTree}
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
