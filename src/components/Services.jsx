import { useState } from 'react'
import { X, CheckCircle2 } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import paidTrafficSvg from '../assets/img/service-paid-traffic.svg'
import retentionSvg from '../assets/img/service-retention.svg'
import croSvg from '../assets/img/service-cro.svg'
import ugcSvg from '../assets/img/service-ugc.svg'
import circleSvg from '../assets/img/circle-9.svg'

export default function Services({ onOpenBooking }) {
  const [activeModal, setActiveModal] = useState(null)
  const [headerRef, isHeaderInView] = useInView({ threshold: 0.1 })
  const [gridRef, isGridInView] = useInView({ threshold: 0.1 })

  const services = [
    {
      id: 'paid-traffic',
      borderClass: 'border-b-2 lg:border-r-2 border-black',
      title: 'Paid Traffic',
      icon: paidTrafficSvg,
      description: 'Want to drive conversions via Meta, Google We have the expertise and experience to help you reach your target audience and increase your sales.',
      metrics: ['3.8x Average ROAS across Meta', 'Algorithmic creative testing (20+ hooks/wk)', 'Day-1 customer acquisition profitability'],
      deliverables: [
        'Multi-channel campaign restructuring & scaling budgets',
        'Direct-response creative iteration & hook variations',
        'Server-side CAPI tracking & Triple Whale attribution',
        'Automated scaling rules & cost-per-acquisition control'
      ]
    },
    {
      id: 'retention-marketing',
      borderClass: 'border-b-2 border-black',
      title: 'Retention Marketing',
      icon: retentionSvg,
      description: 'Using Email/SMS to strengthen customer relationships, increase LTV and boost brand loyalty. Expect more buyers with our direct, personalized engagement strategies.',
      metrics: ['35% - 50% Store Revenue from Klaviyo', '+65% Increase in 60-Day Repeat Repurchase', 'Deliverability safeguards & 99%+ inbox placement'],
      deliverables: [
        'VIP tier & churn-prevention automated flows',
        'Personalized SMS marketing (Attentive & Postscript)',
        'Custom interactive email design & direct-response copy',
        'Advanced list hygiene, zero-party data segmentation'
      ]
    },
    {
      id: 'cro',
      borderClass: 'border-b-2 lg:border-b-0 lg:border-r-2 border-black',
      title: 'Conversion Rate Optimization',
      icon: croSvg,
      description: 'Increase your brands revenue, and profitability without spending a single cent more on traffic with our multi-funnel CRO process.. We strategize and improve AOV & CVR',
      metrics: ['+28% Average Conversion Rate Lift', '+₹18 Average Order Value (AOV) Boost', 'Rapid 14-Day A/B Test Sprints'],
      deliverables: [
        'Landing page UX & product page wireframe overhaul',
        'Slide-cart bundles & dynamic free shipping bars',
        'Mobile checkout friction elimination',
        'Post-purchase 1-click upsell architecture'
      ]
    },
    {
      id: 'ugc',
      borderClass: '',
      title: 'User Generated Content',
      icon: ugcSvg,
      description: 'Leverage the power of UGC for your e-commerce brand. We connect you to our exclusive network of vetted content creators ready to produce on-brand, on-trend, and high-performing content that resonates with your audience.',
      metrics: ['80+ Vetted DTC Creator Network', '3-Second Hook Retention > 45%', 'Full Commercial Usage Rights Included'],
      deliverables: [
        'Psychological scriptwriting with direct-response hooks',
        'Creator sourcing, vetting & product shipment management',
        'High-paced video editing with kinetic subtitles & sound design',
        'Rapid iteration of winning visual angles'
      ]
    }
  ]

  const active = services.find(s => s.id === activeModal)

  return (
    <section id="services" className="bg-[#ffffff] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* NuReach Problem Wrapper Title */}
        <div 
          ref={headerRef}
          className={`text-center max-w-4xl mx-auto mb-10 sm:mb-12 reveal-fade-up ${isHeaderInView ? 'is-revealed' : ''}`}
        >
          <h2 className="text-[34px] sm:text-4xl lg:text-[42px] font-semibold text-black tracking-tight mb-2.5 sm:mb-3 font-syne leading-[1.15]">
            Looking To Scale Your Brand?
          </h2>

          <p className="text-xs sm:text-[12.5px] lg:text-[13px] text-black font-medium mx-auto font-syne tracking-normal">
            We&rsquo;re <span className="text-[#16A452] italic font-semibold">NOT</span> the typical ads agency. We&rsquo;re Growth Partners. A team DEDICATED to your brands success. Here are the services we offer:
          </p>
        </div>

        {/* 2x2 NuReach Grid of Service Wrappers */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 lg:grid-cols-2 border-2 border-black rounded-[14px] overflow-hidden bg-transparent reveal-fade-up delay-100 ${isGridInView ? 'is-revealed' : ''}`}
        >
          {services.map((item) => (
            <div
              key={item.id}
              className={`service-card p-6 sm:p-8 lg:p-10 flex flex-col justify-between items-start text-left min-h-[290px] sm:min-h-[320px] cursor-pointer group ${item.borderClass}`}
              onClick={() => setActiveModal(item.id)}
            >
              {/* NuReach Signature Rotating Wireframe Circle SVG appearing in the top corner on hover */}
              <img 
                src={circleSvg} 
                alt="" 
                className="growth-circle" 
              />

              <div className="relative z-10 w-full">
                <img 
                  src={item.icon} 
                  alt="" 
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain object-left mb-4 sm:mb-5 pointer-events-none select-none transition-transform duration-300 group-hover:-translate-y-1" 
                />

                <h3 className="text-[22px] sm:text-2xl font-semibold text-black tracking-tight mb-2.5 font-syne leading-tight transition-colors duration-200 group-hover:text-[#16A452]">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-[13px] font-normal text-black leading-relaxed mb-6 max-w-md font-syne">
                  {item.description}
                </p>
              </div>

              <div className="relative z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveModal(item.id)
                  }}
                  className="font-syne text-xs sm:text-[13px] font-medium text-black underline underline-offset-4 hover:text-[#16A452] transition-colors cursor-pointer inline-flex items-center gap-1 group-hover:underline-offset-6"
                >
                  <span>See Examples</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Popup */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveModal(null)}
          ></div>

          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#ffffff] border-2 border-black rounded-2xl shadow-2xl p-6 sm:p-10 z-10 my-8">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <img 
                src={active.icon} 
                alt="" 
                className="w-12 h-12 object-contain" 
              />
              <h3 className="text-2xl sm:text-3xl font-bold text-black font-syne">
                {active.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base font-semibold text-black/80 mb-6 font-syne">
              {active.description}
            </p>

            <div className="mb-6 space-y-2">
              <div className="text-xs uppercase font-bold tracking-wider text-black/60 font-space">
                Core Deliverables:
              </div>
              {active.deliverables.map((d, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm font-semibold text-black">
                  <CheckCircle2 className="w-4 h-4 text-[#3da9a2] flex-shrink-0" />
                  <span>{d}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-black/20">
              <button
                onClick={() => setActiveModal(null)}
                className="text-sm font-bold text-black hover:underline"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setActiveModal(null)
                  onOpenBooking()
                }}
                className="nureach-btn-dark text-sm px-6 py-3 font-semibold"
              >
                Book Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
