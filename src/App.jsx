import React from "react";
import Header from "./components/Header/Header";
import {Hero, Divider, AboutUs1, AboutUs2, Books, Services, Testimonials, Footer} from "./sections/index"

const App = () => {
  return (
    <>
      <Header/>
      <section ><Hero/></section>
      <section ><Divider/></section>
      <section ><AboutUs1/></section>
      <section ><AboutUs2/></section>
      <section ><Books/></section>
      <section ><Services/></section>
      <section ><Testimonials/></section>
      <footer><Footer/></footer>
    </>
  );
};

export default App;
