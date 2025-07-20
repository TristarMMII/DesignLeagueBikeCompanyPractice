"use client"
import DataSection from './components/dataSection';
import Hero from './components/hero';
import Navbar from './components/navbar'; // Adjust the path as per your project structure

export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
        <DataSection />
      </main>
    </div>
  );
}
