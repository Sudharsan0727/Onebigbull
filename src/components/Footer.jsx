import { useInView } from '../hooks/useInView'
import logoWhite from '../assets/img/one-big-bull-logo-white.png'

export default function Footer({ onOpenBooking, onScheduleCall }) {
  const [footerRef, isFooterInView] = useInView({ threshold: 0.15 })

  const footerLinksCol1 = [
    { name: 'Our Services', href: '#services' },
    { name: 'About Us', href: '#responsibility' },
    { name: 'GROWTH Studies', href: '#case-studies' },
  ]

  const footerLinksCol2 = [
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-[#16151a] text-white py-8 sm:py-10 lg:py-12 border-t border-black overflow-hidden">
      <div ref={footerRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start justify-between reveal-fade-up ${isFooterInView ? 'is-revealed' : ''}`}>
          
          {/* Left Column: Logo on top, Tagline below, Copyright below */}
          <div className="md:col-span-6 flex flex-col items-start space-y-3">
            {/* Logo on top */}
            <a href="#" className="inline-block hover:opacity-80 hover-lift transition-all">
              <img
                src={logoWhite}
                alt="One Big Bull"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </a>

            {/* Tagline */}
            <p className="text-white/70 text-sm sm:text-base font-medium">
              AI Ecommerce Growth Marketing Agency
            </p>

            {/* Copyright */}
            <div className="text-xs text-white/50 font-syne pt-2">
              &copy; {new Date().getFullYear()} One Big Bull. All rights reserved.
            </div>
          </div>

          {/* Right Columns: Header-matching links */}
          <div className="md:col-span-6 grid grid-cols-2 gap-4 sm:gap-8 md:gap-12">
            {/* Column 1 */}
            <div className="flex flex-col space-y-3">
              {footerLinksCol1.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#16A452] text-xs sm:text-[13px] font-semibold tracking-wider uppercase font-syne transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-3">
              {footerLinksCol2.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#16A452] text-xs sm:text-[13px] font-semibold tracking-wider uppercase font-syne transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={onScheduleCall || onOpenBooking}
                className="text-left text-white hover:text-[#16A452] text-xs sm:text-[13px] font-semibold tracking-wider uppercase font-syne transition-all duration-200 hover:translate-x-1 cursor-pointer"
              >
                SCHEDULE CALL
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}
