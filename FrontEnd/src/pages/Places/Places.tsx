import Header from "../../components/Header";
import Cards from "../../components/Cards";

export default function Places() {
  return (
    <>
      <Header />

      <div className="container my-12 mx-auto px-4 md:px-12 mt-20">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </>
  );
}
