import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LeadForm from "../components/LeadForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <main
        id="lead-form"
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <LeadForm />
      </main>

      <Footer />
    </>
  );
};

export default Home;