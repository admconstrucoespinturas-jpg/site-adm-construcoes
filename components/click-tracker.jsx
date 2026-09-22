'use client'
import { useEffect } from 'react'
import { trackWhatsappClick, trackPhoneClick } from '@/lib/track'

export default function ClickTracker() {
  useEffect(() => {
    const handler = (e) => {
      const a = e.target instanceof Element ? e.target.closest('a[href]') : null
      if (!a) return
      const href = a.getAttribute('href') || ''
      if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
        trackWhatsappClick()
      } else if (href.startsWith('tel:')) {
        trackPhoneClick()
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])
  return null
}
