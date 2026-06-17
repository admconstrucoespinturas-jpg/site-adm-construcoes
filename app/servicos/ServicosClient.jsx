'use client'
import { useState } from 'react'
import { Btn, SectionLabel, GoldLine } from '@/components/ui'
import { House, Wrench, Brush, Grid4, Layers, Zap, Check, ChevDown, WhatsApp } from '@/components/icons'

const SERVICES = [
  {
    icon: <House size={32} />, title: 'Construção Civil',
    short: 'Obras residenciais e comerciais do zero.',
    desc: 'Realizamos projetos de construção civil completos — desde fundação até acabamento. Trabalhamos com plantas arquitetônicas, estruturas em alvenaria e concreto, garantindo solidez, durabilidade e estética em cada obra.',
    items: ['Projetos residenciais e comerciais', 'Fundação e estrutura', 'Alvenaria e revestimentos', 'Instalações elétricas e hidráulicas', 'Acabamento completo', 'Acompanhamento de obra'],
  },
  {
    icon: <Wrench size={32} />, title: 'Reformas',
    short: 'Modernizamos ambientes com planejamento e precisão.',
    desc: 'Reforma completa ou parcial de ambientes residenciais e comerciais. Demolição controlada, reaproveitamento inteligente da estrutura e modernização com materiais de qualidade. Planejamos cada etapa para cumprir prazo e orçamento.',
    items: ['Reforma de banheiros e cozinhas', 'Demolição e adequações estruturais', 'Revestimentos e pisos', 'Pintura e acabamento', 'Reforma comercial', 'Ampliações e acréscimos'],
  },
  {
    icon: <Brush size={32} />, title: 'Pintura',
    short: 'Interna e externa com técnica profissional.',
    desc: 'Pinturas internas e externas com preparação adequada de superfície, aplicação de massa corrida, selador e tintas de alta durabilidade. Trabalhamos com as melhores marcas do mercado e técnicas que garantem acabamento liso e uniforme.',
    items: ['Pintura interna e externa', 'Massa corrida e textura', 'Pintura de fachadas', 'Selador e preparação de superfície', 'Tintas premium (Suvinil, Coral)', 'Pintura de telhados e muros'],
  },
  {
    icon: <Grid4 size={32} />, title: 'Cerâmicas',
    short: 'Instalação com alinhamento e rejuntamento perfeitos.',
    desc: 'Assentamento de cerâmicas em pisos e paredes com técnica profissional. Garantimos perfeição no nivelamento, juntas uniformes e rejuntamento impecável. Trabalhamos com cerâmicas de todos os formatos e estilos.',
    items: ['Cerâmicas para piso e parede', 'Alinhamento e nivelamento precisos', 'Rejuntamento uniforme', 'Azulejos e pastilhas', 'Ambientes molhados (banheiros, cozinhas)', 'Áreas externas e garagens'],
  },
  {
    icon: <Layers size={32} />, title: 'Porcelanatos',
    short: 'Importados e nacionais com precisão milimétrica.',
    desc: 'Instalação de porcelanatos polidos, acetinados, naturais e técnicos em grandes formatos. Técnica de assentamento avançada para juntas mínimas e alinhamento perfeito. Valorizamos o design e o investimento do cliente.',
    items: ['Porcelanatos de grandes formatos', 'Junta mínima (3mm)', 'Polidos, acetinados e naturais', 'Ambientes residenciais e comerciais', 'Escadas e soleiras', 'Porcelanatos importados'],
  },
  {
    icon: <Zap size={32} />, title: 'Laminados',
    short: 'Pisos de alta resistência com instalação rápida.',
    desc: 'Instalação de pisos laminados com subpiso adequado, garantindo resistência ao impacto e conforto acústico. Trabalhamos com as principais marcas (Eucafloor, Durafloor, Quick-Step) em todos os padrões e espessuras.',
    items: ['Laminados AC3, AC4 e AC5', 'Subpiso e manta acústica', 'Rodapés e arremates', 'Salas, quartos e escritórios', 'Diversidade de padrões (madeira, pedra)', 'Instalação em 1 a 2 dias'],
  },
]

