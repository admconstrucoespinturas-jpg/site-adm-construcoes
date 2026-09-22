import { Barlow, Barlow_Condensed, Barlow_Semi_Condensed } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FloatingWA from '@/components/floating-wa'
import MetaPixel from '@/components/meta-pixel'
import ClickTracker from '@/components/click-tracker'
import UtmCapture from '@/components/utm-capture'
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
  metadataBase: new URL('https://www.admconstrucoes.com.br'),
  title: {
    default: 'ADM Construções e Pintura — Florianópolis, SC',
    template: '%s | ADM Construções e Pintura',
  },
  description: 'Especialistas em construção civil, reformas, pinturas, cerâmicas, porcelanatos e laminados em Florianópolis, SC. 11 anos de experiência, 500+ obras entregues. Solicite seu orçamento.',
  keywords: ['construção civil Florianópolis', 'reforma Florianópolis', 'pintura residencial Florianópolis', 'cerâmica piso Florianópolis', 'porcelanato Florianópolis', 'ADM Construções'],
  authors: [{ name: 'ADM Construções e Pintura' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'ADM Construções e Pintura',
    title: 'ADM Construções e Pintura — Florianópolis, SC',
    description: 'Especialistas em construção civil, reformas e acabamentos em Florianópolis, SC. 11 anos de experiência.',
    // TODO: public/og-image.jpg ainda não existe — colocar foto real de obra, 1200x630
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ADM Construções e Pintura' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADM Construções e Pintura — Florianópolis, SC',
    description: 'Especialistas em construção civil, reformas e acabamentos em Florianópolis, SC. 11 anos de experiência.',
    // TODO: public/og-image.jpg ainda não existe — colocar foto real de obra, 1200x630
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  verification: {
    google: '3eyhC1UhUPt38_gRq0vJBGd6WCcU9SYuTEbVX79WzvU',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ADM Construções e Pintura',
  description: 'Especialistas em construção civil, reformas, pinturas, cerâmicas, porcelanatos e laminados em Florianópolis, SC.',
  url: 'https://www.admconstrucoes.com.br',
  telephone: '+5548988467031',
  email: 'contato@admconstrucoes.com.br',
  foundingDate: '2015',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Florianópolis',
    addressRegion: 'SC',
    addressCountry: 'BR',
  },
  areaServed: { '@type': 'AdministrativeArea', name: 'Grande Florianópolis, SC' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '12:00' },
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

const gaId = process.env.NEXT_PUBLIC_GA_ID
const validGaId = gaId && /^G-[A-Za-z0-9]+$/.test(gaId) ? gaId : null

const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID
const validPixelId = pixelId && /^\d+$/.test(pixelId) ? pixelId : null

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
        <UtmCapture />
        <ClickTracker />
        {validPixelId && <MetaPixel pixelId={validPixelId} />}
        {validGaId && <GoogleAnalytics gaId={validGaId} />}
      </body>
    </html>
  )
}
