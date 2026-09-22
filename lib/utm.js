export function getStoredUtm() {
  if (typeof window === 'undefined') return {}
  try {
    const utm_source = sessionStorage.getItem('utm_source')
    const utm_campaign = sessionStorage.getItem('utm_campaign')
    const utm = {}
    if (utm_source) utm.utm_source = utm_source
    if (utm_campaign) utm.utm_campaign = utm_campaign
    return utm
  } catch {
    return {}
  }
}
