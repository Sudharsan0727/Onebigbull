import { useState } from 'react'
import { X, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react'
import logoImg from '../assets/img/one-big-bull-logo-white.png'

// Google Apps Script Web App URL for contact form submissions
const GOOGLE_SCRIPT_URL = 
  import.meta.env.VITE_GOOGLE_SHEET_URL || 
  'https://script.google.com/macros/s/AKfycbzCXX8Zlo955iL8G6TVt5DCxOMQY6AEzfvLbPU5kWTcUSmtXFnfe2WQXRQ4Vm9FMW8/exec'

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    revenue: '₹50k - ₹100k/mo',
    services: 'Paid Ads',
    message: ''
  })

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setIsSubmitting(true)

    try {
      // URLSearchParams guarantees standard x-www-form-urlencoded format for Google Apps Script e.parameter
      const payload = new URLSearchParams()
      payload.append('name', formData.name)
      payload.append('email', formData.email)
      payload.append('website', formData.website)
      payload.append('revenue', formData.revenue)
      payload.append('services', formData.services)
      payload.append('message', formData.message)
      payload.append('timestamp', new Date().toLocaleString())

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: payload,
        mode: 'no-cors',
      })

      setSubmitted(true)
      setTimeout(() => {
        window.open('https://calendly.com/mukeshveerasamyofficial/30-mins-growth-strategy-session-and-audit-clone', '_blank', 'noopener,noreferrer')
      }, 1200)
    } catch (err) {
      console.error('Error submitting form:', err)
      setErrorMsg('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container with White (#ffffff) and Black Borders */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#ffffff] border-2 border-black rounded-[20px] shadow-2xl z-10 my-8">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors z-20 cursor-pointer"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="p-5 sm:p-10">
          {!submitted ? (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#16151a] px-3.5 py-1.5 rounded-xl inline-block shadow-sm">
                  <img
                    src={logoImg}
                    alt="One Big Bull"
                    className="h-7 w-auto object-contain"
                  />
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-[#16A452]/20 border border-black/20 text-black font-bold uppercase tracking-wider font-space">
                  Discovery Call
                </span>
              </div>

              <h2 className="text-[26px] sm:text-4xl font-semibold text-black tracking-tight mb-2 font-syne">
                Schedule A Call With Our Team
              </h2>
              <p className="text-sm font-semibold text-black/80 mb-8 leading-relaxed font-syne">
                Let&rsquo;s discuss your current advertising, retention flows, and conversion metrics to map out your next revenue stage.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-black mb-1 uppercase tracking-wider font-space">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jordan Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-black rounded-[12px] text-sm text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#16A452] transition-all font-syne font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-black mb-1 uppercase tracking-wider font-space">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@yourbrand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-black rounded-[12px] text-sm text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#16A452] transition-all font-syne font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-black mb-1 uppercase tracking-wider font-space">
                      Brand Website *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="https://yourbrand.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-black rounded-[12px] text-sm text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#16A452] transition-all font-syne font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-black mb-1 uppercase tracking-wider font-space">
                      Monthly Revenue
                    </label>
                    <select
                      value={formData.revenue}
                      onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-black rounded-[12px] text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#16A452] transition-all font-syne font-semibold cursor-pointer"
                    >
                      <option value="Under ₹25k/mo">Under ₹25k/mo</option>
                      <option value="₹25k - ₹50k/mo">₹25k - ₹50k/mo</option>
                      <option value="₹50k - ₹100k/mo">₹50k - ₹100k/mo</option>
                      <option value="₹100k - ₹500k/mo">₹100k - ₹500k/mo</option>
                      <option value="₹500k+/mo">₹500k+/mo (Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-black mb-1 uppercase tracking-wider font-space">
                    Service Interest
                  </label>
                  <select
                    value={formData.services}
                    onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-black rounded-[12px] text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#16A452] transition-all font-syne font-semibold cursor-pointer"
                  >
                    <option value="Paid Ads">Paid Ads</option>
                    <option value="Meta">Meta</option>
                    <option value="Google Ads">Google Ads</option>
                    <option value="ChatGPT Ads">ChatGPT Ads</option>
                    <option value="Quick Commerce">Quick Commerce</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-black mb-1 uppercase tracking-wider font-space">
                    Notes / Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your brand targets..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-black rounded-[12px] text-sm text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#16A452] transition-all font-syne font-semibold resize-none"
                  ></textarea>
                </div>

                {errorMsg && (
                  <p className="text-xs font-semibold text-red-600 font-syne text-center">{errorMsg}</p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="nureach-btn-dark w-full py-4 text-base font-bold shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm Call Booking</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="py-10 text-center">
              <div className="w-16 h-16 rounded-full bg-[#3da9a2]/20 text-[#3da9a2] border border-[#3da9a2] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-2 font-syne">
                Call Scheduled!
              </h3>
              <p className="text-black/80 max-w-md mx-auto mb-8 text-sm font-semibold font-syne">
                Thank you, <span className="text-black font-extrabold">{formData.name}</span>. We&rsquo;ll review <span className="underline">{formData.website}</span> and send calendar confirmation links to <span className="font-mono">{formData.email}</span>.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://calendly.com/mukeshveerasamyofficial/30-mins-growth-strategy-session-and-audit-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nureach-btn text-sm px-6 py-2.5 inline-flex items-center gap-2"
                >
                  <span>Select Time on Calendly</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    onClose()
                  }}
                  className="bg-gray-100 hover:bg-gray-200 text-black text-sm px-6 py-2.5 rounded-full font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
