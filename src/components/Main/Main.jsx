import { Hero } from "./Sections/Hero/Hero";
import { Services } from "./Sections/Services/Services";
import { Development } from "./Sections/Development/Development";
import { Exeamples } from "./Sections/Examples/Examples";
import { Information } from "./Sections/Information/Information";
import { Request } from "./Sections/Request/Request";

export const Main = () => (
  <main>
    <Hero />
    <Services />
    <Development />
    <Exeamples />
    <Information />
    <Request />
  </main>
);
