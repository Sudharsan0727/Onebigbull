import { useInView } from '../hooks/useInView'
import animigoLogo from '../assets/img/client-one/animigo.png'
import cheekyLogo from '../assets/img/client-one/cheeky.png'
import javvyLogo from '../assets/img/client-one/javvy.svg'
import noberaLogo from '../assets/img/client-one/nobera.jpeg'
import onnitLogo from '../assets/img/client-one/onnit.png'
import paramparaLogo from '../assets/img/client-one/parampara.avif'
import shinmestyLogo from '../assets/img/client-one/shinmesty.png'
import shytobuyLogo from '../assets/img/client-one/shytobuy.svg'
import sparoLogo from '../assets/img/client-one/sparo_logo.webp'
import theHahaToysLogo from '../assets/img/client-one/the-haha-toys.png'
import trulyLogo from '../assets/img/client-one/truly.jpeg'
import tvishiLogo from '../assets/img/client-one/tvishi.avif'
import wLogo from '../assets/img/client-one/w.jpeg'

export default function BrandMarquee() {
  const [titleRef, isTitleInView] = useInView({ threshold: 0.1 })

  const brandLogos = [
    { name: 'Animigo', src: animigoLogo },
    { name: 'Cheeky', src: cheekyLogo },
    { name: 'Javvy', src: javvyLogo },
    { name: 'Nobera', src: noberaLogo },
    { name: 'Onnit', src: onnitLogo },
    { name: 'Parampara', src: paramparaLogo },
    { name: 'Shinmesty', src: shinmestyLogo },
    { name: 'ShyToBuy', src: shytobuyLogo },
    { name: 'Sparo', src: sparoLogo },
    { name: 'The Haha Toys', src: theHahaToysLogo },
    { name: 'Truly', src: trulyLogo },
    { name: 'Tvishi', src: tvishiLogo },
    { name: 'W', src: wLogo },
  ]

  // Double items for seamless infinite marquee loop (100% to -50% translation)
  const marqueeLogos = [...brandLogos, ...brandLogos]

  return (
    <section className="section_logo bg-[#ffffff] py-16 sm:py-20 lg:py-24 overflow-hidden relative">
      <div className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div 
          ref={titleRef}
          className={`text-center mb-8 sm:mb-12 reveal-fade-up ${isTitleInView ? 'is-revealed' : ''}`}
        >
          <h2 className="text-[34px] sm:text-4xl lg:text-[42px] font-semibold text-black tracking-tight font-syne leading-[1.15]">
            Trusted By Brands You Know And Love
          </h2>
        </div>

        {/* NuReach Exact logo-fade & logo_component */}
        <div className="logo-fade flex justify-center overflow-hidden">
          <div className="logo_component relative flex overflow-hidden w-full py-2">
            
            {/* The Animated Logo Marquee Strip on Theme Green (#16A45299) */}
            <div className="logo-list-marquee flex items-center flex-none whitespace-nowrap bg-[#16A45299] py-4 sm:py-5">
              {marqueeLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center px-6 sm:px-8 flex-shrink-0 group cursor-pointer"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-8 sm:max-h-10 lg:max-h-11 w-auto max-w-[130px] sm:max-w-[150px] object-contain mix-blend-multiply grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 pointer-events-none select-none"
                  />
                </div>
              ))}
            </div>

            {/* NuReach Exact fade-div-left and fade-div-right */}
            <div 
              className="fade-div-left pointer-events-none absolute inset-y-0 left-0 w-1/5 z-10"
              style={{
                backgroundImage: 'linear-gradient(to right, #ffffff 6%, rgba(255, 255, 255, 0))'
              }}
            ></div>
            <div 
              className="fade-div-right pointer-events-none absolute inset-y-0 right-0 w-1/5 z-10"
              style={{
                backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff)'
              }}
            ></div>

          </div>
        </div>

      </div>
    </section>
  )
}
