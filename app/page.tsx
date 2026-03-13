import Hero from "./components/hero";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Animations from "./components/animations";
import Process from "./components/process";
import Capabilities from "./components/capabilities";
import Stats from "./components/stats";
import Portfolio from "./components/portfolio";
import Clients from "./components/clients";


export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Stats /> 
      <Animations />
      <Capabilities />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
    </main>
  );
}