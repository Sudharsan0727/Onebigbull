import { useRef, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import circleGraphic from '../assets/img/circle-9.svg'
import mukeshImg from '../assets/img/team/Mukesh Veerasamy.jpeg'
import manikandanImg from '../assets/img/team/Manikandan Dharmaraj.jpeg'
import balaImg from '../assets/img/team/bala.jpeg'
import harshitaImg from '../assets/img/team/Harshita.jpeg'
import meenakshiImg from '../assets/img/team/Meenakshi rajkumar.jpeg'

gsap.registerPlugin(ScrollTrigger)

export default function Team({ onOpenBooking, onScheduleCall }) {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)
  const cardRefs = useRef([])
  const ctaRef = useRef(null)

  const teamMembers = [
    {
      name: 'Mukesh Veerasamy',
      role: 'Founder & CEO',
      image: mukeshImg,
    },
    {
      name: 'Meenakshi',
      role: 'Sr. Paid Advertising Specialist',
      image: meenakshiImg,
    },
    {
      name: 'Manikandan',
      role: 'Jr. Paid Advertising Specialist',
      image: manikandanImg,
    },
    {
      name: 'Harshita',
      role: 'Creative Strategist',
      image: harshitaImg,
    },
    {
      name: 'Bala',
      role: 'CRO Lead',
      image: balaImg,
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header GSAP ScrollTrigger Reveal
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      // 2. Cards Waterfall Stagger with GSAP ScrollTrigger
      gsap.from(cardRefs.current, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
        y: 50,
        opacity: 0,
        scale: 0.94,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
      })

      // 3. Bottom CTA GSAP Reveal
      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        y: 25,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Interactive GSAP 3D Magnetic Tilt per Card
  const handleCardMouseMove = (e, idx) => {
    const card = cardRefs.current[idx]
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    gsap.to(card, {
      rotateY: x * 10,
      rotateX: -y * 10,
      transformPerspective: 900,
      duration: 0.35,
      ease: 'power1.out',
    })
  }

  const handleCardMouseLeave = (idx) => {
    const card = cardRefs.current[idx]
    if (!card) return
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.65,
      ease: 'power2.out',
    })
  }

  return (
    <section 
      id="team" 
      ref={sectionRef}
      className="bg-[#ffffff] py-20 sm:py-24 lg:py-28 relative overflow-hidden"
    >
      
      {/* Decorative Ambient Background Animated Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 pointer-events-none opacity-[0.14] select-none z-0">
        <img 
          src={circleGraphic} 
          alt="" 
          className="w-full h-full object-contain animate-spin-slow"
        />
      </div>
      <div className="absolute -bottom-36 -right-36 w-[420px] h-[420px] pointer-events-none opacity-[0.12] select-none z-0">
        <img 
          src={circleGraphic} 
          alt="" 
          className="w-full h-full object-contain animate-spin-reverse-slow"
        />
      </div>

      {/* Subtle Light Green Glow Blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#16A452]/5 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16A452]/10 border border-[#16A452]/25 mb-4 shadow-sm hover:scale-105 transition-transform duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A452] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16A452]"></span>
            </span>
            <span className="text-xs font-bold text-[#16A452] uppercase tracking-wider font-syne">
              Leadership &amp; Growth Team
            </span>
          </div>

          <h2 className="text-[34px] sm:text-4xl lg:text-[46px] font-semibold text-black tracking-tight mb-4 font-syne leading-[1.14]">
            Meet The Minds Behind <br className="hidden sm:inline" />
            Your Brand&rsquo;s Growth
          </h2>

          <p className="text-sm sm:text-base text-black/80 font-medium leading-relaxed font-syne max-w-2xl mx-auto">
            A dedicated squad of performance marketers, media buyers, and creative strategists scaling your brand with surgical precision.
          </p>
        </div>

        {/* 5 Team Member Cards Grid with GSAP ScrollTrigger & 3D Tilt */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-7"
        >
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              onMouseMove={(e) => handleCardMouseMove(e, idx)}
              onMouseLeave={() => handleCardMouseLeave(idx)}
              style={{ transformStyle: 'preserve-3d' }}
              className="team-card group bg-white border-2 border-black rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between cursor-pointer"
            >
              {/* Animated Rotating Growth Circle inside Card Header on Hover */}
              <img 
                src={circleGraphic} 
                alt="" 
                className="team-growth-circle"
              />

              <div className="relative z-10">
                {/* Photo Container with Shimmer Sheen & Zoom Effect */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gray-100 border border-black/15 mb-4 shadow-inner flex items-center justify-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#16A452]/10 to-[#16A452]/25 text-[#16A452] transition-all duration-500 group-hover:scale-105">
                      <span className="font-syne text-3xl sm:text-4xl font-extrabold tracking-wider">
                        {member.initials || member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  
                  {/* Photo Shine Sweep on Hover */}
                  <div className="team-shine" />

                  {/* Gradient Overlay & Floating LinkedIn Button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3 z-10">
                    <a
                      href={member.linkedin || 'https://www.linkedin.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-black flex items-center justify-center text-black hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md hover:scale-110 cursor-pointer"
                      aria-label={`${member.name} LinkedIn Profile`}
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-syne font-semibold text-base sm:text-lg text-black tracking-tight mb-1 leading-snug group-hover:text-[#16A452] transition-colors duration-300">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="font-syne text-xs font-bold text-[#16A452] uppercase tracking-wider leading-tight">
                  {member.role}
                </p>
              </div>

              {/* Bottom Subtle Divider & Live Pulse Status */}
              <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between text-xs text-black/70 font-syne font-semibold relative z-10">
                <span className="group-hover:text-black transition-colors">Growth Partner</span>
                <span className="inline-flex items-center gap-1.5 text-[#16A452] font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A452] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16A452]"></span>
                  </span>
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner with GSAP ScrollTrigger */}
        <div ref={ctaRef} className="mt-20 sm:mt-24 lg:mt-28 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 bg-black text-white p-2 sm:p-2.5 sm:pr-6 rounded-2xl sm:rounded-full border-2 border-black shadow-lg hover:shadow-[6px_6px_0px_0px_#16A452] transition-all duration-300">
            <span className="text-xs sm:text-sm font-semibold font-syne px-4 py-1">
              Ready to partner with dedicated operators?
            </span>
            <button
              onClick={onScheduleCall || onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#16A452] text-white hover:bg-white hover:text-black px-5 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer font-syne group/btn"
            >
              <span>Talk To Our Team</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
