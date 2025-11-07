import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/supabase/admin';

const Body = z.object({
  email: z.string().email(),
  utm: z.object({
    source: z.string().optional(),
    medium: z.string().optional(),
    campaign: z.string().optional(),
    content: z.string().optional(),
    term: z.string().optional(),
    qr_id: z.string().optional(),
  }).optional(),
  turnstileToken: z.string().optional(), // if you add CF Turnstile
});

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? null;
  const userAgent = req.headers.get('user-agent') ?? null;

  const json = await req.json().catch(() => null);
  const parsed = Body.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: 'Invalid' }, { status: 400 });

  // (Optional) verify Cloudflare Turnstile here

  const { email, utm } = parsed.data;
  const db = supabaseAdmin();

  const { data, error } = await db
    .from('waitlist_signups')
    .insert({
      email,
      utm_source: utm?.source,
      utm_medium: utm?.medium,
      utm_campaign: utm?.campaign,
      utm_content: utm?.content,
      utm_term: utm?.term,
      qr_id: utm?.qr_id,
      ip,
      user_agent: userAgent,
    })
    .select('id')
    .single();

  // handle duplicate email gracefully
  if (error?.message?.toLowerCase().includes('duplicate')) {
    // find existing id (optional)
    const existing = await db
      .from('waitlist_signups')
      .select('id')
      .eq('email', email)
      .maybeSingle();
    return NextResponse.json({ ok: true, id: existing.data?.id ?? null, duplicate: true }, { status: 200 });
  }

  if (error) return NextResponse.json({ error: 'DB' }, { status: 500 });

  return NextResponse.json({ ok: true, id: data?.id ?? null }, { status: 201 });
}
