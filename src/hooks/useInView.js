import { useState, useEffect, useRef } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // If IntersectionObserver is not supported, just show immediately
    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      // Re-trigger every time element enters or leaves the viewport (up and down)
      setIsInView(entry.isIntersecting)
      
      if (options.once && entry.isIntersecting) {
        observer.unobserve(element)
      }
    }, {
      threshold: options.threshold ?? 0.1,
      rootMargin: options.rootMargin ?? '0px 0px -30px 0px',
      ...options,
    })

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [options.threshold, options.rootMargin, options.once])

  return [ref, isInView]
}
