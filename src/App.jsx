import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import SellerFeatures from "./components/SellerFeatures";
import CursaleInAction from "./components/CursaleInAction";
import Strategies from "./components/Strategies";
import CompleteSolutions from "./components/CompleteSolutions";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <SellerFeatures />
        <Strategies />
        <CursaleInAction />
        <CompleteSolutions />
      </main>
    </>
  );
}
