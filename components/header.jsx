'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogoMark, Btn } from './ui'
import { WhatsApp, Menu, XIcon } from './icons'

const NAV_LINKS = [
  { href: '/',          label: 'Início'    },
  { href: '/servicos',  label: 'Serviços'  },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/sobre',     label: 'Sobre'     },
  { href: '/contato',   label: 'Contato'   },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 40px', height: 68,
    background: scrolled ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.75)',
    backdropFilter: 'blur(14px)',
    borderBottom: scrolled ? '1px solid #1A1A1A' : '1px solid transparent',
    transition: 'all 300ms ease',
  }

  return (
    <>
      <nav style={navStyle}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <LogoMark size={36} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)", fontSize: 15, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', lineHeight: 1.1 }}>ADM</div>
            <div style={{ fontFamily: "var(--font-ui, 'Barlow Semi Condensed', sans-serif)", fontSize: 9, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F5A623' }}>Construções e Pintura</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="adm-desktop-nav" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} style={{
              textDecoration: 'none', padding: '4px 0',
              fontFamily: "var(--font-ui, 'Barlow Semi Condensed', sans-serif)", fontSize: 12, fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: pathname === l.href ? '#F5A623' : '#A0A0A0',
              borderBottom: pathname === l.href ? '2px solid #F5A623' : '2px solid transparent',
              transition: 'color 200ms',
            }}>
              {l.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div className="adm-desktop-nav">
            <Btn variant="primary" size="sm" href="/contato">
              <WhatsApp size={14} /> Orçamento
            </Btn>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="adm-hamburger"
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 4, display: 'none' }}
          >
            {open ? <XIcon size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed', top: 68, left: 0, right: 0, zIndex: 199,
        background: 'rgba(0,0,0,0.98)', borderBottom: '1px solid #1A1A1A',
        padding: open ? '16px 24px 28px' : '0 24px',
        maxHeight: open ? 400 : 0, overflow: 'hidden',
        transition: 'all 300ms ease',
      }} className="adm-mobile-menu">
        {NAV_LINKS.map(l => (
          <Link key={l.href} href={l.href} style={{
            display: 'block', width: '100%', textAlign: 'left',
            padding: '14px 0', borderBottom: '1px solid #141414',
            fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)", fontSize: 22, fontWeight: 700,
            letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none',
            color: pathname === l.href ? '#F5A623' : '#fff',
          }}>
            {l.label}
          </Link>
        ))}
        <div style={{ marginTop: 20 }}>
          <Btn variant="whatsapp" href="/contato" style={{ width: '100%', justifyContent: 'center' }}>
            <WhatsApp size={16} /> Solicitar Orçamento
          </Btn>
        </div>
      </div>
    </>
  )
}
