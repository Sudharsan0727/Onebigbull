import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandResponsibility from './components/BrandResponsibility'
import Services from './components/Services'
import BrandMarquee from './components/BrandMarquee'
import GrowthStudies from './components/GrowthStudies'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'

// Register GSAP ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger)

const CALENDLY_URL = 'https://calendly.com/mukeshveerasamyofficial/30-mins-growth-strategy-session-and-audit-clone'

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const handleScheduleCall = () => {
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    // Refresh ScrollTrigger once DOM layout finishes settling
    ScrollTrigger.refresh()
  }, [])

  return (
    <div className="min-h-screen bg-[#ffffff] text-black selection:bg-[#16A452] selection:text-white">
      {/* Navbar with brand logo and mobile drawer */}
      <Navbar 
        onOpenBooking={() => setIsBookingOpen(true)} 
        onScheduleCall={handleScheduleCall}
      />

      <main>
        {/* Hero Section with 3-Point Credibility Strip */}
        <Hero 
          onOpenBooking={() => setIsBookingOpen(true)} 
          onScheduleCall={handleScheduleCall}
        />

        {/* Signature Statement: Your Brand, Our Responsibility */}
        <BrandResponsibility 
          onOpenBooking={() => setIsBookingOpen(true)} 
          onScheduleCall={handleScheduleCall}
        />

        {/* 4 Core Pillars: Paid Traffic, Retention, CRO, UGC with deep dive modals */}
        <Services onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Brand Logos: Trusted By Brands You Know And Love */}
        <BrandMarquee />

        {/* Collective Growth Studies with real verified metrics */}
        <GrowthStudies 
          onOpenBooking={() => setIsBookingOpen(true)} 
          onScheduleCall={handleScheduleCall}
        />

        {/* Client Endorsements: Don't Listen to Us, Listen to Them */}
        <Testimonials />

        {/* Dedicated Growth Team: Meet The Operators */}
        <Team 
          onOpenBooking={() => setIsBookingOpen(true)} 
          onScheduleCall={handleScheduleCall}
        />

        {/* CTA Banner & Contact Form */}
        <ContactSection 
          onOpenBooking={() => setIsBookingOpen(true)} 
          onScheduleCall={handleScheduleCall}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={() => setIsBookingOpen(true)} 
        onScheduleCall={handleScheduleCall}
      />

      {/* Global Booking & Audit Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  )
}