const STEPS = [
  { n: '01', title: 'Contato',        desc: 'Você nos chama pelo WhatsApp ou formulário. Descrevemos o projeto e marcamos uma visita técnica.' },
  { n: '02', title: 'Visita Técnica', desc: 'Nosso técnico vai até o local, avalia o ambiente e tira todas as medidas necessárias.' },
  { n: '03', title: 'Orçamento',      desc: 'Em até 48h entregamos um orçamento detalhado, com materiais, mão de obra e prazo.' },
  { n: '04', title: 'Execução',       desc: 'Com aprovação, iniciamos a obra com equipe especializada, acompanhamento diário e comunicação constante.' },
  { n: '05', title: 'Entrega',        desc: 'Obra concluída, vistoriada e entregue com nota fiscal, garantia e total satisfação.' },
]

function ServiceCard({ s, expanded, toggle }) {
  return (
    <div style={{ background: '#141414', border: `1px solid ${expanded ? '#F5A623' : '#2A2A2A'}`, borderRadius: 4, overflow: 'hidden', transition: 'all 200ms', boxShadow: expanded ? '0 0 32px rgba(245,166,35,0.12)' : 'none' }}>
      <button onClick={toggle} style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '24px 28px', display: 'flex', alignItems: 'flex-start', gap: 20, textAlign: 'left' }}>
        <div style={{ color: '#F5A623', flexShrink: 0, marginTop: 2 }}>{s.icon}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, textTransform: 'uppercase', color: '#fff', marginBottom: 4 }}>{s.title}</div>
          <div style={{ fontSize: 13, color: '#A0A0A0' }}>{s.short}</div>
        </div>
        <div style={{ color: '#F5A623', transform: expanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 300ms', flexShrink: 0, marginTop: 4 }}>
          <ChevDown size={18} />
        </div>
      </button>
      <div style={{ maxHeight: expanded ? 600 : 0, overflow: 'hidden', transition: 'max-height 400ms ease' }}>
        <div style={{ padding: '0 28px 28px 76px', borderTop: '1px solid #1E1E1E' }}>
          <p style={{ fontSize: 14, color: '#A0A0A0', lineHeight: 1.85, margin: '20px 0 20px' }}>{s.desc}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 24px' }}>
            {s.items.map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#fff' }}>
                <span style={{ color: '#F5A623', flexShrink: 0 }}><Check size={14} /></span>{item}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <Btn variant="primary" size="sm" href="https://wa.me/5548988467031" target="_blank" rel="noreferrer">
              <WhatsApp size={14} /> Solicitar Orçamento
            </Btn>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServicosClient() {
  const [expanded, setExpanded] = useState(0)

  return (
    <>
      <section style={{ background: '#000', paddingTop: 120, paddingBottom: 64, borderBottom: '1px solid #141414' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel>O que Fazemos</SectionLabel>
          <GoldLine />
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(40px,6vw,80px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 20 }}>
            Nossos<br /><span style={{ color: '#F5A623' }}>Serviços</span>
          </h1>
          <p style={{ fontSize: 16, color: '#A0A0A0', lineHeight: 1.75, maxWidth: 560 }}>
            Soluções completas em construção civil, reformas e acabamentos para projetos residenciais e comerciais em Florianópolis e região.
          </p>
        </div>
      </section>

      <section style={{ background: '#000', padding: '64px 0 96px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} s={s} expanded={expanded === i} toggle={() => setExpanded(expanded === i ? -1 : i)} />
          ))}
        </div>
      </section>

      <section style={{ background: '#0A0A0A', padding: '96px 0', borderTop: '1px solid #141414' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel>Como Trabalhamos</SectionLabel>
          <GoldLine />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1, margin: 0 }}>
              Nosso<br /><span style={{ color: '#F5A623' }}>Processo</span>
            </h2>
            <Btn variant="whatsapp" href="https://wa.me/5548988467031" target="_blank" rel="noreferrer">
              <WhatsApp size={16} /> Iniciar Projeto
            </Btn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 32, left: '10%', right: '10%', height: 2, background: 'linear-gradient(to right,#F5A623,rgba(245,166,35,0.2))', zIndex: 0 }} />
            {STEPS.map((s, i) => (
              <div key={i} style={{ position: 'relative', zIndex: 1, padding: '0 12px', textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#141414', border: '2px solid #F5A623', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 0 20px rgba(245,166,35,0.2)' }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 900, color: '#F5A623' }}>{s.n}</span>
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, textTransform: 'uppercase', color: '#fff', marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 12, color: '#5A5A5A', lineHeight: 1.65 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
