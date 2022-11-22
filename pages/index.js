import Link from "next/link";
import Hero from "../components/Hero";
import ServiceProvide from "../components/ServiceProvide";

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      <ServiceProvide />
    </>
  );
}
