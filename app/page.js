import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { fetchFooterData } from "@/utils/fetchFooterData";

const Home = () => {
  return (
    <main>
      <Hero />
      <Footer />
    </main>
  );
};

export default Home;
