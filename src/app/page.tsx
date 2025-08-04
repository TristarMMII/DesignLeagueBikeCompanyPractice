"use client"
import DataSection from './components/dataSection';
import Hero from './components/hero';
import Navbar from './components/navbar';
import InformationSection from './components/informationSection';


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <DataSection />
        <InformationSection />
      </main>
    </div>
  );
}
