import React from "react";
import {
  Hero,
  Divider,
  AboutUs1,
  AboutUs2,
  Books,
  Services,
  Testimonials,
} from "./HomeSections/index";

const Home = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <Divider />
      </section>
      <section>
        <AboutUs1 />
      </section>
      <section>
        <AboutUs2 />
      </section>
      <section>
        <Books />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Testimonials />
      </section>
    </>
  );
};

export default Home;
