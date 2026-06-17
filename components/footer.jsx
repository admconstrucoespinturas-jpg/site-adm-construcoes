import Link from 'next/link'
import { LogoMark } from './ui'
import { MapPin, Phone, Clock, WhatsApp } from './icons'

const SERVICES = ['Construção Civil', 'Reformas', 'Pintura', 'Cerâmicas', 'Porcelanatos', 'Laminados']
const LINKS = [
  ['/sobre',     'Sobre Nós'  ],
  ['/portfolio', 'Portfólio'  ],
  ['/contato',   'Contato'    ],
  ['/contato',   'Orçamento'  ],
]

export default function Footer() {
  return (
    <footer style={{ background: '#000', borderTop: '1px solid #141414', padding: '56px 0 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div className="adm-footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 16 }}>
              <LogoMark size={44} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)", fontSize: 18, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', lineHeight: 1.1 }}>ADM</div>
                <div style={{ fontFamily: "var(--font-ui, 'Barlow Semi Condensed', sans-serif)", fontSize: 10, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F5A623' }}>Construções e Pintura</div>
              </div>
            </Link>
            <p style={{ fontSize: 13, color: '#5A5A5A', lineHeight: 1.8, maxWidth: 260, margin: '0 0 20px' }}>
              15 anos entregando qualidade e excelência em construção civil e acabamentos em Florianópolis, SC.
            </p>
            <a href="https://wa.me/5548988467031" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#25D366', fontSize: 13, fontFamily: "var(--font-ui, 'Barlow Semi Condensed', sans-serif)", fontWeight: 600, textDecoration: 'none', letterSpacing: '0.04em' }}>
              <WhatsApp size={15} /> (48) 98846-7031
            </a>
          </div>

          {/* Serviços */}
          <div>
            <div style={{ fontFamily: "var(--font-ui, 'Barlow Semi Condensed', sans-serif)", fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#A0A0A0', marginBottom: 16 }}>Serviços</div>
            {SERVICES.map(s => (
              <Link key={s} href="/servicos" style={{ display: 'block', padding: '5px 0', fontSize: 13, color: '#5A5A5A', textDecoration: 'none' }}>
                {s}
              </Link>
            ))}
          </div>

          {/* Empresa */}
          <div>
            <div style={{ fontFamily: "var(--font-ui, 'Barlow Semi Condensed', sans-serif)", fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#A0A0A0', marginBottom: 16 }}>Empresa</div>
            {LINKS.map(([href, label]) => (
              <Link key={label} href={href} style={{ display: 'block', padding: '5px 0', fontSize: 13, color: '#5A5A5A', textDecoration: 'none' }}>
                {label}
              </Link>
            ))}
          </div>

          {/* Contato */}
          <div>
            <div style={{ fontFamily: "var(--font-ui, 'Barlow Semi Condensed', sans-serif)", fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#A0A0A0', marginBottom: 16 }}>Contato</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                [<MapPin size={14} />, 'Florianópolis, SC'],
                [<Phone size={14} />,  '(48) 98846-7031'  ],
                [<Clock size={14} />,  'Seg–Sex: 8h às 18h'],
              ].map(([icon, txt]) => (
                <div key={txt} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#5A5A5A' }}>
                  <span style={{ color: '#F5A623', flexShrink: 0 }}>{icon}</span>{txt}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #141414', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: 12, color: '#3A3A3A' }}>© 2024 ADM Construções e Pintura. Todos os direitos reservados.</div>
          <div style={{ fontSize: 12, color: '#3A3A3A' }}>Florianópolis, Santa Catarina — Brasil</div>
        </div>
      </div>
    </footer>
  )
}
