'use client'
import { useState } from 'react'
import { Btn, SectionLabel, GoldLine } from '@/components/ui'
import { Filter, Eye, XIcon, WhatsApp } from '@/components/icons'

const PROJECTS = [
  { title: 'Residência Lagoa da Conceição', cat: 'construcao', tag: 'Concluído',    sub: 'Construção Civil',      area: '180m²',   dur: '8 meses',   photo: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop&q=80', desc: 'Casa residencial completa com 3 suítes, área gourmet e garagem dupla. Do alicerce ao acabamento.' },
  { title: 'Comercial Centro',              cat: 'reforma',    tag: 'Concluído',    sub: 'Reforma Comercial',     area: '95m²',    dur: '6 semanas', photo: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=500&fit=crop&q=80', desc: 'Reforma completa de sala comercial: demolição, revestimentos, pintura e instalações.' },
  { title: 'Apartamento Jurerê',            cat: 'pintura',    tag: 'Concluído',    sub: 'Pintura + Porcelanato', area: '120m²',   dur: '3 semanas', photo: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=500&fit=crop&q=80', desc: 'Pintura interna completa e instalação de porcelanato 120x60cm em todos os ambientes.' },
  { title: 'Casa Trindade',                 cat: 'construcao', tag: 'Em Andamento', sub: 'Construção Civil',      area: '220m²',   dur: '10 meses',  photo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop&q=80', desc: 'Obra em andamento — sobrado residencial moderno com 4 suítes e área de lazer.' },
  { title: 'Restaurante Floripa',           cat: 'reforma',    tag: 'Concluído',    sub: 'Reforma + Cerâmica',    area: '140m²',   dur: '5 semanas', photo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=500&fit=crop&q=80', desc: 'Reforma completa de restaurante: revestimentos, cerâmicas, pintura de fachada.' },
  { title: 'Residência Campeche',           cat: 'laminado',   tag: 'Concluído',    sub: 'Laminado + Pintura',    area: '85m²',    dur: '2 semanas', photo: 'https://images.unsplash.com/photo-1586024486374-a64a2e9a7f9c?w=800&h=500&fit=crop&q=80', desc: 'Instalação de piso laminado em toda a residência + pintura interna completa.' },
  { title: 'Banheiro Master SC',            cat: 'ceramica',   tag: 'Concluído',    sub: 'Porcelanato Premium',   area: '12m²',    dur: '1 semana',  photo: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=500&fit=crop&q=80', desc: 'Banheiro master reformado com porcelanato importado e nichos embutidos.' },
  { title: 'Escritório Beiramar',           cat: 'reforma',    tag: 'Concluído',    sub: 'Reforma + Pintura',     area: '60m²',    dur: '3 semanas', photo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop&q=80', desc: 'Modernização completa de escritório com pisos, forros, pintura e elétrica.' },
  { title: 'Fachada Coqueiros',             cat: 'pintura',    tag: 'Concluído',    sub: 'Pintura de Fachada',    area: 'Fachada', dur: '1 semana',  photo: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=500&fit=crop&q=80', desc: 'Revitalização completa de fachada residencial com textura e pintura especial.' },
]

const FILTERS = [
  { id: 'all',        label: 'Todos'      },
  { id: 'construcao', label: 'Construção' },
  { id: 'reforma',    label: 'Reforma'    },
  { id: 'pintura',    label: 'Pintura'    },
  { id: 'ceramica',   label: 'Cerâmica'   },
  { id: 'laminado',   label: 'Laminado'   },
]

function ProjectCard({ p, onSelect }) {
  const [hov, setHov] = useState(false)
  const ongoing = p.tag === 'Em Andamento'
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={() => onSelect(p)}
      style={{ background: '#141414', border: `1px solid ${hov ? '#F5A623' : '#2A2A2A'}`, borderRadius: 4, overflow: 'hidden', cursor: 'pointer', transition: 'all 200ms ease', transform: hov ? 'translateY(-4px)' : 'none', boxShadow: hov ? '0 12px 40px rgba(0,0,0,0.5)' : 'none' }}
    >
      <div style={{ height: 170, backgroundImage: `url(${p.photo})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: hov ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.25)', transition: 'background 200ms' }} />
        {hov && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <Eye size={22} style={{ color: '#F5A623' }} />
            <span style={{ color: '#F5A623', fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Ver Detalhes</span>
          </div>
        )}
      </div>
      <div style={{ padding: '16px 18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, gap: 8 }}>
          <span style={{ fontFamily: "var(--font-ui)", fontSize: 9, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: ongoing ? '#F5A623' : '#4CAF50', background: ongoing ? 'rgba(245,166,35,0.1)' : 'rgba(76,175,80,0.1)', border: `1px solid ${ongoing ? 'rgba(245,166,35,0.25)' : 'rgba(76,175,80,0.25)'}`, borderRadius: 2, padding: '3px 8px', flexShrink: 0 }}>{p.tag}</span>
          <span style={{ fontSize: 11, color: '#5A5A5A' }}>{p.area}</span>
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, textTransform: 'uppercase', color: '#fff', marginBottom: 4, lineHeight: 1.15 }}>{p.title}</div>
        <div style={{ fontSize: 12, color: '#5A5A5A' }}>{p.sub} · {p.dur}</div>
      </div>
    </div>
  )
}

function Modal({ p, onClose }) {
  const ongoing = p.tag === 'Em Andamento'
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 400, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, backdropFilter: 'blur(6px)' }}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#141414', border: '1px solid #2A2A2A', borderRadius: 6, maxWidth: 600, width: '100%', overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.8)' }}>
        <div style={{ height: 220, backgroundImage: `url(${p.photo})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)' }} />
          <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: 4, color: '#fff', cursor: 'pointer', padding: '6px 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <XIcon size={18} />
          </button>
        </div>
        <div style={{ padding: '28px 32px 32px' }}>
          <span style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: ongoing ? '#F5A623' : '#4CAF50', background: ongoing ? 'rgba(245,166,35,0.1)' : 'rgba(76,175,80,0.1)', border: `1px solid ${ongoing ? 'rgba(245,166,35,0.3)' : 'rgba(76,175,80,0.3)'}`, borderRadius: 2, padding: '3px 8px', display: 'inline-block', marginBottom: 12 }}>{p.tag}</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.01em', color: '#fff', marginBottom: 8, lineHeight: 1.1 }}>{p.title}</h2>
          <div style={{ fontSize: 13, color: '#F5A623', fontFamily: "var(--font-ui)", fontWeight: 600, letterSpacing: '0.06em', marginBottom: 20 }}>{p.sub}</div>
          <p style={{ fontSize: 14, color: '#A0A0A0', lineHeight: 1.8, marginBottom: 24 }}>{p.desc}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
            {[['Área', p.area], ['Duração', p.dur], ['Status', p.tag], ['Local', 'Florianópolis, SC']].map(([k, v]) => (
              <div key={k} style={{ background: '#1E1E1E', borderRadius: 4, padding: '12px 16px' }}>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5A5A5A', marginBottom: 4 }}>{k}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>{v}</div>
              </div>
            ))}
          </div>
          <Btn variant="whatsapp" href="https://wa.me/5548988467031" target="_blank" rel="noreferrer">
            <WhatsApp size={16} /> Solicitar Projeto Similar
          </Btn>
        </div>
      </div>
    </div>
  )
}

export default function PortfolioClient() {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)
  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === filter)

  return (
    <>
      <section style={{ background: '#000', paddingTop: 120, paddingBottom: 64, borderBottom: '1px solid #141414' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel>Nossos Trabalhos</SectionLabel>
          <GoldLine />
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(40px,6vw,80px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 20 }}>
            Portfólio de<br /><span style={{ color: '#F5A623' }}>Obras</span>
          </h1>
          <p style={{ fontSize: 16, color: '#A0A0A0', lineHeight: 1.75, maxWidth: 520 }}>
            Mais de 500 projetos entregues em Florianópolis e região. Confira uma seleção dos nossos trabalhos mais recentes.
          </p>
        </div>
      </section>

      <section style={{ background: '#0A0A0A', borderBottom: '1px solid #141414', padding: '20px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <Filter size={14} style={{ color: '#5A5A5A', marginRight: 4 }} />
          {FILTERS.map(f => (
            <button key={f.id} onClick={() => setFilter(f.id)} style={{ background: filter === f.id ? '#F5A623' : 'transparent', color: filter === f.id ? '#000' : '#A0A0A0', border: `1px solid ${filter === f.id ? '#F5A623' : '#2A2A2A'}`, borderRadius: 4, padding: '7px 16px', cursor: 'pointer', fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 200ms' }}>
              {f.label}
            </button>
          ))}
          <span style={{ marginLeft: 'auto', fontFamily: "var(--font-ui)", fontSize: 11, color: '#5A5A5A' }}>{visible.length} projeto{visible.length !== 1 ? 's' : ''}</span>
        </div>
      </section>

      <section style={{ background: '#000', padding: '48px 0 96px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div className="adm-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {visible.map((p, i) => <ProjectCard key={i} p={p} onSelect={setSelected} />)}
          </div>
        </div>
      </section>

      <section style={{ background: '#141414', padding: '64px 0', borderTop: '1px solid #1E1E1E' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(24px,4vw,44px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 16 }}>
            Seu projeto pode ser<br /><span style={{ color: '#F5A623' }}>o próximo</span>
          </h2>
          <p style={{ fontSize: 14, color: '#A0A0A0', marginBottom: 32 }}>Entre em contato e solicite seu orçamento sem compromisso.</p>
          <Btn variant="whatsapp" size="lg" href="https://wa.me/5548988467031" target="_blank" rel="noreferrer">
            <WhatsApp size={18} /> Solicitar Orçamento
          </Btn>
        </div>
      </section>

      {selected && <Modal p={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
