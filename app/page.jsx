'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Btn, SectionLabel, GoldLine } from '@/components/ui'
import { House, Wrench, Brush, Grid4, Layers, Zap, WhatsApp, ChevRight, ArrowRight, Award, Users, Shield, TrendUp, ChevDown } from '@/components/icons'

const SERVICES_SHORT = [
  { icon: <House size={22} />,  label: 'Construção Civil' },
  { icon: <Wrench size={22} />, label: 'Reformas'         },
  { icon: <Brush size={22} />,  label: 'Pintura'          },
  { icon: <Grid4 size={22} />,  label: 'Cerâmicas'        },
  { icon: <Layers size={22} />, label: 'Porcelanatos'     },
  { icon: <Zap size={22} />,    label: 'Laminados'        },
]

const PREVIEW_PROJECTS = [
  { title: 'Residência Pedra Branca', sub: 'Pintura + Cimento Queimado',     tag: 'Concluído', photo: '/pedra-branca-1.png' },
  { title: 'Concessionária Barigui',  sub: 'Pintura Comercial Alto Padrão',  tag: 'Concluído', photo: '/barigui-1.png'      },
  { title: 'Apartamento Alto Padrão', sub: 'Pintura + Acabamento',           tag: 'Concluído', photo: '/ap-1.png'           },
  { title: 'Hub Primavera',           sub: 'Manutenção de Pintura',          tag: 'Concluído', photo: '/hub-primavera-1.png'},
]

const TESTIMONIALS = [
  { name: 'Carlos M.',  city: 'Campeche, Florianópolis', stars: 5, text: 'Contratamos a ADM para pintura completa da casa, incluindo fachada. Trabalho impecável — prazo cumprido à risca e acabamento de altíssimo nível. Recomendo sem hesitar.' },
  { name: 'Juliana R.', city: 'Jurerê, Florianópolis',   stars: 5, text: 'Fizemos reforma de banheiro e aplicação de porcelanato em toda a sala. Equipe muito profissional e respeitosa com o ambiente. O resultado superou completamente as expectativas.' },
  { name: 'Roberto S.', city: 'Centro, Florianópolis',   stars: 5, text: 'Pintura comercial do meu escritório executada em tempo recorde. Comunicação excelente durante toda a obra, sem nenhuma surpresa no orçamento. Indico com toda a confiança.' },
]

const FAQ_ITEMS = [
  { q: 'Quanto tempo leva para receber um orçamento?',                               a: 'Em até 48 horas após a visita técnica, entregamos um orçamento detalhado com materiais, mão de obra e prazo de execução.' },
  { q: 'A ADM atende fora de Florianópolis?',                                        a: 'Sim. Atendemos toda a Grande Florianópolis — São José, Palhoça, Biguaçu, Santo Amaro da Imperatriz e região metropolitana.' },
  { q: 'Os serviços têm garantia?',                                                   a: 'Todos os serviços possuem garantia. Pintura: 1 ano. Cerâmicas e porcelanatos: 2 anos. Construção civil: 5 anos conforme o Código Civil brasileiro.' },
  { q: 'Vocês fornecem os materiais ou trabalham apenas com mão de obra?',            a: 'Trabalhamos com fornecimento de materiais de marcas como Suvinil, Coral, Durafloor e Quick-Step, ou executamos apenas a mão de obra caso o cliente já possua os materiais.' },
  { q: 'Como solicitar um orçamento?',                                                a: 'Pelo WhatsApp (48) 98846-7031 ou pelo formulário de contato. Respondemos em até 2 horas em dias úteis.' },
]

