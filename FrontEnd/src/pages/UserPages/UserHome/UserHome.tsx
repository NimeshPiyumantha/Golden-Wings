import UsersHeader from "../../../components/UsersHeader";
import Collection from "../../Gallery/Collection";
import Footer from "../../../components/Footer";
import UserHero from "./UserHero";
import PlacesCard from "../../../components/PlacesCard";

export default function UserHome() {
  return (
    <>
      <UsersHeader />
      <UserHero />
      <PlacesCard />
      <Collection />
      <Footer />
    </>
  );
}
