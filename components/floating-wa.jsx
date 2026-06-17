'use client'
import { useState } from 'react'
import { WhatsApp } from './icons'

export default function FloatingWA() {
  const [hov, setHov] = useState(false)
  return (
    <a
      href="https://wa.me/5548988467031"
      target="_blank" rel="noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 300,
        background: hov ? '#20BC5A' : '#25D366', color: '#fff',
        borderRadius: 999, padding: hov ? '12px 20px' : '14px',
        display: 'flex', alignItems: 'center', gap: hov ? 8 : 0,
        boxShadow: '0 4px 24px rgba(37,211,102,0.4)',
        transition: 'all 250ms ease', textDecoration: 'none',
        fontFamily: "var(--font-ui, 'Barlow Semi Condensed', sans-serif)",
        fontWeight: 700, fontSize: 13, letterSpacing: '0.08em',
        textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden',
        maxWidth: hov ? 220 : 52,
      }}
    >
      <WhatsApp size={22} />
      <span style={{ opacity: hov ? 1 : 0, width: hov ? 'auto' : 0, transition: 'opacity 200ms', overflow: 'hidden' }}>
        WhatsApp
      </span>
    </a>
  )
}
