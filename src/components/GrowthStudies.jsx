import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView } from '../hooks/useInView'
import resultsStamp from '../assets/img/Blush Wave LinkedIn Banner.png'
import havenLogo from '../assets/img/haven.png'

gsap.registerPlugin(ScrollTrigger)

export default function GrowthStudies({ onOpenBooking, onScheduleCall }) {
  const containerRef = useRef(null)
  const [case1Ref, isCase1InView] = useInView({ threshold: 0.1 })
  const [case2Ref, isCase2InView] = useInView({ threshold: 0.1 })
  const metric1Ref = useRef(null)
  const metric2Ref = useRef(null)
  const metric3Ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Metric pop and pulse animation on scroll
      const metrics = [metric1Ref.current, metric2Ref.current, metric3Ref.current].filter(Boolean)
      if (metrics.length > 0) {
        gsap.from(metrics, {
          scrollTrigger: {
            trigger: metrics[0],
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          scale: 0.5,
          opacity: 0,
          y: 20,
          stagger: 0.15,
          duration: 0.8,
          ease: 'back.out(1.7)',
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="case-studies" className="bg-[#ffffff] py-0 overflow-hidden">
      
      {/* CASE STUDY 1: Top (Light Background #ffffff) */}
      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl lg:max-w-6xl mx-auto">
        <div ref={case1Ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className={`text-left max-w-lg reveal-fade-up ${isCase1InView ? 'is-revealed' : ''}`}>
            <h2 className="text-[34px] sm:text-4xl lg:text-[44px] font-semibold text-black tracking-tight mb-5 font-syne leading-[1.15]">
              View Our Collective <br className="hidden sm:inline" />
              Growth Studies
            </h2>
            <p className="text-xs sm:text-[13.5px] font-normal text-black leading-relaxed mb-8 max-w-md font-syne">
              We operate as a full-stack growth partner. Paid Ads. Retention Marketing. CRO. UGC. And even with our excellent case studies, most of our results are never posted. So here&rsquo;s just that RESULTS THREAD
            </p>
            <button
              onClick={onScheduleCall || onOpenBooking}
              className="bg-transparent border border-black rounded-lg sm:rounded-xl px-6 py-2.5 text-xs sm:text-sm font-semibold text-black hover:bg-black hover:text-white hover-lift transition-all cursor-pointer font-syne"
            >
              Schedule A Call
            </button>
          </div>

          {/* Right 4-Quadrant Visual (NuReach Expanding Green Cross Lines) */}
          <div className={`relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] mx-auto aspect-square reveal-scale delay-100 ${isCase1InView ? 'is-revealed' : ''}`}>
            {/* Center Vertical & Horizontal Expanding 4px Green (#3ea9a2) Lines */}
            <div className={`case-line-v ${isCase1InView ? 'is-revealed' : ''}`}></div>
            <div className={`case-line-h ${isCase1InView ? 'is-revealed' : ''}`}></div>

            <div className="grid grid-cols-2 grid-rows-2 h-full">
              {/* Quadrant 1: Purple RESULTS Stamp Badge Image */}
              <div className="flex items-center justify-center p-2.5 sm:p-4 cursor-pointer group">
                <img 
                  src={resultsStamp} 
                  alt="Results" 
                  className="w-28 sm:w-40 lg:w-48 h-auto object-contain pointer-events-none select-none -rotate-12 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300" 
                />
              </div>

              {/* Quadrant 2: Paid Advertising */}
              <div className="flex flex-col items-center justify-center p-2.5 sm:p-4 text-center cursor-pointer group hover-lift">
                <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-[#3ea9a2] fill-current mb-1.5 sm:mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                  <path d="m4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8l-8 8z"/>
                </svg>
                <span className="text-xs sm:text-[15px] font-semibold text-black font-syne group-hover:text-[#16A452] transition-colors leading-tight">
                  Paid Advertising
                </span>
              </div>

              {/* Quadrant 3: Retention Marketing */}
              <div className="flex flex-col items-center justify-center p-2.5 sm:p-4 text-center cursor-pointer group hover-lift">
                <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-[#3ea9a2] fill-current mb-1.5 sm:mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                  <path d="m4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8l-8 8z"/>
                </svg>
                <span className="text-xs sm:text-[15px] font-semibold text-black font-syne group-hover:text-[#16A452] transition-colors leading-tight">
                  Retention Marketing
                </span>
              </div>

              {/* Quadrant 4: CRO & UGC */}
              <div className="flex flex-col items-center justify-center p-2.5 sm:p-4 text-center cursor-pointer group hover-lift">
                <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-[#3ea9a2] fill-current mb-1.5 sm:mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                  <path d="m4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8l-8 8z"/>
                </svg>
                <span className="text-xs sm:text-[15px] font-semibold text-black font-syne group-hover:text-[#16A452] transition-colors leading-tight">
                  CRO &amp; UGC
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CASE STUDY 2: Bottom (Dark #16151a Background, Haven Bag) */}
      <div className="bg-[#16151a] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-y border-black">
        <div className="max-w-5xl lg:max-w-6xl mx-auto">
          <div ref={case2Ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* 4-Quadrant Visual (Left on desktop) */}
            <div className={`relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] mx-auto aspect-square reveal-scale ${isCase2InView ? 'is-revealed' : ''}`}>
              {/* Expanding 4px Green Line Split (#3ea9a2) */}
              <div className={`case-line-v ${isCase2InView ? 'is-revealed' : ''}`}></div>
              <div className={`case-line-h ${isCase2InView ? 'is-revealed' : ''}`}></div>

              <div className="grid grid-cols-2 grid-rows-2 h-full">
                {/* Quadrant 1: Haven Bag Logo */}
                <div className="flex items-center justify-center p-2.5 sm:p-4 cursor-pointer group">
                  <img 
                    src={havenLogo} 
                    alt="Haven Bag Co" 
                    className="w-28 sm:w-36 lg:w-48 h-auto object-contain pointer-events-none select-none transition-transform duration-300 group-hover:scale-105" 
                  />
                </div>

                {/* Quadrant 2: ₹70K Highest Revenue Month */}
                <div ref={metric1Ref} className="flex flex-col items-center justify-center p-3 sm:p-5 text-center cursor-pointer group hover-lift">
                  <div className="flex items-center justify-center gap-2 sm:gap-2.5 mb-2 sm:mb-2.5">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-7 sm:h-7 text-[#3ea9a2] fill-current transition-transform duration-300 group-hover:-translate-y-1">
                      <path d="m4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8l-8 8z"/>
                    </svg>
                    <span className="text-2xl sm:text-4xl lg:text-[70px] font-bold text-[#3ea9a2] font-syne leading-none group-hover:scale-105 transition-transform tracking-tight">
                      ₹70K
                    </span>
                  </div>
                  <span className="text-xs sm:text-base lg:text-[30px] font-bold text-[#16A452] font-syne leading-tight">
                    Highest Revenue Month
                  </span>
                </div>

                {/* Quadrant 3: 2000% Sales Growth YTD */}
                <div ref={metric2Ref} className="flex flex-col items-center justify-center p-3 sm:p-5 text-center cursor-pointer group hover-lift">
                  <div className="flex items-center justify-center gap-2 sm:gap-2.5 mb-2 sm:mb-2.5">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-7 sm:h-7 text-[#3ea9a2] fill-current transition-transform duration-300 group-hover:-translate-y-1">
                      <path d="m4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8l-8 8z"/>
                    </svg>
                    <span className="text-2xl sm:text-4xl lg:text-[70px] font-bold text-[#3ea9a2] font-syne leading-none group-hover:scale-105 transition-transform tracking-tight">
                      2000%
                    </span>
                  </div>
                  <span className="text-xs sm:text-base lg:text-[30px] font-bold text-[#16A452] font-syne leading-tight">
                    Sales Growth YTD
                  </span>
                </div>

                {/* Quadrant 4: 3.51x Blended ROAS */}
                <div ref={metric3Ref} className="flex flex-col items-center justify-center p-3 sm:p-5 text-center cursor-pointer group hover-lift">
                  <div className="flex items-center justify-center gap-2 sm:gap-2.5 mb-2 sm:mb-2.5">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-7 sm:h-7 text-[#3ea9a2] fill-current transition-transform duration-300 group-hover:-translate-y-1">
                      <path d="m4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8l-8 8z"/>
                    </svg>
                    <span className="text-2xl sm:text-4xl lg:text-[70px] font-bold text-[#3ea9a2] font-syne leading-none group-hover:scale-105 transition-transform tracking-tight">
                      3.51x
                    </span>
                  </div>
                  <span className="text-xs sm:text-base lg:text-[30px] font-bold text-[#16A452] font-syne leading-tight">
                    Blended ROAS
                  </span>
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className={`text-left max-w-xl reveal-fade-up delay-100 ${isCase2InView ? 'is-revealed' : ''}`}>
              <h2 className="text-[34px] sm:text-4xl lg:text-[44px] font-semibold text-white tracking-tight mb-5 font-syne leading-[1.15]">
                Scaling From ₹0 &ndash; <br className="hidden sm:inline" />
                ₹70K/month in 6 MONTHS
              </h2>
              <p className="text-xs sm:text-[13.5px] font-normal text-white/90 leading-relaxed mb-8 max-w-md font-syne">
                Amber came to us through a referral from an existing client. Starting from absolute SCRATCH we&rsquo;ve been able to grow their brand to over ₹70,000/month in just 6 months.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#16A452] text-white border border-black rounded-lg sm:rounded-xl px-6 py-2.5 text-xs sm:text-sm font-semibold hover:bg-white hover:text-black hover-lift transition-all cursor-pointer font-syne"
                >
                  Learn More
                </button>
                <button
                  onClick={onScheduleCall || onOpenBooking}
                  className="bg-[#ffffff] text-black border border-black rounded-lg sm:rounded-xl px-6 py-2.5 text-xs sm:text-sm font-semibold hover:bg-[#16A452] hover:text-white hover-lift transition-all cursor-pointer font-syne"
                >
                  Schedule Call
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
