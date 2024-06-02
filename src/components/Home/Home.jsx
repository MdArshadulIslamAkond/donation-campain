import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";

const Home = () => {
  return (
    <div className="text-center">
      <img src="assets/images/Education.png" alt="Education" />

      <Banner />
      <Cards />

      <h2>Home page</h2>
    </div>
  );
};

export default Home;
