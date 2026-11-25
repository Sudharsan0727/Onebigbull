import { useInView } from '../hooks/useInView'
import capaGraphic from '../assets/img/Capa 2.svg'

export default function ContactSection({ onOpenBooking, onScheduleCall }) {
  const [contentRef, isContentInView] = useInView({ threshold: 0.1 })

  return (
    <section id="contact" className="bg-[#ffffff] py-16 sm:py-28 lg:py-36 relative overflow-hidden flex items-center justify-center min-h-[400px] sm:min-h-[520px]">

      {/* Decorative Waving Ribbon Capa 2.svg graphic in the center bottom */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[22%] pointer-events-none select-none z-0 flex items-center justify-center">
        <img
          src={capaGraphic}
          alt=""
          aria-hidden="true"
          className="cta-wave-animated w-[460px] sm:w-[780px] lg:w-[920px] max-w-none opacity-40 sm:opacity-45 lg:opacity-50"
        />
      </div>

      <div 
        ref={contentRef}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal-fade-up ${isContentInView ? 'is-revealed' : ''}`}
      >

        {/* Contact Us Eyebrow */}
        <div className="text-xs sm:text-[13px] font-semibold text-black mb-3 font-syne tracking-wide">
          Contact Us
        </div>

        {/* Lets Grow Together Heading */}
        <h2 className="text-[36px] sm:text-5xl lg:text-[56px] font-semibold text-black tracking-tight mb-5 font-syne leading-[1.12]">
          Lets Grow Together
        </h2>

        {/* Subtitle / Paragraph */}
        <p className="text-xs sm:text-[13.5px] font-normal text-black leading-relaxed mb-8 max-w-md mx-auto font-syne">
          Need help scaling your brand with the aid of a Growth Partner? Schedule a call today to see if we can help!
        </p>

        {/* Schedule Call Button */}
        <div className="flex justify-center">
          <button
            onClick={onScheduleCall || onOpenBooking}
            className="bg-transparent border border-black rounded-lg sm:rounded-xl px-7 py-2.5 text-xs sm:text-sm font-semibold text-black hover:bg-black hover:text-white hover-lift transition-all cursor-pointer font-syne shadow-none"
          >
            Schedule Call
          </button>
        </div>

      </div>
    </section>
  )
}
