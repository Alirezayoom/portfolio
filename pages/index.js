import Link from "next/link";
import AboutMe from "../components/AboutMe";
import Hero from "../components/Hero";
import Portfolios from "../components/Portfolios";
import ServiceProvide from "../components/ServiceProvide";
import Testimonials from "../components/Testimonials";

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      <ServiceProvide />
      <Portfolios />
      <AboutMe />
      <Testimonials />
    </>
  );
}
