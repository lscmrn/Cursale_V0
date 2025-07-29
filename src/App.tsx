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
        <div className="bg-gradient-cursale min-h-screen w-full text-cursale-blue-900">
            <Header />
            <main className="overflow-x-hidden">
                <section
                    id="about"
                    className="container"
                >
                    <Hero />
                </section>
                <section
                    id="features"
                    className="container"
                >
                    <Features />
                </section>
                <section
                    id="cursale-in-action"
                    className="container"
                >
                    <CursaleInAction />
                </section>
                <section
                    id="how-it-works"
                    className="container"
                >
                    <HowItWorks />
                </section>
                <section
                    id="testimonials"
                    className="container"
                >
                    <Testimonials />
                </section>
                <section
                    id="advantages"
                    className="container"
                >
                    <Advantages />
                </section>
                <section
                    id="secondary-cta"
                    className="container"
                >
                    <SecondaryCTA />
                </section>
                <section
                    id="faqs"
                    className="container"
                >
                    <FAQ />
                </section>
            </main>
            <Footer />
        </div>
    );
}
