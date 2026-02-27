import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default async function PrivacyPage({ params }: PageProps<"/[locale]/privacy">) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-16">

        {/* Header Meta */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-3xl font-bold text-primary mb-6">Privacy Policy</h1>

          <div className="text-sm text-muted-foreground space-y-1 mb-6">
            <p><strong className="text-primary">Product name:</strong> Meltt</p>
            <p><strong className="text-primary">Version:</strong> 1.0 — Private Beta</p>
            <p><strong className="text-primary">Effective date:</strong> [DATE — add the day you send your first TestFlight link]</p>
            <p><strong className="text-primary">Contact:</strong> it@meltt.app</p>
            <p><strong className="text-primary">Operated by:</strong> Meltt, Barcelona, Spain</p>
          </div>

          {/* Beta Notice */}
          <div className="border border-yellow-300 bg-yellow-50 rounded-lg p-4 text-sm text-gray leading-relaxed">
            <p>
              <strong className="text-primary">⚠️ Private Beta Notice:</strong> Meltt is not publicly available.
              This app is in closed private beta with invited participants only. By participating, you agree to
              this Privacy Policy.
            </p>
          </div>
        </div>

        <div className="space-y-10 text-primary">

          {/* Section 1 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">1. Who We Are</h2>
            <p className="text-gray leading-relaxed mb-3">
              Meltt is a real-life dating application that connects people who are physically present in the same
              place at the same time. We operate from Barcelona, Spain, and are subject to the{" "}
              <strong className="text-primary">General Data Protection Regulation (GDPR)</strong>.
            </p>
            <p className="text-gray leading-relaxed">
              For any privacy questions, contact us at:{" "}
              <a href="mailto:it@meltt.app" className="text-brand underline">it@meltt.app</a>
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">2. Our Commitment to Your Privacy</h2>
            <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
              <li>We collect only what we need to make the app work</li>
              <li>We never sell your data to anyone</li>
              <li>We never use your data for advertising</li>
              <li>We are transparent about what we collect and why</li>
              <li>You are always in control of your data</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-4">3. What Data We Collect</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">3.1 Account &amp; Identity Data</h3>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>Email address</li>
                  <li>Authentication credentials via Supabase Auth, Google Sign-In, or Apple Sign-In</li>
                  <li>Account creation date and last login timestamp</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3.2 Profile Data</h3>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>Display name</li>
                  <li>Date of birth and age</li>
                  <li>Gender</li>
                  <li>
                    Sexual preference (&ldquo;interested in&rdquo;) —{" "}
                    <strong className="text-primary">special category data under GDPR Article 9</strong>
                  </li>
                  <li>What you are looking for (relationship type)</li>
                  <li>Interests and hobbies</li>
                  <li>Languages spoken</li>
                  <li>Profile photos</li>
                  <li>
                    Lifestyle information you voluntarily provide: alcohol, smoking, and drug use habits —{" "}
                    <strong className="text-primary">may also constitute special category data under GDPR</strong>
                  </li>
                </ul>
                <p className="text-gray leading-relaxed mt-3 text-sm italic">
                  You are never required to provide lifestyle or preference data. You can update or delete it at
                  any time in your profile settings.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3.3 Precise Location Data</h3>
                <p className="text-gray leading-relaxed mb-2">
                  Location is central to how Meltt works. We collect:
                </p>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>Your precise GPS coordinates when you check in to a venue — to verify you are physically present</li>
                  <li>Your GPS coordinates passively while the app is open and you are checked in — to detect when you leave</li>
                  <li>On supported devices, we may use your OS geofencing API to detect departure while the app is in the background. We request a separate explicit permission for this.</li>
                  <li>All check-in attempts, including rejected ones, are logged for security and anti-abuse purposes</li>
                </ul>
                <p className="text-gray leading-relaxed mt-3 text-sm">
                  We do <strong className="text-primary">not</strong> collect background location for any purpose
                  other than detecting venue departure. We do{" "}
                  <strong className="text-primary">not</strong> use your location for advertising or tracking.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3.4 Interaction &amp; Behavioural Data</h3>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>Likes and passes made within a venue or event</li>
                  <li>Matches with other users</li>
                  <li>Messages exchanged with matches</li>
                  <li>Check-in and check-out history</li>
                  <li>Events you mark as &ldquo;going&rdquo; to</li>
                  <li>Blocks and reports you submit, and those submitted about you</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3.5 Device &amp; Technical Data</h3>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>Device type, model, and operating system version</li>
                  <li>App version</li>
                  <li>Push notification token</li>
                  <li>Crash reports and error logs</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3.6 Permission States</h3>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>Whether you have granted or denied location permission (foreground and background)</li>
                  <li>Whether you have granted or denied notification permission</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3.7 Consent Records</h3>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>A record of your acceptance of this Privacy Policy, including version and timestamp</li>
                  <li>Your marketing communication preference</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-4">4. Why We Collect Your Data (Legal Basis under GDPR)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold">Data</th>
                    <th className="text-left py-2 pr-4 font-semibold">Purpose</th>
                    <th className="text-left py-2 font-semibold">Legal Basis</th>
                  </tr>
                </thead>
                <tbody className="text-gray">
                  {[
                    ["Account & identity data", "Create and manage your account", "Contract"],
                    ["Profile data", "Display your profile to nearby users", "Contract"],
                    ["Location (foreground)", "Verify venue presence, enable check-in", "Contract"],
                    ["Location (background geofence)", "Auto-checkout when you leave a venue", "Contract, Legitimate interests"],
                    ["Interaction data", "Enable matching and chat", "Contract"],
                    ["Block and report data", "Safety and abuse prevention", "Legal obligation, Legitimate interests"],
                    ["Check-in attempt logs", "Anti-abuse and security", "Legitimate interests"],
                    ["Device & technical data", "App performance and bug fixing", "Legitimate interests"],
                    ["Push notification token", "Send match and message notifications", "Consent"],
                    ["Consent records", "GDPR compliance", "Legal obligation"],
                  ].map(([data, purpose, basis]) => (
                    <tr key={data} className="border-b border-border">
                      <td className="py-2 pr-4 leading-relaxed">{data}</td>
                      <td className="py-2 pr-4 leading-relaxed">{purpose}</td>
                      <td className="py-2 leading-relaxed">{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray text-sm mt-3">
              We do <strong className="text-primary">not</strong> make automated decisions with legal or significant
              effects on you.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">5. Sensitive Data (GDPR Article 9)</h2>
            <p className="text-gray leading-relaxed mb-3">
              Meltt processes data that qualifies as{" "}
              <strong className="text-primary">special category personal data</strong> under GDPR Article 9:
            </p>
            <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed mb-3">
              <li>
                <strong className="text-primary">Sexual orientation and preferences</strong> — derived from the
                gender preference you select
              </li>
              <li>
                <strong className="text-primary">Lifestyle habits</strong> — alcohol, smoking, and drug use
                information you voluntarily provide
              </li>
            </ul>
            <p className="text-gray leading-relaxed mb-4">
              We process this data only because you have explicitly provided it as part of your profile. You may
              update or delete it at any time in your profile settings.
            </p>
            <div className="border border-blue-200 bg-blue-50 rounded-lg p-4 text-sm text-gray leading-relaxed">
              <p>
                <strong className="text-primary">📌 Before public launch:</strong> We will obtain explicit
                Article 9 consent for this data and have our legal basis reviewed by a qualified lawyer. This
                is a private beta with invited participants only.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">6. How We Use Your Data</h2>
            <p className="text-gray leading-relaxed mb-3">We use your data to:</p>
            <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed mb-3">
              <li>
                <strong className="text-primary">Operate the app</strong> — create your account, enable
                check-ins, show you nearby users, facilitate matches and chat
              </li>
              <li>
                <strong className="text-primary">Keep the community safe</strong> — detect and prevent abuse,
                fake profiles, fraud, and policy violations
              </li>
              <li>
                <strong className="text-primary">Improve the product</strong> — understand how users interact
                with the app and fix problems
              </li>
              <li>
                <strong className="text-primary">Communicate with you</strong> — send match and message
                notifications, respond to support requests
              </li>
              <li>
                <strong className="text-primary">Comply with legal obligations</strong> — meet our obligations
                under GDPR
              </li>
            </ul>
            <p className="text-gray leading-relaxed text-sm">
              We do <strong className="text-primary">not</strong> use your data to serve personalised ads, sell
              data to third parties, or build profiles for data brokers.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-4">7. Who Sees Your Data</h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold mb-2">7.1 Other Users</h3>
                <p className="text-gray leading-relaxed mb-2">
                  Your profile — name, age, photos, gender, interests, lifestyle, languages, and what you are
                  looking for — is visible <strong className="text-primary">only</strong> to users who are
                  physically present and checked in at the same venue as you. It is not visible to remote users
                  or anyone outside the app.
                </p>
                <p className="text-gray leading-relaxed">
                  Your precise GPS coordinates are <strong className="text-primary">never</strong> shown to
                  other users. They only know you are present at the same venue.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">7.2 The Meltt Team</h3>
                <p className="text-gray leading-relaxed">
                  Team members may access your data when necessary to operate the service, investigate abuse
                  reports, or fix technical issues. Access is limited and controlled.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">7.3 Service Providers</h3>
                <p className="text-gray leading-relaxed mb-2">
                  We use the following trusted third-party services, all acting as data processors under data
                  processing agreements:
                </p>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>
                    <strong className="text-primary">Supabase</strong> (USA) — database, authentication, file
                    storage, and server-side logic. SOC 2 compliant.
                  </li>
                  <li>
                    <strong className="text-primary">Google LLC</strong> — authentication via Google Sign-In;
                    Android push notifications via FCM
                  </li>
                  <li>
                    <strong className="text-primary">Apple Inc.</strong> — authentication via Sign in with
                    Apple; iOS push notifications via APNs
                  </li>
                  <li>
                    <strong className="text-primary">Expo / EAS</strong> — app build and delivery infrastructure
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">7.4 Legal Requirements</h3>
                <p className="text-gray leading-relaxed">
                  We may disclose data if required by law, court order, or to protect the safety of our users
                  or others.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">8. International Data Transfers</h2>
            <p className="text-gray leading-relaxed">
              Supabase infrastructure is hosted primarily in the United States. If you are in the EEA, your
              data is transferred to the US. We rely on{" "}
              <strong className="text-primary">Standard Contractual Clauses (SCCs)</strong> and Supabase&apos;s
              data processing agreement as the legal transfer mechanism, in compliance with GDPR.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">9. How We Protect Your Data</h2>
            <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed mb-3">
              <li><strong className="text-primary">Encryption in transit</strong> — all data is encrypted using TLS/HTTPS</li>
              <li><strong className="text-primary">Encryption at rest</strong> — data is encrypted in our database</li>
              <li><strong className="text-primary">Row Level Security (RLS)</strong> — users can only access their own data</li>
              <li><strong className="text-primary">Server-side operations</strong> — sensitive actions like check-ins are processed via Edge Functions, not directly from the client</li>
              <li><strong className="text-primary">Blocked user enforcement</strong> — blocked users are excluded at the database query level</li>
              <li><strong className="text-primary">Access controls</strong> — only authorised team members can access user data</li>
            </ul>
            <p className="text-gray leading-relaxed text-sm">
              If you discover a security vulnerability, please report it responsibly to{" "}
              <a href="mailto:it@meltt.app" className="text-brand underline">it@meltt.app</a>{" "}
              and we will treat it as an immediate priority.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-4">10. How Long We Keep Your Data</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold">Data</th>
                    <th className="text-left py-2 font-semibold">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="text-gray">
                  {[
                    ["Account and profile data", "Until you delete your account, plus 30 days"],
                    ["Profile photos", "Deleted within 30 days of account deletion"],
                    ["Chat messages", "Deleted when you delete your account"],
                    ["Check-in and interaction history", "12 months, then deleted or anonymised"],
                    ["Security and anti-abuse logs", "90 days"],
                    ["Consent records", "3 years from date of consent"],
                    ["Marketing opt-out records", "Indefinitely"],
                    ["Beta data", "May be reset at end of beta — we will notify you in advance"],
                  ].map(([data, period]) => (
                    <tr key={data} className="border-b border-border">
                      <td className="py-2 pr-4 leading-relaxed">{data}</td>
                      <td className="py-2 leading-relaxed">{period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">11. Your Rights Under GDPR</h2>
            <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed mb-4">
              <li><strong className="text-primary">Access</strong> — request a copy of your personal data</li>
              <li><strong className="text-primary">Rectification</strong> — ask us to correct inaccurate data</li>
              <li><strong className="text-primary">Erasure</strong> — request deletion of your account and all data</li>
              <li><strong className="text-primary">Restriction</strong> — ask us to pause processing in certain circumstances</li>
              <li><strong className="text-primary">Portability</strong> — receive your data in a machine-readable format</li>
              <li><strong className="text-primary">Object</strong> — object to processing based on legitimate interests</li>
              <li><strong className="text-primary">Withdraw consent</strong> — for any consent-based processing, at any time</li>
            </ul>
            <p className="text-gray leading-relaxed mb-4">
              To exercise any of these rights, email{" "}
              <a href="mailto:it@meltt.app" className="text-brand underline">it@meltt.app</a>.
              We will respond within 30 days.
            </p>
            <p className="text-gray leading-relaxed mb-2">
              If you believe we are not handling your data correctly, you can lodge a complaint with the Spanish
              data protection authority:
            </p>
            <div className="text-gray leading-relaxed text-sm">
              <p className="font-semibold text-primary">Agencia Española de Protección de Datos (AEPD)</p>
              <p>
                <a href="https://www.aepd.es/" target="_blank" rel="noopener noreferrer" className="text-brand underline">
                  www.aepd.es
                </a>
              </p>
              <p>+34 912 663 517</p>
            </div>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">12. Children&apos;s Privacy</h2>
            <p className="text-gray leading-relaxed mb-3">
              Meltt is strictly for users aged <strong className="text-primary">18 and over</strong>. We do not
              knowingly collect data from anyone under 18. If we discover a minor has registered, we will
              immediately delete their account and all associated data.
            </p>
            <p className="text-gray leading-relaxed">
              If you believe a minor is using Meltt, please report it to{" "}
              <a href="mailto:it@meltt.app" className="text-brand underline">it@meltt.app</a> immediately.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">13. Changes to This Policy</h2>
            <p className="text-gray leading-relaxed">
              We may update this Privacy Policy as the product evolves. For significant changes, we will notify
              you via the app or email before they take effect. The version number and date at the top always
              reflect the most recent revision.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">14. Contact Us</h2>
            <p className="text-gray leading-relaxed mb-3">
              <a href="mailto:it@meltt.app" className="text-brand underline">it@meltt.app</a><br />
              Barcelona, Spain
            </p>
            <p className="text-gray leading-relaxed">
              We aim to respond to all privacy enquiries within <strong className="text-primary">30 days</strong>.
            </p>
          </section>

          {/* Footer Note */}
          <div className="border-t border-border pt-8 text-sm text-gray leading-relaxed space-y-2">
            <p className="italic">
              Meltt is built by a small team that genuinely cares about doing this right. If anything in this
              policy is unclear, just email us.
            </p>
            <p className="text-muted-foreground">
              Meltt Privacy Policy — Version 1.0 | Private Beta | Barcelona, 2026
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
