import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Clock, WhatsApp, Instagram } from './icons'

const SERVICES = ['Construção Civil', 'Reformas', 'Pintura', 'Cerâmicas', 'Porcelanatos', 'Laminados']
const LINKS = [
  ['/sobre',     'Sobre Nós' ],
  ['/portfolio', 'Portfólio' ],
  ['/contato',   'Contato'   ],
  ['/contato',   'Orçamento' ],
]

export default function Footer() {
  return (
    <footer style={{ background: '#000', borderTop: '1px solid #141414', padding: '56px 0 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div className="adm-footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: 16, textDecoration: 'none' }}>
              <Image src="/logo.jpg" alt="ADM Construções e Pintura" width={140} height={140} style={{ objectFit: 'contain', display: 'block' }} />
            </Link>
            <p style={{ fontSize: 13, color: '#5A5A5A', lineHeight: 1.8, maxWidth: 260, margin: '0 0 20px' }}>
              11 anos entregando qualidade e excelência em construção civil e acabamentos em Florianópolis, SC.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="https://wa.me/5548988467031" target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#25D366', fontSize: 13, fontFamily: "var(--font-ui, 'Barlow Semi Condensed', sans-serif)", fontWeight: 600, textDecoration: 'none', letterSpacing: '0.04em' }}>
                <WhatsApp size={15} /> (48) 98846-7031
              </a>
              <a href="https://www.instagram.com/admconstrucoesepintura/" target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#fff', fontSize: 13, fontFamily: "var(--font-ui, 'Barlow Semi Condensed', sans-serif)", fontWeight: 600, textDecoration: 'none', letterSpacing: '0.04em' }}>
                <Instagram size={15} /> @admconstrucoesepintura
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <div style={{ fontFamily: "var(--font-ui, 'Barlow Semi Condensed', sans-serif)", fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#A0A0A0', marginBottom: 16 }}>Serviços</div>
            {SERVICES.map(s => (
              <Link key={s} href="/servicos" style={{ display: 'block', padding: '5px 0', fontSize: 13, color: '#5A5A5A', textDecoration: 'none' }}>{s}</Link>
            ))}
          </div>

          {/* Empresa */}
          <div>
            <div style={{ fontFamily: "var(--font-ui, 'Barlow Semi Condensed', sans-serif)", fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#A0A0A0', marginBottom: 16 }}>Empresa</div>
            {LINKS.map(([href, label]) => (
              <Link key={label} href={href} style={{ display: 'block', padding: '5px 0', fontSize: 13, color: '#5A5A5A', textDecoration: 'none' }}>{label}</Link>
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
          <div style={{ fontSize: 12, color: '#3A3A3A' }}>© {new Date().getFullYear()} ADM Construções e Pintura. Todos os direitos reservados.</div>
          <div style={{ fontSize: 12, color: '#3A3A3A' }}>Florianópolis, Santa Catarina — Brasil</div>
        </div>
      </div>
    </footer>
  )
}
