'use client'
import { useState } from 'react'
import Link from 'next/link'

export const LogoMark = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80">
    <circle cx="40" cy="40" r="38" fill="#000" stroke="#F5A623" strokeWidth="2"/>
    <g transform="translate(40,42)">
      <polygon points="-18,0 0,-18 18,0" fill="#F5A623"/>
      <rect x="8" y="-24" width="5" height="10" fill="#F5A623"/>
      <rect x="-13" y="0" width="26" height="16" fill="#F5A623"/>
      <rect x="-4" y="6" width="8" height="10" fill="#000" rx="1"/>
    </g>
  </svg>
)

export const SectionLabel = ({ children }) => (
  <span style={{
    display: 'block', fontFamily: "var(--font-ui, 'Barlow Semi Condensed', sans-serif)",
    fontSize: 11, fontWeight: 600, letterSpacing: '0.18em',
    textTransform: 'uppercase', color: '#F5A623', marginBottom: 12,
  }}>{children}</span>
)

export const GoldLine = () => (
  <div style={{ width: 48, height: 3, background: '#F5A623', borderRadius: 2, marginBottom: 24 }} />
)

export const Btn = ({ variant = 'primary', size = 'md', children, href, onClick, style = {}, ...rest }) => {
  const [hov, setHov] = useState(false)
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontFamily: "var(--font-ui, 'Barlow Semi Condensed', sans-serif)",
    fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
    cursor: 'pointer', border: 'none', textDecoration: 'none',
    transition: 'all 200ms ease', borderRadius: 4, whiteSpace: 'nowrap',
  }
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 11 },
    md: { padding: '13px 28px', fontSize: 13 },
    lg: { padding: '16px 36px', fontSize: 14 },
  }
  const variants = {
    primary:  { background: hov ? '#FFBB44' : '#F5A623', color: '#000' },
    outline:  { background: 'transparent', color: '#F5A623', border: '2px solid #F5A623', ...(hov ? { background: 'rgba(245,166,35,0.08)' } : {}) },
    ghost:    { background: 'transparent', color: hov ? '#F5A623' : '#fff', border: '1px solid', borderColor: hov ? '#F5A623' : '#2A2A2A' },
    whatsapp: { background: hov ? '#20BC5A' : '#25D366', color: '#fff' },
    dark:     { background: hov ? '#1E1E1E' : '#141414', color: '#fff', border: '1px solid #2A2A2A' },
  }
  const s = { ...base, ...sizes[size], ...variants[variant], ...(hov && variant === 'primary' ? { transform: 'scale(1.02)' } : {}), ...style }
  const handlers = { onMouseEnter: () => setHov(true), onMouseLeave: () => setHov(false) }

  if (href?.startsWith('/')) return <Link href={href} style={s} {...handlers} {...rest}>{children}</Link>
  if (href) return <a href={href} style={s} {...handlers} {...rest}>{children}</a>
  return <button style={s} onClick={onClick} {...handlers} {...rest}>{children}</button>
}
