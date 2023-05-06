import UsersHeader from "../../../components/UsersHeader";
import Collection from "../../Gallery/Collection";
import Footer from "../../../components/Footer";
import UserHero from "./UserHero";

export default function UserHome() {
  return (
    <>
      <UsersHeader />
      <UserHero />
      <Collection />
      <Footer />
    </>
  );
}
