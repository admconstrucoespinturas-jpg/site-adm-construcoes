'use client'
import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Btn, SectionLabel, GoldLine } from '@/components/ui'
import { Filter, Eye, XIcon, WhatsApp, ChevRight } from '@/components/icons'

const PROJECTS = [
  {
    title: 'Residência Pedra Branca', cat: 'pintura', tag: 'Concluído',
    sub: 'Pintura + Cimento Queimado',
    desc: 'Pintura de alto padrão e aplicação de piso de cimento queimado em residência com piscina e área externa. Acabamento sofisticado em todos os ambientes.',
    photos: ['/pedra-branca-1.png', '/pedra-branca-2.png', '/pedra-branca-3.png'],
  },
  {
    title: 'Concessionária Barigui', cat: 'pintura', tag: 'Concluído',
    sub: 'Pintura Comercial Alto Padrão',
    desc: 'Pintura de alto padrão em espaço comercial de grande porte para concessionária de veículos. Acabamento impecável em tetos, paredes e estruturas.',
    photos: ['/barigui-1.png', '/barigui-2.png', '/barigui-3.png', '/barigui-4.png'],
  },
  {
    title: 'Apartamento Alto Padrão', cat: 'pintura', tag: 'Concluído',
    sub: 'Pintura Residencial Alto Padrão',
    desc: 'Pintura de alto padrão em apartamento com massa corrida, tetos, paredes e detalhes executados com precisão e acabamento fino.',
    photos: ['/ap-1.png', '/ap-2.png', '/ap-3.png', '/ap-4.png'],
  },
  {
    title: 'Passeio Sapiens Park', cat: 'construcao', tag: 'Concluído',
    sub: 'Deck + Área Externa',
    desc: 'Área de convivência do Sapiens Park com deck em madeira nobre, paisagismo e espaços de lazer à beira d\'água.',
    photos: ['/sapiens-deck-1.png', '/sapiens-deck-2.png', '/sapiens-deck-3.png'],
  },
  {
    title: 'Piso Sapiens Park', cat: 'ceramica', tag: 'Concluído',
    sub: 'Piso Industrial',
    desc: 'Execução de piso de alta resistência em área comercial de grande escala no complexo Sapiens Park.',
    photos: ['/sapiens-piso-1.png', '/sapiens-piso-2.png', '/sapiens-piso-3.png'],
  },
  {
    title: 'Hub Primavera', cat: 'pintura', tag: 'Concluído',
    sub: 'Manutenção de Pintura',
    desc: 'Manutenção de pintura em espaço comercial moderno. Serviço executado com qualidade e cuidado para preservar o ambiente de trabalho.',
    photos: ['/hub-primavera-1.png', '/hub-primavera-2.png'],
  },
]

const FILTERS = [
  { id: 'all',        label: 'Todos'      },
  { id: 'pintura',    label: 'Pintura'    },
  { id: 'construcao', label: 'Construção' },
  { id: 'reforma',    label: 'Reforma'    },
  { id: 'ceramica',   label: 'Cerâmica'   },
]