function ProjectCard({ p }) {
  const [hov, setHov] = useState(false)
  const ongoing = p.tag === 'Em Andamento'
  return (
    <Link href="/portfolio" style={{ textDecoration: 'none' }}>
      <div
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{ background: '#141414', border: `1px solid ${hov ? '#F5A623' : '#2A2A2A'}`, borderRadius: 4, overflow: 'hidden', cursor: 'pointer', transition: 'all 200ms', transform: hov ? 'translateY(-4px)' : 'none', boxShadow: hov ? '0 8px 32px rgba(0,0,0,0.4)' : 'none' }}
      >
        <div style={{ height: 140, position: 'relative', overflow: 'hidden' }}>
          <Image src={p.photo} alt={`${p.title} — ${p.sub} em Florianópolis`} fill style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: hov ? 'rgba(0,0,0,0.55)' : 'rgba(0,0,0,0.15)', transition: 'background 200ms', zIndex: 1 }} />
          {hov && <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}><span style={{ color: '#F5A623', fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Ver Detalhes →</span></div>}
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

function FAQItem({ item, open, onToggle }) {
  return (
    <div style={{ background: '#141414', border: `1px solid ${open ? '#F5A623' : '#2A2A2A'}`, borderRadius: 4, overflow: 'hidden', transition: 'border-color 200ms' }}>
      <button onClick={onToggle} style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, textAlign: 'left' }}>
        <span style={{ fontFamily: "var(--font-ui)", fontSize: 15, fontWeight: 600, color: '#fff', lineHeight: 1.4 }}>{item.q}</span>
        <span style={{ color: '#F5A623', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 250ms' }}>
          <ChevDown size={18} />
        </span>
      </button>
      <div style={{ maxHeight: open ? 300 : 0, overflow: 'hidden', transition: 'max-height 350ms ease' }}>
        <p style={{ padding: '0 24px 20px', fontSize: 14, color: '#A0A0A0', lineHeight: 1.8, borderTop: '1px solid #1E1E1E', paddingTop: 16, margin: 0 }}>{item.a}</p>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [faqOpen, setFaqOpen] = useState(null)

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,#080808 0%,#000 55%,#0C0800 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(245,166,35,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(245,166,35,0.03) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
        <div style={{ position: 'absolute', left: 0, top: '10%', width: 4, height: '70%', background: 'linear-gradient(to bottom,transparent,#F5A623 30%,#F5A623 70%,transparent)' }} />
        <div style={{ position: 'absolute', right: '5%', top: '20%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(245,166,35,0.06) 0%,transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1, paddingTop: 120 }}>
          <div style={{ maxWidth: 1100 }}>
            <SectionLabel>Florianópolis, SC — Há 11 anos construindo excelência</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 36 }}>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(56px,9vw,128px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.03em', textTransform: 'uppercase', color: '#fff', margin: 0 }}>
                Construção e Pintura<br /><span style={{ color: '#F5A623' }}>em Florianópolis</span>
              </h1>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(20px,3.5vw,48px)', fontWeight: 600, lineHeight: 1.2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', letterSpacing: '-0.01em' }}>
                Reformas · Cerâmicas · Acabamentos
              </div>
            </div>
            <p style={{ fontSize: 17, fontWeight: 400, lineHeight: 1.75, color: '#A0A0A0', maxWidth: 520, margin: '0 0 44px' }}>
              Especialistas em construção civil, reformas, pinturas, cerâmicas, porcelanatos e laminados. Transformamos espaços com técnica profissional e cuidado em cada detalhe.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Btn variant="whatsapp" size="lg" href="https://wa.me/5548988467031" target="_blank" rel="noreferrer">
                <WhatsApp size={18} /> Solicitar Orçamento
              </Btn>
              <Btn variant="outline" size="lg" href="/portfolio">
                Ver Portfólio <ChevRight size={16} />
              </Btn>
            </div>
            <div style={{ display: 'flex', gap: 0, marginTop: 64, borderTop: '1px solid #1A1A1A', paddingTop: 32 }}>
              {[['11+', 'Anos de Experiência'], ['500+', 'Projetos Entregues'], ['100%', 'Satisfação Garantida'], ['Florianópolis', 'Santa Catarina']].map(([n, l], i) => (
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)' }}>
            {SERVICES_SHORT.map((s, i) => (
              <Link key={s.label} href="/servicos" style={{ textDecoration: 'none', borderRight: i < 5 ? '1px solid #2A2A2A' : 'none', padding: '16px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1A1A1A' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
              >
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
            {PREVIEW_PROJECTS.map((p, i) => <ProjectCard key={i} p={p} />)}
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ background: '#000', padding: '96px 0', borderTop: '1px solid #141414' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center' }}>
          <div>
            <SectionLabel>Quem Somos</SectionLabel>
            <GoldLine />
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(32px,4vw,56px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1.05, marginBottom: 24 }}>
              Tradição e<br /><span style={{ color: '#F5A623' }}>Confiança</span>
            </h2>
            <p style={{ fontSize: 15, color: '#A0A0A0', lineHeight: 1.85, marginBottom: 16 }}>
              A ADM Construções e Pintura foi fundada por <strong style={{ color: '#fff' }}>Alysson Dojines</strong>, um profissional apaixonado pela construção civil. Com 11 anos de mercado em Florianópolis, consolidamos nossa reputação entregando obras com qualidade, responsabilidade e prazo.
            </p>
            <p style={{ fontSize: 15, color: '#A0A0A0', lineHeight: 1.85, marginBottom: 36 }}>
              Cada projeto é tratado com atenção singular — do orçamento ao acabamento final.
            </p>
            <Btn variant="outline" href="/sobre">Conhecer a Empresa <ChevRight size={14} /></Btn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              [<Award size={28} />, '11 Anos', 'de experiência sólida no mercado'],
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ background: '#141414', border: '1px solid #2A2A2A', borderRadius: 4, padding: '28px 24px' }}>
                <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                  {[...Array(t.stars)].map((_, j) => (
                    <svg key={j} width={14} height={14} viewBox="0 0 24 24" fill="#F5A623"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  ))}
                </div>
                <p style={{ fontSize: 14, color: '#A0A0A0', lineHeight: 1.8, marginBottom: 20, fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderTop: '1px solid #1E1E1E', paddingTop: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#2A2A2A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: '#F5A623', flexShrink: 0 }}>{t.name[0]}</div>
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

      {/* FAQ */}
      <section style={{ background: '#0A0A0A', padding: '96px 0', borderTop: '1px solid #141414' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel>Dúvidas Frequentes</SectionLabel>
          <GoldLine />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1, marginBottom: 48 }}>
            Perguntas<br /><span style={{ color: '#F5A623' }}>Frequentes</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem key={i} item={item} open={faqOpen === i} onToggle={() => setFaqOpen(faqOpen === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
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
