import { useRef, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import vectorSvg from '../assets/img/Vector.svg'
import iconEpay from '../assets/img/noun-epay.svg'
import iconCashback from '../assets/img/noun-cashback.svg'
import iconCart from '../assets/img/noun-add-to-cart.svg'
import heroAwardImg from '../assets/img/hero-award.jpg'

gsap.registerPlugin(ScrollTrigger)

export default function Hero({ onOpenBooking, onScheduleCall }) {
  const heroContainerRef = useRef(null)
  const heroTextRef = useRef(null)
  const brushRef = useRef(null)
  const awardContainerRef = useRef(null)
  const awardCardRef = useRef(null)
  const credibilityRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance timeline for Hero Typography and CTAs
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-headline-line', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        delay: 0.1,
      })
      .from(brushRef.current, {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.7,
        ease: 'power2.out',
      }, '-=0.4')
      .from('.hero-subtitle', {
        y: 24,
        opacity: 0,
        duration: 0.7,
      }, '-=0.3')
      .from('.hero-cta-btn', {
        y: 18,
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
      }, '-=0.4')
      .from(awardCardRef.current, {
        y: 50,
        scale: 0.93,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
      }, '-=0.8')

      // 2. Credibility strip scroll trigger
      gsap.from('.credibility-item', {
        scrollTrigger: {
          trigger: credibilityRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        y: 35,
        opacity: 0,
        stagger: 0.15,
        duration: 0.75,
        ease: 'power3.out',
      })
    }, heroContainerRef)

    return () => ctx.revert()
  }, [])

  // Interactive 3D Parallax Tilt for Hero Award Card
  const handleMouseMove = (e) => {
    if (!awardCardRef.current || !awardContainerRef.current) return
    const rect = awardContainerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    gsap.to(awardCardRef.current, {
      rotateY: x * 10,
      rotateX: -y * 10,
      transformPerspective: 1000,
      ease: 'power2.out',
      duration: 0.45,
    })
  }

  const handleMouseLeave = () => {
    if (!awardCardRef.current) return
    gsap.to(awardCardRef.current, {
      rotateY: 0,
      rotateX: 0,
      ease: 'power2.out',
      duration: 0.8,
    })
  }

  return (
    <section 
      ref={heroContainerRef}
      className="bg-[#ffffff] text-black pt-20 sm:pt-24 lg:pt-28 pb-16 relative overflow-hidden"
    >
      
      {/* Main 2-Column Hero Grid - Full width extending to the right screen edge */}
      <div className="w-full mb-16 lg:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
          
          {/* Left Column: Heading & Copy */}
          <div 
            ref={heroTextRef}
            className="lg:col-span-5 pl-4 sm:pl-8 lg:pl-16 xl:pl-24 pr-4 sm:pr-6 lg:pr-8 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <h1 className="text-[35px] sm:text-4xl lg:text-[46px] xl:text-[48px] font-semibold text-black tracking-tight leading-[1.14] mb-6 font-syne capitalize">
              <span className="hero-headline-line block">We&rsquo;re your</span>
              <span className="hero-headline-line block">E-commerce</span>
              <span className="hero-headline-line relative inline-block px-1">
                <span className="relative z-10">Growth Partner</span>
                <img 
                  ref={brushRef}
                  src={vectorSvg} 
                  alt="" 
                  className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-auto z-0 pointer-events-none select-none" 
                />
              </span>
            </h1>

            <p className="hero-subtitle text-sm sm:text-base font-semibold text-black/80 leading-relaxed mb-7 max-w-lg font-syne mx-auto lg:mx-0">
              We&rsquo;re not the typical &ldquo;ads agency&rdquo;. We&rsquo;re a full stack <span className="text-[#16A452]">Growth Partner</span> for leading 7 &amp; 8-Figure E-commerce brands. Connecting consumers with products they LOVE.
            </p>

            <div className="hero-cta-btn flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onScheduleCall || onOpenBooking}
                className="nureach-btn text-sm px-6 py-2.5 shadow-sm group hover-lift cursor-pointer"
              >
                <span>Schedule A Call</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Single Feature Award Image with 3D Tilt */}
          <div 
            ref={awardContainerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-7 px-4 sm:px-8 lg:px-12 flex justify-center items-center w-full"
          >
            <div 
              ref={awardCardRef}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative w-full max-w-2xl rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-black shadow-xl transition-shadow duration-300 hover:shadow-2xl"
            >
              <img 
                src={heroAwardImg} 
                alt="One Big Bull Team Award" 
                className="w-full h-auto object-cover block pointer-events-none select-none" 
              />
            </div>
          </div>

        </div>
      </div>

      {/* 3-Point Credibility Strip with GSAP ScrollTrigger */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={credibilityRef} className="pt-6 sm:pt-10 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 text-center items-start">
            
            <div className="credibility-item flex flex-col items-center hover-lift cursor-default group">
              <div className="mb-4 sm:mb-5 flex items-center justify-center h-14 sm:h-16 transition-transform duration-300 group-hover:scale-115">
                <img 
                  src={iconEpay} 
                  alt="Partners To 20+ Brands" 
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                />
              </div>
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-black font-syne tracking-tight group-hover:text-[#16A452] transition-colors">
                Partners To 20+ Brands
              </h2>
            </div>

            <div className="credibility-item flex flex-col items-center hover-lift cursor-default group">
              <div className="mb-4 sm:mb-5 flex items-center justify-center h-14 sm:h-16 transition-transform duration-300 group-hover:scale-115">
                <img 
                  src={iconCashback} 
                  alt="₹2M+ Ad Spend Managed Monthly" 
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black font-syne tracking-tight group-hover:text-[#16A452] transition-colors">
                ₹2M+ Ad Spend Managed Monthly
              </h3>
            </div>

            <div className="credibility-item flex flex-col items-center hover-lift cursor-default group">
              <div className="mb-4 sm:mb-5 flex items-center justify-center h-14 sm:h-16 transition-transform duration-300 group-hover:scale-115">
                <img 
                  src={iconCart} 
                  alt="₹50M+ Total Revenue Generated" 
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black font-syne tracking-tight group-hover:text-[#16A452] transition-colors">
                ₹50M+ Total Revenue Generated
              </h3>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
