import Advantages from './components/sections/Advantages';
import CursaleInAction from './components/sections/CursaleInAction';
import FAQ from './components/sections/FAQ';
import Features from './components/sections/Features';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import SecondaryCTA from './components/sections/SecondaryCTA';
import Testimonials from './components/sections/Testimonials';
import Footer from './layout/Footer';
import Header from './layout/Header';

export default function App() {
    return (
        <>
            <Header />
            <main className="overflow-x-hidden">
                <section id="about">
                    <Hero />
                </section>

                <section id="features">
                    <Features />
                </section>

                <section id="cursale-in-action">
                    <CursaleInAction />
                </section>

                <section id="how-it-works">
                    <HowItWorks />
                </section>

                <section id="testimonials">
                    <Testimonials />
                </section>

                <section id="advantages">
                    <Advantages />
                </section>

                <section id="secondary-cta">
                    <SecondaryCTA />
                </section>

                <section id="faqs">
                    <FAQ />
                </section>
            </main>
            <Footer />
        </>
    );
}
