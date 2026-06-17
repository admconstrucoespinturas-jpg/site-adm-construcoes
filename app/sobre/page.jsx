import { Btn, SectionLabel, GoldLine } from '@/components/ui'
import { Shield, Award, Users, TrendUp, WhatsApp, ArrowRight } from '@/components/icons'

export const metadata = {
  title: 'Sobre a ADM',
  description: 'Conheça a história da ADM Construções e Pintura. Fundada em 2009 por Alysson Dajones em Florianópolis, SC. 15 anos de experiência, 500+ obras entregues.',
}

const TIMELINE = [
  { year: '2009', title: 'Fundação da ADM',       desc: 'Alysson Dajones funda a ADM Construções e Pintura em Florianópolis com foco em qualidade e relacionamento com o cliente.' },
  { year: '2012', title: 'Expansão de Serviços',   desc: 'Ampliamos o portfólio incluindo cerâmicas, porcelanatos e laminados, atendendo projetos residenciais completos.' },
  { year: '2015', title: '100 Obras Entregues',    desc: 'Marco importante — centésima obra entregue. Consolidamos nossa reputação na região de Florianópolis.' },
  { year: '2018', title: 'Equipe Especializada',   desc: 'Formamos equipes próprias e fixas para cada serviço, garantindo padronização e qualidade em todas as obras.' },
  { year: '2021', title: 'Projetos Comerciais',    desc: 'Iniciamos atendimento a grandes projetos comerciais, restaurantes, escritórios e lojas em toda a Grande Florianópolis.' },
  { year: '2024', title: '15 Anos de Excelência',  desc: '500+ projetos entregues, equipe consolidada e referência no mercado catarinense de construção e reforma.' },
]

const VALUES = [
  { icon: <Shield size={24} />, title: 'Integridade',      desc: 'Transparência no orçamento, honestidade nos prazos e respeito ao cliente em cada etapa.' },
  { icon: <Award size={24} />,  title: 'Excelência',       desc: 'Padrão elevado de qualidade em cada serviço — do mais simples ao mais complexo.' },
  { icon: <Users size={24} />,  title: 'Comprometimento',  desc: 'Nossa equipe trata cada obra como se fosse a própria casa. Responsabilidade total.' },
  { icon: <TrendUp size={24} />, title: 'Inovação',        desc: 'Acompanhamos as tendências do setor, utilizando técnicas e materiais modernos.' },
]

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#000', paddingTop: 120, paddingBottom: 80, borderBottom: '1px solid #141414', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '40%', background: 'linear-gradient(to left,rgba(245,166,35,0.04),transparent)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel>Nossa História</SectionLabel>
          <GoldLine />
          <div className="adm-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(40px,6vw,76px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 28 }}>
                Sobre a<br /><span style={{ color: '#F5A623' }}>ADM</span>
              </h1>
              <p style={{ fontSize: 16, color: '#A0A0A0', lineHeight: 1.85, marginBottom: 20 }}>
                A <strong style={{ color: '#fff' }}>ADM Construções e Pintura</strong> nasceu da paixão de <strong style={{ color: '#fff' }}>Alysson Dajones</strong> pela construção civil. Fundada em 2009 em Florianópolis, a empresa cresceu com base em um princípio simples: fazer sempre o melhor trabalho possível.
              </p>
              <p style={{ fontSize: 16, color: '#A0A0A0', lineHeight: 1.85, marginBottom: 36 }}>
                Ao longo de 15 anos, construímos muito mais do que obras — construímos confiança. Cada cliente atendido é uma história de parceria e compromisso com a qualidade.
              </p>
              <Btn variant="whatsapp" href="https://wa.me/5548988467031" target="_blank" rel="noreferrer">
                <WhatsApp size={16} /> Falar com Alysson
              </Btn>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: 160, height: 160, borderRadius: '50%', background: '#141414', border: '3px solid #F5A623', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, boxShadow: '0 0 40px rgba(245,166,35,0.2)', fontSize: 72, fontFamily: "var(--font-display)", fontWeight: 900, color: '#F5A623' }}>A</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 800, textTransform: 'uppercase', color: '#fff', marginBottom: 6 }}>Alysson Dajones</div>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F5A623', marginBottom: 16 }}>Fundador &amp; Diretor Técnico</div>
              <p style={{ fontSize: 13, color: '#5A5A5A', lineHeight: 1.75, maxWidth: 300 }}>
                Profissional com 15+ anos de experiência em construção civil, reformas e acabamentos. Supervisiona pessoalmente cada projeto.
              </p>
              <div style={{ display: 'flex', gap: 24, marginTop: 24 }}>
                {[['15+', 'Anos'], ['500+', 'Obras'], ['100%', 'Dedicação']].map(([n, l]) => (
                  <div key={l} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 900, color: '#F5A623', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: 10, color: '#5A5A5A', fontFamily: "var(--font-ui)", letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 3 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#0A0A0A', padding: '96px 0', borderBottom: '1px solid #141414' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel>Nossos Valores</SectionLabel>
          <GoldLine />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1, marginBottom: 48 }}>
            O que nos<br /><span style={{ color: '#F5A623' }}>Define</span>
          </h2>
          <div className="adm-four-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
            {VALUES.map((v, i) => (
              <div key={i} style={{ background: '#141414', border: '1px solid #2A2A2A', borderRadius: 4, padding: '28px 24px', borderTop: '3px solid #F5A623' }}>
                <div style={{ color: '#F5A623', marginBottom: 16 }}>{v.icon}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, textTransform: 'uppercase', color: '#fff', marginBottom: 10 }}>{v.title}</div>
                <div style={{ fontSize: 13, color: '#A0A0A0', lineHeight: 1.7 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: '#000', padding: '96px 0', borderBottom: '1px solid #141414' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel>Nossa Trajetória</SectionLabel>
          <GoldLine />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1, marginBottom: 64 }}>
            15 Anos de<br /><span style={{ color: '#F5A623' }}>História</span>
          </h2>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 119, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom,#F5A623,rgba(245,166,35,0.1))' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {TIMELINE.map((t, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 40px 1fr', alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 900, color: '#F5A623', textAlign: 'right', paddingRight: 24, lineHeight: 1, paddingTop: 2 }}>{t.year}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#F5A623', border: '3px solid #000', flexShrink: 0, marginTop: 4, boxShadow: '0 0 12px rgba(245,166,35,0.5)' }} />
                  </div>
                  <div style={{ paddingLeft: 20 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, textTransform: 'uppercase', color: '#fff', marginBottom: 6 }}>{t.title}</div>
                    <div style={{ fontSize: 13, color: '#A0A0A0', lineHeight: 1.7 }}>{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F5A623', padding: '72px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 32 }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, textTransform: 'uppercase', color: '#000', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
              Faça parte da<br />nossa história
            </div>
            <div style={{ fontSize: 15, color: 'rgba(0,0,0,0.6)', marginTop: 10 }}>Solicite seu orçamento e receba atendimento personalizado.</div>
          </div>
          <Btn variant="dark" size="lg" href="/contato">
            Solicitar Orçamento <ArrowRight size={16} />
          </Btn>
        </div>
      </section>
    </>
  )
}
