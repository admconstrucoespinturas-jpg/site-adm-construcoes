'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Btn, SectionLabel, GoldLine } from '@/components/ui'
import { House, Wrench, Brush, Grid4, Layers, Zap, WhatsApp, ChevRight, ArrowRight, Award, Users, Shield, TrendUp, Star } from '@/components/icons'

const SERVICES_SHORT = [
  { icon: <House size={22} />,  label: 'Construção Civil', href: '/servicos' },
  { icon: <Wrench size={22} />, label: 'Reformas',         href: '/servicos' },
  { icon: <Brush size={22} />,  label: 'Pintura',          href: '/servicos' },
  { icon: <Grid4 size={22} />,  label: 'Cerâmicas',        href: '/servicos' },
  { icon: <Layers size={22} />, label: 'Porcelanatos',     href: '/servicos' },
  { icon: <Zap size={22} />,    label: 'Laminados',        href: '/servicos' },
]

const PREVIEW_PROJECTS = [
  { title: 'Residência Lagoa',  sub: 'Construção + Acabamento', tag: 'Concluído',     photo: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80' },
  { title: 'Comercial Centro',  sub: 'Reforma + Cerâmica',      tag: 'Concluído',     photo: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop&q=80' },
  { title: 'Apto Jurerê',       sub: 'Pintura + Porcelanato',   tag: 'Concluído',     photo: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&h=400&fit=crop&q=80' },
  { title: 'Casa Trindade',     sub: 'Construção Civil',        tag: 'Em Andamento',  photo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80' },
]

const TESTIMONIALS = [
  { name: 'Carlos M.',  city: 'Florianópolis', text: 'Equipe profissional, obra entregue no prazo. A pintura ficou impecável, melhor resultado que esperava.', stars: 5 },
  { name: 'Juliana R.', city: 'Campeche',       text: 'Contratei para reforma do banheiro e ficou perfeito. Revestimento alinhado, acabamento impecável e prazo cumprido.', stars: 5 },
  { name: 'Roberto S.', city: 'Centro',         text: 'Contratei para reforma comercial. Trabalho de qualidade, respeito ao orçamento e comunicação excelente.', stars: 5 },
]

function ProjectCard({ p }) {
  const [hov, setHov] = useState(false)
  const ongoing = p.tag === 'Em Andamento'
  return (
    <Link href="/portfolio" style={{ textDecoration: 'none' }}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: '#141414',
          border: `1px solid ${hov ? '#F5A623' : '#2A2A2A'}`,
          borderRadius: 4, overflow: 'hidden', cursor: 'pointer',
          transition: 'all 200ms', transform: hov ? 'translateY(-4px)' : 'none',
          boxShadow: hov ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div style={{ height: 140, backgroundImage: `url(${p.photo})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: hov ? 'rgba(0,0,0,0.55)' : 'rgba(0,0,0,0.15)', transition: 'background 200ms' }} />
          {hov && (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#F5A623', fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Ver Detalhes →</span>
            </div>
          )}
        </div>
        <div style={{ padding: '14px 16px' }}>
          <span style={{ display: 'inline-block', fontFamily: "var(--font-ui)", fontSize: 9, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: ongoing ? '#F5A623' : '#4CAF50', background: ongoing ? 'rgba(245,166,35,0.1)' : 'rgba(76,175,80,0.1)', border: `1px solid ${ongoing ? 'rgba(245,166,35,0.25)' : 'rgba(76,175,80,0.25)'}`, borderRadius: 2, padding: '2px 7px', marginBottom: 7 }}>{p.tag}</span>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, textTransform: 'uppercase', color: '#fff', marginBottom: 3 }}>{p.title}</div>
          <div style={{ fontSize: 11, color: '#5A5A5A' }}>{p.sub}</div>
        </div>
      </div>
    </Link>
  )
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,#080808 0%,#000 55%,#0C0800 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(245,166,35,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(245,166,35,0.03) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
        <div style={{ position: 'absolute', left: 0, top: '10%', width: 4, height: '70%', background: 'linear-gradient(to bottom,transparent,#F5A623 30%,#F5A623 70%,transparent)' }} />
        <div style={{ position: 'absolute', right: '5%', top: '20%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(245,166,35,0.06) 0%,transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1, paddingTop: 110 }}>
          <div style={{ maxWidth: 820 }}>
            <SectionLabel>Florianópolis, SC — Há 15 anos construindo excelência</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 36 }}>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(52px,7.5vw,96px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.025em', textTransform: 'uppercase', color: '#fff', margin: 0 }}>
                Construímos<br /><span style={{ color: '#F5A623' }}>Seu Sonho</span>
              </h1>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(20px,3vw,40px)', fontWeight: 600, lineHeight: 1.2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', letterSpacing: '-0.01em' }}>
                Com Qualidade e Precisão
              </div>
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: '#A0A0A0', maxWidth: 520, margin: '0 0 44px' }}>
              Especialistas em construção civil, reformas, pinturas, cerâmicas, porcelanatos e laminados.
              Transformamos espaços com técnica profissional e cuidado em cada detalhe.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Btn variant="whatsapp" size="lg" href="https://wa.me/5548988467031" target="_blank" rel="noreferrer">
                <WhatsApp size={18} /> Solicitar Orçamento
              </Btn>
              <Btn variant="outline" size="lg" href="/portfolio">
                Ver Portfólio <ChevRight size={16} />
              </Btn>
            </div>
            <div className="adm-stats-row" style={{ display: 'flex', gap: 0, marginTop: 64, borderTop: '1px solid #1A1A1A', paddingTop: 32 }}>
              {[['15+', 'Anos de Experiência'], ['500+', 'Projetos Entregues'], ['100%', 'Satisfação Garantida'], ['Flpa.', 'Santa Catarina']].map(([n, l], i) => (
                <div key={l} style={{ flex: 1, paddingRight: 32, borderRight: i < 3 ? '1px solid #1A1A1A' : 'none', paddingLeft: i > 0 ? 32 : 0 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 900, color: '#F5A623', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5A5A5A', marginTop: 5 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section style={{ background: '#141414', borderTop: '1px solid #1E1E1E', borderBottom: '1px solid #1E1E1E', padding: '32px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div className="adm-four-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 0 }}>
            {SERVICES_SHORT.map((s, i) => (
              <Link key={s.label} href={s.href} style={{ textDecoration: 'none', borderRight: i < 5 ? '1px solid #2A2A2A' : 'none', padding: '16px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <span style={{ color: '#F5A623' }}>{s.icon}</span>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#A0A0A0', textAlign: 'center' }}>{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section style={{ background: '#0A0A0A', padding: '96px 0', borderTop: '1px solid #141414' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <SectionLabel>Nossos Trabalhos</SectionLabel>
              <GoldLine />
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(32px,4vw,56px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1, margin: 0 }}>
                Portfólio de<br /><span style={{ color: '#F5A623' }}>Projetos</span>
              </h2>
            </div>
            <Btn variant="outline" href="/portfolio">Ver Todos <ArrowRight size={14} /></Btn>
          </div>
          <div className="adm-four-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
            {PREVIEW_PROJECTS.map((p, i) => <ProjectCard key={i} p={p} />)}
          </div>
        </div>
      </section>

      {/* About Strip */}
      <section style={{ background: '#000', padding: '96px 0', borderTop: '1px solid #141414' }}>
        <div className="adm-two-col" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center' }}>
          <div>
            <SectionLabel>Quem Somos</SectionLabel>
            <GoldLine />
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(32px,4vw,56px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1.05, marginBottom: 24 }}>
              Tradição e<br /><span style={{ color: '#F5A623' }}>Confiança</span>
            </h2>
            <p style={{ fontSize: 15, color: '#A0A0A0', lineHeight: 1.85, marginBottom: 16 }}>
              A ADM Construções e Pintura foi fundada por <strong style={{ color: '#fff' }}>Alysson Dajones</strong>, um profissional apaixonado pela construção civil. Com 15 anos de mercado em Florianópolis, consolidamos nossa reputação entregando obras com qualidade, responsabilidade e prazo.
            </p>
            <p style={{ fontSize: 15, color: '#A0A0A0', lineHeight: 1.85, marginBottom: 36 }}>
              Cada projeto é tratado com atenção singular — do orçamento ao acabamento final.
            </p>
            <Btn variant="outline" href="/sobre">Conhecer a Empresa <ChevRight size={14} /></Btn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              [<Award size={28} />, '15 Anos', 'de experiência sólida no mercado'],
              [<Users size={28} />, 'Equipe',  'qualificada e comprometida'],
              [<Shield size={28} />, 'Garantia', 'em todos os serviços prestados'],
              [<TrendUp size={28} />, 'Crescimento', 'contínuo e referências sólidas'],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ background: '#141414', border: '1px solid #2A2A2A', borderRadius: 4, padding: '24px 20px' }}>
                <div style={{ color: '#F5A623', marginBottom: 12 }}>{icon}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, textTransform: 'uppercase', color: '#fff', marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: 12, color: '#5A5A5A', lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: '#000', padding: '96px 0', borderTop: '1px solid #141414' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel>Depoimentos</SectionLabel>
          <GoldLine />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1, marginBottom: 48 }}>
            O que nossos<br /><span style={{ color: '#F5A623' }}>Clientes Dizem</span>
          </h2>
          <div className="adm-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ background: '#141414', border: '1px solid #2A2A2A', borderRadius: 4, padding: '28px 24px' }}>
                <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                  {[...Array(t.stars)].map((_, j) => <Star key={j} size={14} style={{ color: '#F5A623' }} />)}
                </div>
                <p style={{ fontSize: 14, color: '#A0A0A0', lineHeight: 1.8, marginBottom: 20, fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderTop: '1px solid #1E1E1E', paddingTop: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#2A2A2A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: '#F5A623' }}>{t.name[0]}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-ui)", fontSize: 13, fontWeight: 600, color: '#fff' }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: '#5A5A5A' }}>{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F5A623', padding: '72px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 32 }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, textTransform: 'uppercase', color: '#000', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
              Pronto para transformar<br />seu espaço?
            </div>
            <div style={{ fontSize: 15, color: 'rgba(0,0,0,0.6)', marginTop: 10 }}>Solicite seu orçamento sem compromisso — respondemos pelo WhatsApp.</div>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Btn variant="dark" size="lg" href="https://wa.me/5548988467031" target="_blank" rel="noreferrer">
              <WhatsApp size={18} /> WhatsApp
            </Btn>
            <Btn variant="ghost" size="lg" href="/contato" style={{ borderColor: 'rgba(0,0,0,0.3)', color: '#000' }}>
              Formulário de Contato
            </Btn>
          </div>
        </div>
      </section>
    </>
  )
}
