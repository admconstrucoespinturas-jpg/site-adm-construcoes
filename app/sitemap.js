export default function sitemap() {
  const baseUrl = 'https://www.admconstrucoes.com.br'
  const routes = ['', '/sobre', '/servicos', '/portfolio', '/contato']
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }))
}