function PhotoModal({ project, onClose }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const touchStartX = useRef(null)
  const modalRef = useRef(null)
  const total = project.photos.length
  const ongoing = project.tag === 'Em Andamento'

  const prev = () => setActiveIdx(i => (i - 1 + total) % total)
  const next = () => setActiveIdx(i => (i + 1) % total)

  useLayoutEffect(() => { if (modalRef.current) modalRef.current.scrollTop = 0 }, [])
  useEffect(() => { document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = '' } }, [])
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') next(); if (e.key === 'ArrowLeft') prev() }
    window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h)
  }, []) // eslint-disable-line

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const dx = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(dx) > 48) { dx > 0 ? next() : prev() }
    touchStartX.current = null
  }

  const arrowStyle = (side) => ({
    position: 'absolute', top: '50%', [side]: 12,
    transform: `translateY(-50%)${side === 'left' ? ' scaleX(-1)' : ''}`,
    background: 'rgba(0,0,0,0.72)', border: '1px solid #F5A623',
    borderRadius: 4, color: '#F5A623', cursor: 'pointer',
    width: 42, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 2, flexShrink: 0,
  })

  return createPortal(
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.93)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 12px', backdropFilter: 'blur(8px)' }}>
      <div ref={modalRef} onClick={e => e.stopPropagation()} style={{ background: '#111', border: '1px solid #252525', borderRadius: 6, maxWidth: 900, width: '100%', maxHeight: '92vh', overflowY: 'auto', boxShadow: '0 0 100px rgba(0,0,0,0.98)', display: 'flex', flexDirection: 'column' }}>
        {/* Foto principal */}
        <div style={{ position: 'relative', background: '#000', flexShrink: 0, userSelect: 'none' }} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <img key={activeIdx} src={project.photos[activeIdx]} alt={`${project.title} — foto ${activeIdx + 1}`} width={900} height={600} style={{ width: '100%', height: '55vh', objectFit: 'contain', display: 'block', background: '#000' }} />
          <button onClick={onClose} style={{ position: 'absolute', top: 12, right: 12, zIndex: 3, background: 'rgba(0,0,0,0.78)', border: '1px solid #F5A623', borderRadius: 4, color: '#F5A623', cursor: 'pointer', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <XIcon size={17} />
          </button>
          {total > 1 && (
            <>
              <button onClick={prev} style={arrowStyle('left')}><ChevRight size={20} /></button>
              <button onClick={next} style={arrowStyle('right')}><ChevRight size={20} /></button>
              <div style={{ position: 'absolute', bottom: 12, right: 12, background: 'rgba(0,0,0,0.72)', borderRadius: 3, padding: '3px 10px', fontSize: 11, color: '#A0A0A0', fontFamily: "var(--font-ui)", fontWeight: 600, letterSpacing: '0.12em' }}>{activeIdx + 1} / {total}</div>
              <div style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6 }}>
                {project.photos.map((_, idx) => (
                  <button key={idx} onClick={() => setActiveIdx(idx)} style={{ width: idx === activeIdx ? 20 : 6, height: 6, borderRadius: 3, border: 'none', cursor: 'pointer', background: idx === activeIdx ? '#F5A623' : 'rgba(255,255,255,0.35)', padding: 0, transition: 'all 200ms' }} />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Miniaturas */}
        {total > 1 && (
          <div style={{ display: 'flex', gap: 6, padding: '10px 14px', background: '#0A0A0A', borderBottom: '1px solid #1C1C1C', overflowX: 'auto', flexShrink: 0 }}>
            {project.photos.map((photo, idx) => (
              <button key={idx} onClick={() => setActiveIdx(idx)} style={{ flexShrink: 0, padding: 0, width: 84, height: 56, background: 'none', cursor: 'pointer', border: `2px solid ${idx === activeIdx ? '#F5A623' : 'transparent'}`, borderRadius: 3, overflow: 'hidden', opacity: idx === activeIdx ? 1 : 0.5, transition: 'all 150ms' }}>
                <img src={photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </button>
            ))}
          </div>
        )}

        {/* Info */}
        <div style={{ padding: '20px 26px 28px', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: ongoing ? '#F5A623' : '#4CAF50', background: ongoing ? 'rgba(245,166,35,0.1)' : 'rgba(76,175,80,0.1)', border: `1px solid ${ongoing ? 'rgba(245,166,35,0.3)' : 'rgba(76,175,80,0.3)'}`, borderRadius: 2, padding: '3px 10px' }}>{project.tag}</span>
            <span style={{ fontSize: 12, color: '#5A5A5A', fontFamily: "var(--font-ui)" }}>Florianópolis, SC</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(20px,3vw,28px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.01em', color: '#fff', marginBottom: 6, lineHeight: 1.1 }}>{project.title}</h2>
          <div style={{ fontSize: 12, color: '#F5A623', fontFamily: "var(--font-ui)", fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>{project.sub}</div>
          <p style={{ fontSize: 14, color: '#A0A0A0', lineHeight: 1.8, marginBottom: 22 }}>{project.desc}</p>
          <Btn variant="whatsapp" href="https://wa.me/5548988467031" target="_blank" rel="noreferrer">
            <WhatsApp size={16} /> Solicitar Projeto Similar
          </Btn>
        </div>
      </div>
    </div>,
    document.body
  )
}

function ProjectCard({ p, onOpen }) {
  const [hov, setHov] = useState(false)
  const ongoing = p.tag === 'Em Andamento'
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={onOpen}
      style={{ background: '#141414', border: `1px solid ${hov ? '#F5A623' : '#2A2A2A'}`, borderRadius: 4, overflow: 'hidden', cursor: 'pointer', transition: 'all 200ms ease', transform: hov ? 'translateY(-4px)' : 'none', boxShadow: hov ? '0 12px 40px rgba(0,0,0,0.5)' : 'none' }}>
      <div style={{ height: 170, position: 'relative', overflow: 'hidden' }}>
        <img src={p.photos[0]} alt={`${p.title} — ${p.sub} em Florianópolis`} width={600} height={170} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: hov ? 'rgba(0,0,0,0.58)' : 'rgba(0,0,0,0.22)', transition: 'background 200ms' }} />
        {hov && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <Eye size={24} style={{ color: '#F5A623' }} />
            <span style={{ color: '#F5A623', fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Ver Galeria</span>
          </div>
        )}
        {p.photos.length > 1 && (
          <div style={{ position: 'absolute', bottom: 8, right: 8, background: 'rgba(0,0,0,0.7)', borderRadius: 3, padding: '2px 8px', fontSize: 10, color: '#A0A0A0', fontFamily: "var(--font-ui)", fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
            <Eye size={10} /> {p.photos.length}
          </div>
        )}
      </div>
      <div style={{ padding: '14px 18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, gap: 8 }}>
          <span style={{ fontFamily: "var(--font-ui)", fontSize: 9, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: ongoing ? '#F5A623' : '#4CAF50', background: ongoing ? 'rgba(245,166,35,0.1)' : 'rgba(76,175,80,0.1)', border: `1px solid ${ongoing ? 'rgba(245,166,35,0.25)' : 'rgba(76,175,80,0.25)'}`, borderRadius: 2, padding: '2px 8px', flexShrink: 0 }}>{p.tag}</span>
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, textTransform: 'uppercase', color: '#fff', marginBottom: 4, lineHeight: 1.15 }}>{p.title}</div>
        <div style={{ fontSize: 12, color: '#5A5A5A' }}>{p.sub}</div>
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
            Projetos entregues em Florianópolis e região. Clique em qualquer card para ver a galeria completa.
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
            {visible.map((p, i) => <ProjectCard key={i} p={p} onOpen={() => setSelected(p)} />)}
          </div>
          {visible.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#5A5A5A', fontFamily: "var(--font-display)", fontSize: 22 }}>Nenhum projeto encontrado para este filtro.</div>
          )}
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

      {selected && <PhotoModal project={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
