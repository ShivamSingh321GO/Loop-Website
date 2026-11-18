import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import DualProduct from "@/components/sections/DualProduct";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Industries from "@/components/sections/Industries";
import Roles from "@/components/sections/Roles";
import Security from "@/components/sections/Security";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <DualProduct />
        <Features />
        <HowItWorks />
        <Industries />
        <Roles />
        <Security />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
