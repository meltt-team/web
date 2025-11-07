'use client';

// External modules and React-related imports
import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';

// Application utilities and constants
import { submitWaitlistEmail } from '@/services/waitlist';

// UI Components
import Input from '../atoms/Input';
import Button from '../atoms/Button';

interface JoinFormProps {
  attribution?: Record<string, string | undefined>;
}

export default function JoinForm({ attribution }: JoinFormProps) {
  const t = useTranslations('landing');
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setState('loading');

    const result = await submitWaitlistEmail(email, attribution);

    if (result.ok) {
      // fire Plausible: waitlist_email_submitted
      // @ts-ignore
      window.plausible?.('waitlist_email_submitted', { props: attribution || {} });
      setState('done');
      setEmail('');
    } else {
      setState('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        type="email"
        required
        placeholder={t('emailPlaceholder')}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={state === 'loading' || state === 'done'}
      />
      <Button type="submit" disabled={state === 'loading' || state === 'done'}>
        {state === 'loading' ? t('joining') : t('joinButton')}
      </Button>
      {state === 'done' && (
        <p className="text-green-600 text-sm">{t('joinSuccess')}</p>
      )}
      {state === 'error' && (
        <p className="text-red-600 text-sm">{t('joinError')}</p>
      )}
    </form>
  );
}

