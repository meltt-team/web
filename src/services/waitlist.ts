// External modules and React-related imports
// (none)

// Application utilities and constants
// (none)

// UI Components
// (none)

// Types
interface WaitlistSubmission {
  email: string;
  utm?: Record<string, string | undefined>;
}

interface WaitlistResponse {
  ok: boolean;
  id?: string | null;
  duplicate?: boolean;
  error?: string;
}

/**
 * Submit an email to the waitlist
 * @param email - The email address to submit
 * @param utm - Optional UTM attribution parameters
 * @returns Promise with the response data
 */
export async function submitWaitlistEmail(
  email: string,
  utm?: Record<string, string | undefined>
): Promise<WaitlistResponse> {
  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, utm }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        ok: false,
        error: errorData.error || 'Failed to submit email',
      };
    }

    const data = await response.json();
    return {
      ok: true,
      id: data.id,
      duplicate: data.duplicate,
    };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}

