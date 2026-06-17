import { Barlow, Barlow_Condensed, Barlow_Semi_Condensed } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FloatingWA from '@/components/floating-wa'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})
const barlowSemi = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow-semi',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'ADM Construções e Pintura — Florianópolis, SC',
    template: '%s | ADM Construções e Pintura',
  },
  description: 'Especialistas em construção civil, reformas, pinturas, cerâmicas, porcelanatos e laminados em Florianópolis, SC. 15 anos de experiência, 500+ obras entregues. Solicite seu orçamento.',
  keywords: ['construção civil Florianópolis', 'reforma Florianópolis', 'pintura residencial Florianópolis', 'cerâmica piso Florianópolis', 'porcelanato Florianópolis', 'ADM Construções'],
  authors: [{ name: 'ADM Construções e Pintura' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'ADM Construções e Pintura',
    title: 'ADM Construções e Pintura — Florianópolis, SC',
    description: 'Especialistas em construção civil, reformas e acabamentos em Florianópolis, SC. 15 anos de experiência.',
  },
  robots: { index: true, follow: true },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ADM Construções e Pintura',
  description: 'Especialistas em construção civil, reformas, pinturas, cerâmicas, porcelanatos e laminados em Florianópolis, SC.',
  url: 'https://admconstrucoes.com.br',
  telephone: '+5548988467031',
  email: 'contato@admconstrucoes.com.br',
  foundingDate: '2009',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Florianópolis',
    addressRegion: 'SC',
    addressCountry: 'BR',
  },
  areaServed: { '@type': 'AdministrativeArea', name: 'Grande Florianópolis, SC' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '13:00' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Construção e Pintura',
    itemListElement: [
      'Construção Civil', 'Reformas', 'Pintura', 'Cerâmicas', 'Porcelanatos', 'Laminados',
    ].map(name => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  },
  sameAs: ['https://wa.me/5548988467031'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${barlowCondensed.variable} ${barlowSemi.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWA />
      </body>
    </html>
  )
}
