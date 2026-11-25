import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'
import circleGraphic from '../assets/img/circle-9.svg'

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })

  const reviews = [
    {
      quote:
        '"Working with Nu Reach has been a game-changer for my business! In just a month, Ive seen incredible growth, thanks to their strategic approach, creative ideas and data driven insights. Their team is knowledgeable, responsive and truly invested in my success. If you\'re looking for a marketing partner that has real results, I highly recommend them!"',
    },
    {
      quote:
        '"An absolutely amazing team to work with. Very easy to work with. Always communicating on time and professionally. And of course, providing amazing results!"',
    },
    {
      quote:
        '"These guys are the real deal. They are knowledgeable, honest, and just the best people! It’s scary to take the leap, but trust me when I say you won’t regret it."',
    },
    {
      quote:
        '"After working with the team we produced over 7 figures in sales in a record-breaking time. So quickly I had to help out with fulfillment while we hired more team. It was definitely crazy but nonetheless, a great problem to have!"',
    },
    {
      quote:
        '"Amazing service. Each service has someone focused on that specific task to deliver ultimate results. Great ROI and absolutely worth it."',
    },
    {
      quote:
        '"Nu Reach has been a critical part of our internal growth. They have been hands-on with all of our marketing campaigns and are always focused on driving growth while maintaining our target costs. We are very grateful for their partnership and influence."',
    },
  ]

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % reviews.length)
    setAnimKey((k) => k + 1)
  }

  const prev = () => {
    setActiveIdx((prev) => (prev - 1 + reviews.length) % reviews.length)
    setAnimKey((k) => k + 1)
  }

  // Auto-advance slider every 4.5 seconds when in view and not hovered
  useEffect(() => {
    if (!isSectionInView || isHovered) return

    const timer = setInterval(() => {
      next()
    }, 4500)

    return () => clearInterval(timer)
  }, [isSectionInView, isHovered, activeIdx])

  const card1 = reviews[activeIdx]
  const card2 = reviews[(activeIdx + 1) % reviews.length]

  return (
    <section id="testimonials" className="bg-[#16151a] text-white py-20 sm:py-24 lg:py-28 relative overflow-hidden">
      
      {/* Decorative morphing & rotating circle-9 wireframe graphic */}
      <img
        src={circleGraphic}
        alt=""
        aria-hidden="true"
        className="circle-9-animated"
      />

      <div ref={sectionRef} className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title & Subtitle */}
        <div className={`text-center max-w-2xl mx-auto mb-14 sm:mb-16 reveal-fade-up ${isSectionInView ? 'is-revealed' : ''}`}>
          <h2 className="text-[34px] sm:text-4xl lg:text-[42px] font-semibold text-white tracking-tight mb-4 font-syne leading-[1.2]">
            Don’t Listen to us Listen to Them
          </h2>
          <p className="text-xs sm:text-[13.5px] font-normal text-white/90 max-w-xl mx-auto font-syne leading-relaxed">
            See what our clients think of our products and services, and how they&rsquo;ve helped them achieve their goals
          </p>
        </div>

        {/* Testimonials Carousel Container with Left/Right Overlapping Arrows */}
        <div 
          className={`relative max-w-5xl mx-auto reveal-fade-up delay-100 ${isSectionInView ? 'is-revealed' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Left Arrow Button */}
          <button
            onClick={prev}
            className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-white/70 bg-[#16151a] hover:bg-white text-white hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95 group"
            aria-label="Previous testimonials"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current transition-colors group-hover:-translate-x-0.5"
            >
              <path
                d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z"
                fill="currentColor"
              />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={next}
            className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-white/70 bg-[#16151a] hover:bg-white text-white hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95 group"
            aria-label="Next testimonials"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current transition-colors group-hover:translate-x-0.5"
            >
              <path
                d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z"
                fill="currentColor"
              />
            </svg>
          </button>

          {/* 2-Card Grid (Desktop) / 1-Card (Mobile) */}
          <div key={animKey} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 px-2 sm:px-0 animate-quote-in">
            
            {/* Card 1 */}
            <div className="bg-black border border-white/5 hover:border-white/20 rounded-[22px] px-6 py-6 sm:p-9 lg:p-10 flex items-center min-h-[200px] sm:min-h-[250px] shadow-2xl transition-all duration-300 hover-lift">
              <p className="text-white text-xs sm:text-[13.5px] lg:text-[14px] font-normal font-syne leading-[1.7]">
                {card1.quote}
              </p>
            </div>

            {/* Card 2 (visible on tablet/desktop) */}
            <div className="hidden md:flex bg-black border border-white/5 hover:border-white/20 rounded-[22px] px-6 py-6 sm:p-9 lg:p-10 items-center min-h-[200px] sm:min-h-[250px] shadow-2xl transition-all duration-300 hover-lift">
              <p className="text-white text-xs sm:text-[13.5px] lg:text-[14px] font-normal font-syne leading-[1.7]">
                {card2.quote}
              </p>
            </div>

          </div>

          {/* Indicator Dots with Active Slide Highlight */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIdx(i)
                  setAnimKey((k) => k + 1)
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIdx ? 'w-7 bg-[#16A452]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
