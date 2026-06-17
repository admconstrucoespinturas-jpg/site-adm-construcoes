'use client'
import { useState } from 'react'
import { Btn, SectionLabel, GoldLine } from '@/components/ui'
import { WhatsApp, MapPin, Clock, Mail, Check, ArrowRight } from '@/components/icons'

const iStyle = {
  background: '#141414', border: '1px solid #2A2A2A', borderRadius: 4,
  color: '#fff', fontFamily: "var(--font-body, 'Barlow', sans-serif)", fontSize: 15, padding: '13px 16px',
  width: '100%', outline: 'none', transition: 'border-color 200ms, box-shadow 200ms', boxSizing: 'border-box',
}
const lStyle = {
  fontFamily: "var(--font-ui, 'Barlow Semi Condensed', sans-serif)", fontSize: 11, fontWeight: 600,
  letterSpacing: '0.08em', textTransform: 'uppercase', color: '#A0A0A0', display: 'block', marginBottom: 7,
}
const onF = e => { e.target.style.borderColor = '#F5A623'; e.target.style.boxShadow = '0 0 0 3px rgba(245,166,35,0.1)' }
const onB = e => { e.target.style.borderColor = '#2A2A2A'; e.target.style.boxShadow = 'none' }

export default function ContatoClient() {
  const [form, setForm] = useState({ nome: '', whatsapp: '', email: '', servico: '', area: '', mensagem: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true); setForm({ nome: '', whatsapp: '', email: '', servico: '', area: '', mensagem: '' }) }, 1400)
  }

  return (
    <>
      <section style={{ background: '#000', paddingTop: 120, paddingBottom: 64, borderBottom: '1px solid #141414' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel>Fale Conosco</SectionLabel>
          <GoldLine />
          <div className="adm-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'flex-start' }}>
            <div>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(40px,6vw,76px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 24 }}>
                Solicite seu<br /><span style={{ color: '#F5A623' }}>Orçamento</span>
              </h1>
              <p style={{ fontSize: 15, color: '#A0A0A0', lineHeight: 1.85, marginBottom: 36 }}>
                Preencha o formulário ou nos chame diretamente pelo WhatsApp. Respondemos em até 2 horas em dias úteis.
              </p>
              <a href="https://wa.me/5548988467031" target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#141414', border: '1px solid #25D366', borderRadius: 4, padding: '20px 24px', marginBottom: 16, textDecoration: 'none' }}>
                <div style={{ background: '#25D366', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <WhatsApp size={24} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, textTransform: 'uppercase', color: '#fff', marginBottom: 3 }}>WhatsApp Direto</div>
                  <div style={{ fontSize: 14, color: '#25D366', fontFamily: "var(--font-ui)", fontWeight: 600 }}>(48) 98846-7031</div>
                </div>
              </a>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  [<MapPin size={16} />, 'Endereço',    'Florianópolis, Santa Catarina — Brasil'],
                  [<Clock size={16} />,  'Atendimento', 'Segunda a Sexta: 8h às 18h | Sáb: 8h às 13h'],
                  [<Mail size={16} />,   'E-mail',      'contato@admconstrucoes.com.br'],
                ].map(([icon, label, val]) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 16px', background: '#0A0A0A', borderRadius: 4, border: '1px solid #1A1A1A' }}>
                    <span style={{ color: '#F5A623', marginTop: 2, flexShrink: 0 }}>{icon}</span>
                    <div>
                      <div style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5A5A5A', marginBottom: 3 }}>{label}</div>
                      <div style={{ fontSize: 13, color: '#A0A0A0' }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ paddingTop: 16 }}>
              {sent ? (
                <div style={{ background: 'rgba(76,175,80,0.06)', border: '1px solid rgba(76,175,80,0.2)', borderRadius: 6, padding: '48px 32px', textAlign: 'center' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(76,175,80,0.15)', border: '2px solid #4CAF50', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#4CAF50' }}>
                    <Check size={28} />
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 800, textTransform: 'uppercase', color: '#fff', marginBottom: 10 }}>Mensagem Enviada!</div>
                  <p style={{ fontSize: 14, color: '#A0A0A0', lineHeight: 1.75, marginBottom: 28 }}>
                    Recebemos seu contato. Entraremos em resposta pelo WhatsApp em até 2 horas em dias úteis.
                  </p>
                  <Btn variant="whatsapp" href="https://wa.me/5548988467031" target="_blank" rel="noreferrer">
                    <WhatsApp size={16} /> Chamar no WhatsApp
                  </Btn>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={lStyle}>Nome completo *</label>
                      <input style={iStyle} type="text" placeholder="Seu nome" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} required onFocus={onF} onBlur={onB} />
                    </div>
                    <div>
                      <label style={lStyle}>WhatsApp *</label>
                      <input style={iStyle} type="tel" placeholder="(48) 9 0000-0000" value={form.whatsapp} onChange={e => setForm({ ...form, whatsapp: e.target.value })} required onFocus={onF} onBlur={onB} />
                    </div>
                  </div>
                  <div>
                    <label style={lStyle}>E-mail</label>
                    <input style={iStyle} type="email" placeholder="seu@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} onFocus={onF} onBlur={onB} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={lStyle}>Serviço desejado *</label>
                      <select style={{ ...iStyle, cursor: 'pointer' }} value={form.servico} onChange={e => setForm({ ...form, servico: e.target.value })} required onFocus={onF} onBlur={onB}>
                        <option value="">Selecione...</option>
                        {['Construção Civil','Reforma','Pintura','Cerâmica','Porcelanato','Laminado','Mais de um serviço'].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={lStyle}>Área aprox. (m²)</label>
                      <input style={iStyle} type="text" placeholder="Ex: 80m²" value={form.area} onChange={e => setForm({ ...form, area: e.target.value })} onFocus={onF} onBlur={onB} />
                    </div>
                  </div>
                  <div>
                    <label style={lStyle}>Descreva o projeto *</label>
                    <textarea style={{ ...iStyle, resize: 'vertical', minHeight: 120 }} placeholder="Conte detalhes do seu projeto — tipo de obra, local, prazo desejado..." value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} required onFocus={onF} onBlur={onB} />
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                    <Btn variant="primary" size="lg" onClick={() => {}} style={{ opacity: loading ? 0.7 : 1, pointerEvents: loading ? 'none' : 'auto' }}>
                      {loading ? 'Enviando...' : <><ArrowRight size={14} /> Enviar Mensagem</>}
                    </Btn>
                    <Btn variant="whatsapp" size="md" href="https://wa.me/5548988467031" target="_blank" rel="noreferrer">
                      <WhatsApp size={15} /> Prefiro WhatsApp
                    </Btn>
                  </div>
                  <div style={{ fontSize: 11, color: '#3A3A3A', lineHeight: 1.6 }}>
                    Ao enviar, você concorda em receber contato pelo WhatsApp informado acima.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#0A0A0A', borderTop: '1px solid #141414' }}>
        <div style={{ height: 220, background: '#0D0D0D', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(245,166,35,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(245,166,35,0.025) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <MapPin size={32} style={{ color: '#F5A623', display: 'block', margin: '0 auto 12px' }} />
            <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, textTransform: 'uppercase', color: '#fff', marginBottom: 6 }}>Florianópolis, SC</div>
            <div style={{ fontSize: 12, color: '#5A5A5A' }}>Atendemos toda a Grande Florianópolis e região</div>
          </div>
        </div>
      </section>
    </>
  )
}
