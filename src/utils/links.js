import { siteConfig } from '../data/siteConfig';

export function getWhatsAppUrl(message) {
  if (siteConfig.social.whatsapp) {
    return `${siteConfig.social.whatsapp}${siteConfig.social.whatsapp.includes('?') ? '&' : '?'}text=${encodeURIComponent(message)}`;
  }

  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}
