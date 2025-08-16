"use client"
import DataSection from './components/dataSection';
import Hero from './components/hero';
import Navbar from './components/navbar';
import InformationSection from './components/informationSection';
import EcoboostSection from './components/ecoboostSection';
import CommuteBigSection from './components/commuteBigSection';
import ReviewsSection from './components/reviewsSection';
import JoinSection from './components/joinSection';


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <DataSection />
        <InformationSection />
        <EcoboostSection />
        <CommuteBigSection />
        <ReviewsSection />
        <JoinSection />

      </main>
    </div>
  );
}
