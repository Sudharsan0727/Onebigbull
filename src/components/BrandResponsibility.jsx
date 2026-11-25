import { useInView } from '../hooks/useInView'
import waveSvg from '../assets/img/wave.svg'

export default function BrandResponsibility({ onOpenBooking, onScheduleCall }) {
  const [cardRef, isCardInView] = useInView({ threshold: 0.15 })

  return (
    <section 
      id="responsibility" 
      className="bg-[#16151a] py-14 sm:py-16 lg:py-20 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* NuReach Signature Card: your-brand_card with scroll reveal & wave animation */}
        <div 
          ref={cardRef}
          className={`your-brand_card relative rounded-[12px] bg-[#16151a] py-9 sm:py-12 lg:py-12 px-5 sm:px-10 lg:px-14 overflow-hidden flex flex-col justify-center items-start reveal-scale ${isCardInView ? 'is-revealed' : ''}`}
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.08))',
            boxShadow: '4px 0 14px 4px #16A45240',
          }}
        >
          
          {/* Wave SVG Wireframe Decoration with NuReach 3D Rotate & Skew Animation */}
          <img 
            src={waveSvg} 
            alt="" 
            aria-hidden="true"
            className="brand-card-wave pointer-events-none select-none z-0" 
          />

          <div className="div-block-12 relative z-10 max-w-xl text-left">
            <h2 className="text-[28px] sm:text-3xl lg:text-[34px] font-semibold text-white tracking-tight leading-[1.2] mb-4 font-syne">
              Your Brand, Our{' '}
              <span className="text-[#16A452]">
                Responsibility.
              </span>
            </h2>

            <p className="text-xs sm:text-[13.5px] text-white/80 font-normal leading-relaxed mb-6 max-w-lg font-syne">
              We are not the typical &ldquo;ads agency&rdquo;. We&rsquo;re a Full Stack E-commerce Growth Partner. Where we have the ability to become full partners in your business... minus the equity! Whether your brand needs paid advertising, retention marketing, conversion rate optimization, or user generated content, our team has the capabilities to help grow your brand in all facets DTC.
            </p>

            <div>
              <button
                onClick={onScheduleCall || onOpenBooking}
                className="bg-white text-black font-semibold text-xs sm:text-[13px] px-6 py-2.5 rounded-xl hover:bg-white/90 hover-lift transition-all shadow-sm cursor-pointer"
              >
                Schedule Call
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
