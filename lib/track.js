function trackEvent(gaName, metaName, params = {}) {
  if (typeof window === 'undefined') return
  try {
    if (typeof window.gtag === 'function') window.gtag('event', gaName, params)
  } catch {}
  try {
    if (typeof window.fbq === 'function') window.fbq('track', metaName, params)
  } catch {}
}

export const trackLead = (service) => trackEvent('generate_lead', 'Lead', service ? { service } : {})
export const trackWhatsappClick = () => trackEvent('contact_whatsapp', 'Contact')
export const trackPhoneClick = () => trackEvent('contact_phone', 'Contact')
