import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de', 'es'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/pathnames': {
      de: '/pfadnamen'
    },
    '/success': '/success',
    '/privacy-policy': '/privacy-policy',
    '/terms': '/terms',
    '/safety': '/safety'
  }
});