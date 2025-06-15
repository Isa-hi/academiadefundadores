"use client"
import Header from "@/components/homepage/header"
import Hero from "@/components/homepage/hero"
import MarqueeBanner from "@/components/homepage/marquee-banner"
import CarouselSection from "@/components/homepage/carousel-section"
import ExperienceSection from "@/components/homepage/experience-section"
import FullWidthImageSection from "@/components/homepage/full-width-image-section"
import PillarsSection from "@/components/homepage/pillars-section"
import GenesisFundSection from "@/components/homepage/genesis-fund-section"
import ApplicationSection from "@/components/homepage/application-section"
import Footer from "@/components/homepage/footer"

/** COlor negro anterior: 050505  */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <Hero />
      <MarqueeBanner />
      <CarouselSection />
      <ExperienceSection />
      <FullWidthImageSection />
      <MarqueeBanner />
      <GenesisFundSection />
      <PillarsSection />
      <ApplicationSection />
      <Footer />
    </div>
  )
}
