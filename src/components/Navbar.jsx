import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react'
import logoImg from '../assets/img/one-big-bull-logo.png'

export default function Navbar({ onOpenBooking, onScheduleCall }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Our Services', href: '#services' },
    { name: 'About Us', href: '#responsibility' },
    { name: 'GROWTH Studies', href: '#case-studies' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#16A452]/15 backdrop-blur-xl backdrop-saturate-150 border-b border-[#16A452]/25 shadow-[0_8px_30px_rgba(22,164,82,0.08)] py-3'
            : 'bg-white border-b border-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center transition-transform hover:scale-105">
            <img
              src={logoImg}
              alt="One Big Bull"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11.5px] uppercase tracking-widest font-semibold text-black hover:text-[#16A452] transition-all duration-200 hover:-translate-y-0.5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Schedule A Call Button (hidden on mobile, visible on sm and up) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onScheduleCall || onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-[10px] border border-black bg-[#ffffff] hover:bg-[#16151a] text-black hover:text-white text-[11.5px] font-semibold tracking-wide transition-all shadow-none cursor-pointer group hover-lift"
            >
              <span>Schedule A Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 hidden sm:inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-black text-black hover:bg-black hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/90 backdrop-blur-2xl lg:hidden pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-fadeIn">
          <div className="space-y-4">
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-lg font-bold text-black hover:text-[#16A452] border-b border-black/5 uppercase"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-5 h-5 text-black/40" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                if (onScheduleCall) onScheduleCall()
                else onOpenBooking()
              }}
              className="nureach-btn-dark w-full py-4 text-base font-bold shadow-md"
            >
              <span>Schedule A Call</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
