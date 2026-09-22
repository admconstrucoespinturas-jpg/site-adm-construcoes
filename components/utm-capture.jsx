'use client'
import { useEffect } from 'react'

export default function UtmCapture() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const utm_source = params.get('utm_source')
      const utm_campaign = params.get('utm_campaign')
      if (utm_source) sessionStorage.setItem('utm_source', utm_source)
      if (utm_campaign) sessionStorage.setItem('utm_campaign', utm_campaign)
    } catch {}
  }, [])
  return null
}
