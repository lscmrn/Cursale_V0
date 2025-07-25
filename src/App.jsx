import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CursaleInAction from "./components/CursaleInAction";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Advantages from "./components/Advantages";
import SecondaryCTA from "./components/SecondaryCTA";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <CursaleInAction />
        <HowItWorks />
        <Testimonials />
        <Advantages />
        <SecondaryCTA />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
