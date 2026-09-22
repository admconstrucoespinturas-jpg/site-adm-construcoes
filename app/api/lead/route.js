export async function POST(request) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL
  const webhookToken = process.env.LEAD_WEBHOOK_TOKEN

  if (!webhookUrl || !webhookToken) {
    return Response.json({ ok: false }, { status: 200 })
  }

  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ ok: false }, { status: 400 })
  }

  const nome = typeof body?.nome === 'string' ? body.nome.trim().slice(0, 200) : ''
  const whatsapp = typeof body?.whatsapp === 'string' ? body.whatsapp.trim().slice(0, 40) : ''

  if (!nome || !whatsapp) {
    return Response.json({ ok: false }, { status: 400 })
  }

  const payload = {
    nome,
    whatsapp,
    servico: typeof body?.servico === 'string' ? body.servico.slice(0, 100) : '',
    area: typeof body?.area === 'string' ? body.area.slice(0, 50) : '',
    descricao: typeof body?.descricao === 'string' ? body.descricao.slice(0, 2000) : '',
    utm_source: typeof body?.utm_source === 'string' ? body.utm_source.slice(0, 100) : '',
    utm_campaign: typeof body?.utm_campaign === 'string' ? body.utm_campaign.slice(0, 100) : '',
    token: webhookToken,
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 4000)

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
      redirect: 'follow',
    })
    return Response.json({ ok: true })
  } catch {
    return Response.json({ ok: false }, { status: 502 })
  } finally {
    clearTimeout(timeoutId)
  }
}
