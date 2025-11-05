# Internationalization (i18n) Guide

This project uses `next-intl` for internationalization support with Next.js 16+.

## Configuration

### Supported Languages
- English (en) - Default
- Spanish (es)

### File Structure
```
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx    # Locale-specific layout with IntlProvider
│   │   └── page.tsx      # Landing page with translations
│   └── layout.tsx        # Root layout
├── i18n/
│   ├── config.ts         # Locale configuration
│   ├── messages/
│   │   ├── en.json       # English translations
│   │   └── es.json       # Spanish translations
│   └── request.ts        # next-intl request configuration
├── components/
│   └── LanguageSwitcher.tsx  # Component to switch languages
└── middleware.ts         # Locale detection and routing
```

## Usage

### Using Translations in Components

#### Server Components
```tsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations();
  
  return (
    <div>
      <h1>{t('landing.title')}</h1>
    </div>
  );
}
```

#### Client Components
```tsx
'use client';

import { useTranslations } from 'next-intl';

export default function MyClientComponent() {
  const t = useTranslations();
  
  return <button>{t('landing.deployNow')}</button>;
}
```

### Adding New Translations

1. Add the translation key to both language files:

**i18n/messages/en.json**
```json
{
  "myFeature.title": "My Feature Title"
}
```

**i18n/messages/es.json**
```json
{
  "myFeature.title": "Título de mi función"
}
```

2. Use the translation in your component:
```tsx
{t('myFeature.title')}
```

### Adding New Languages

1. Update `i18n/config.ts`:
```typescript
export type Locale = 'en' | 'es' | 'fr'; // Add new locale

export const locales: Locale[] = ['en', 'es', 'fr']; // Add to array

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français', // Add language name
};
```

2. Create a new message file:
```
i18n/messages/fr.json
```

3. Copy the structure from `en.json` and translate all messages.

### Language Switcher

The `LanguageSwitcher` component is already included in the landing page. It automatically:
- Shows all available languages
- Highlights the current language
- Switches between languages without losing the current page

To use it in other pages:
```tsx
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function MyPage() {
  return (
    <div>
      <LanguageSwitcher />
      {/* Your content */}
    </div>
  );
}
```

## URLs

The application supports locale-based routing:

- Default locale (English): `http://localhost:3000/` or `http://localhost:3000/en`
- Spanish: `http://localhost:3000/es`

The middleware automatically detects the user's preferred language from their browser settings.

## Development

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## Important Notes

- Use `useTranslations` hook (not `injectIntl`) as specified in project requirements
- All imports are organized by category (External modules, Application utilities, UI Components, Types)
- The middleware handles locale detection and routing automatically
- Static generation is enabled for all locales at build time

