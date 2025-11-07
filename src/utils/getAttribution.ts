export function getAttributionFromURL(searchParams: URLSearchParams) {
  return {
    source: searchParams.get('utm_source') ?? undefined,
    medium: searchParams.get('utm_medium') ?? undefined,
    campaign: searchParams.get('utm_campaign') ?? undefined,
    content: searchParams.get('utm_content') ?? undefined,
    term: searchParams.get('utm_term') ?? undefined,
    qr_id: searchParams.get('qr') ?? undefined,
  };
}