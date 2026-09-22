import ServicosClient from './ServicosClient'

export const metadata = {
  title: 'Serviços',
  description: 'Construção civil, reformas, pintura, cerâmicas, porcelanatos e laminados em Florianópolis, SC. Orçamento gratuito em até 48h.',
  alternates: { canonical: '/servicos' },
}

export default function ServicosPage() {
  return <ServicosClient />
}
