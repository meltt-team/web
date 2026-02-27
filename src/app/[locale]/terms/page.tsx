import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default async function TermsPage({ params }: PageProps<"/[locale]/terms">) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-16">

        {/* Header Meta */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-3xl font-bold text-primary mb-6">Terms of Service</h1>

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
              Access is by invitation only. By participating in the beta, you agree to these Terms of Service.
            </p>
          </div>
        </div>

        <div className="space-y-10 text-primary">

          {/* Section 1 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray leading-relaxed mb-3">
              By downloading, installing, or using the Meltt app (&ldquo;Meltt&rdquo;, &ldquo;the App&rdquo;,
              &ldquo;the Service&rdquo;), you agree to be legally bound by these Terms of Service
              (&ldquo;Terms&rdquo;). If you do not agree, do not use the App.
            </p>
            <p className="text-gray leading-relaxed">
              These Terms form a legally binding agreement between you and the Meltt team, operating from
              Barcelona, Spain.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">2. Eligibility</h2>
            <p className="text-gray leading-relaxed mb-3">
              You must be at least <strong className="text-primary">18 years old</strong> to use Meltt. By
              creating an account, you confirm that you are 18 or older. We reserve the right to terminate any
              account where we have reason to believe the user is under 18.
            </p>
            <p className="text-gray leading-relaxed mb-2">You must also:</p>
            <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
              <li>Not be prohibited from using the Service under applicable law</li>
              <li>Not have previously been banned from Meltt for a violation of these Terms</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">3. Beta Testing</h2>
            <p className="text-gray leading-relaxed mb-3">
              Meltt is currently a private beta. During this phase:
            </p>
            <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed mb-3">
              <li>Features may change, break, or be removed without notice</li>
              <li>The Service may experience downtime or data loss</li>
              <li>Access may be revoked at any time at our sole discretion</li>
              <li>Data collected during the beta may be deleted at the end of the testing period</li>
              <li>We make no guarantee of continued availability</li>
            </ul>
            <p className="text-gray leading-relaxed">
              By participating in the beta, you agree to provide honest feedback and accept that the product
              is not final.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-4">4. Your Account</h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold mb-2">4.1 Registration</h3>
                <p className="text-gray leading-relaxed">
                  You may register using your email address, a Google account, or an Apple ID. You are
                  responsible for keeping your login credentials secure. You may not share your account
                  with anyone else.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">4.2 Accuracy</h3>
                <p className="text-gray leading-relaxed">
                  You agree to provide accurate and complete information during registration and to keep it
                  up to date. Impersonating another person or creating a false identity is strictly prohibited.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">4.3 One Account Per Person</h3>
                <p className="text-gray leading-relaxed">
                  Each person may hold one active account. We reserve the right to merge or terminate
                  duplicate accounts.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">4.4 Account Deletion</h3>
                <p className="text-gray leading-relaxed">
                  You may delete your account at any time through the App settings. Upon deletion, your
                  profile, photos, matches, and messages will be removed in accordance with our{" "}
                  <a href="/privacy-policy" className="text-brand underline">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">5. How Meltt Works</h2>
            <p className="text-gray leading-relaxed mb-3">
              Meltt is a real-world, location-based dating app. You can only discover other users, swipe,
              match, and chat when you are{" "}
              <strong className="text-primary">physically present at the same venue or event</strong> as them.
            </p>
            <ul className="list-disc pl-5 text-gray space-y-2 leading-relaxed">
              <li>
                <strong className="text-primary">Check-in</strong> requires scanning a QR code at the venue
                and being within the venue&apos;s GPS radius. Both are verified server-side. You cannot
                check in remotely.
              </li>
              <li>
                <strong className="text-primary">Presence</strong> means you are actively checked in and
                visible to other checked-in users at the same location. Presence ends when you leave the
                venue area or manually check out.
              </li>
              <li>
                <strong className="text-primary">Remote browsing</strong> — viewing or interacting with users
                outside of a shared physical space — is not a feature of Meltt and is not permitted.
              </li>
              <li>
                Swipes, matches, and messages only exist within the context of a shared physical space.
                There is no global feed or global matching.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-4">6. User Conduct</h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold mb-2">6.1 Prohibited Behaviour</h3>
                <p className="text-gray leading-relaxed mb-2">You agree not to:</p>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>Use Meltt for any unlawful purpose</li>
                  <li>Harass, threaten, stalk, intimidate, or abuse other users</li>
                  <li>Post content that is obscene, hateful, discriminatory, or violent</li>
                  <li>Impersonate another person, including other Meltt users</li>
                  <li>Create fake or misleading profiles</li>
                  <li>Attempt to circumvent the check-in system (e.g. GPS spoofing, QR code sharing)</li>
                  <li>Reverse engineer, decompile, or attempt to extract the source code of the App</li>
                  <li>Use bots, scrapers, or automated tools to interact with the App</li>
                  <li>Attempt to gain unauthorised access to any part of the Service or its infrastructure</li>
                  <li>Interfere with or disrupt the Service or its servers</li>
                  <li>Use Meltt to solicit money, promote commercial services, or send spam</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">6.2 Authenticity</h3>
                <p className="text-gray leading-relaxed">
                  Your profile must represent you honestly. Your photos must be recent, accurate, and of you.
                  Group photos that make it unclear which person is you are not permitted as your primary photo.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-4">7. User Content</h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold mb-2">7.1 Your Content</h3>
                <p className="text-gray leading-relaxed">
                  You retain ownership of the content you upload to Meltt, including profile photos and
                  messages. By submitting content, you grant us a non-exclusive, worldwide, royalty-free
                  licence to use, store, display, and distribute that content solely for the purpose of
                  operating and improving the Service.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">7.2 Content Standards</h3>
                <p className="text-gray leading-relaxed mb-2">You agree not to post content that:</p>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>Is sexually explicit or pornographic</li>
                  <li>Depicts minors in any way</li>
                  <li>Promotes self-harm, suicide, or eating disorders</li>
                  <li>Depicts or encourages illegal activity</li>
                  <li>Infringes on the intellectual property rights of others</li>
                  <li>Contains personal information about third parties without their consent</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">7.3 Our Right to Remove Content</h3>
                <p className="text-gray leading-relaxed">
                  We reserve the right to remove any content that violates these Terms or that we find
                  harmful or objectionable, without prior notice.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">8. Location Data</h2>
            <p className="text-gray leading-relaxed mb-3">
              Using Meltt&apos;s core features requires granting location permission. By enabling location
              access, you acknowledge that:
            </p>
            <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed mb-3">
              <li>Your precise GPS coordinates are transmitted to our servers to verify physical presence at a venue</li>
              <li>
                Location data is processed as described in our{" "}
                <a href="/privacy-policy" className="text-brand underline">Privacy Policy</a>
              </li>
              <li>Check-in attempts, including rejected ones, are logged for security purposes</li>
              <li>We use your location only as described in our Privacy Policy — we do not track your location outside of check-in and presence monitoring, and we do not sell location data</li>
            </ul>
            <p className="text-gray leading-relaxed">
              You can revoke location permission at any time in your device settings. Doing so will prevent
              you from checking in and using core App features.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-4">9. Safety, Blocking, and Reporting</h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold mb-2">9.1 Blocking</h3>
                <p className="text-gray leading-relaxed">
                  You may block any other user at any time. A blocked user will not be able to see your
                  profile, swipe on you, match with you, or message you. Blocking is immediate and permanent
                  unless you choose to unblock.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">9.2 Reporting</h3>
                <p className="text-gray leading-relaxed">
                  You may report any user for behaviour that violates these Terms. We review all reports and
                  may take action including warnings, temporary suspension, or permanent bans.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">9.3 No Guarantee of Safety</h3>
                <p className="text-gray leading-relaxed">
                  We take safety seriously, but we cannot guarantee the conduct of users you meet through
                  Meltt. You are responsible for exercising your own judgement when interacting with others.
                  We strongly recommend meeting people for the first time in public places and informing
                  someone you trust of your plans.
                </p>
                <p className="text-gray leading-relaxed mt-2">
                  We are not liable for the actions of any user, whether online or in person.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">10. Intellectual Property</h2>
            <p className="text-gray leading-relaxed">
              All intellectual property in the App — including its design, code, logos, brand name, and
              trademarks — belongs to Meltt or our licensors. You may not copy, reproduce, modify, or
              distribute any part of the App without our written permission.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">11. Payments</h2>
            <p className="text-gray leading-relaxed">
              Meltt does not currently offer paid features or subscriptions. If we introduce paid features in
              the future, we will update these Terms and provide notice in the App.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">12. Third-Party Services</h2>
            <p className="text-gray leading-relaxed">
              The App uses third-party services including Supabase, Google, and Apple. Your use of those
              services is subject to their respective terms and privacy policies. We are not responsible for
              the practices of third-party providers.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">13. Disclaimers</h2>
            <p className="text-gray leading-relaxed mb-3">
              The App is provided <strong className="text-primary">&ldquo;as-is&rdquo;</strong> and{" "}
              <strong className="text-primary">&ldquo;as available&rdquo;</strong>, without warranty of any
              kind. To the fullest extent permitted by law, we disclaim all warranties, including warranties
              of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <p className="text-gray leading-relaxed mb-2">We do not warrant that:</p>
            <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
              <li>The App will be uninterrupted, error-free, or secure</li>
              <li>Any matches or interactions will meet your expectations</li>
              <li>The App will function on any particular device or operating system version</li>
            </ul>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">14. Limitation of Liability</h2>
            <p className="text-gray leading-relaxed mb-3">
              To the fullest extent permitted by applicable law, we are not liable for any indirect,
              incidental, special, consequential, or punitive damages, including loss of data, loss of
              profits, or damages arising from user interactions — whether online or in person.
            </p>
            <p className="text-gray leading-relaxed">
              Our total liability to you for any claim arising from or related to these Terms or your use of
              the App shall not exceed <strong className="text-primary">€100</strong>.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">15. Indemnification</h2>
            <p className="text-gray leading-relaxed">
              You agree to indemnify and hold harmless the Meltt team from and against any claims, damages,
              liabilities, and expenses (including legal fees) arising from your use of the App, your content,
              or your violation of these Terms.
            </p>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-4">16. Termination</h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold mb-2">16.1 By You</h3>
                <p className="text-gray leading-relaxed">
                  You may stop using the App and delete your account at any time.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">16.2 By Us</h3>
                <p className="text-gray leading-relaxed mb-2">
                  We reserve the right to suspend or permanently terminate your account at any time, with or
                  without notice, for any reason including:
                </p>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>Violation of these Terms</li>
                  <li>Behaviour that poses a risk to other users</li>
                  <li>Extended inactivity</li>
                  <li>End of the beta programme</li>
                </ul>
                <p className="text-gray leading-relaxed mt-2">
                  Upon termination, your right to use the App ceases immediately.
                </p>
              </div>
            </div>
          </section>

          {/* Section 17 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">17. Governing Law and Disputes</h2>
            <p className="text-gray leading-relaxed mb-3">
              These Terms are governed by the laws of <strong className="text-primary">Spain</strong>.
            </p>
            <p className="text-gray leading-relaxed mb-3">
              Any dispute arising from these Terms shall first be attempted to be resolved informally by
              contacting us at{" "}
              <a href="mailto:it@meltt.app" className="text-brand underline">it@meltt.app</a>. If not
              resolved within 30 days, disputes shall be submitted to the exclusive jurisdiction of the courts
              of <strong className="text-primary">Barcelona, Spain</strong>.
            </p>
            <p className="text-gray leading-relaxed">
              If you are a consumer in the EEA, you retain the right to bring proceedings in the courts of
              your country of residence and to access the EU Online Dispute Resolution platform at{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline"
              >
                ec.europa.eu/consumers/odr
              </a>.
            </p>
          </section>

          {/* Section 18 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">18. Changes to These Terms</h2>
            <p className="text-gray leading-relaxed">
              We may update these Terms at any time. We will notify you of significant changes via the App
              or email at least <strong className="text-primary">7 days</strong> before they take effect.
              Continued use of the App after changes take effect constitutes your acceptance.
            </p>
          </section>

          {/* Section 19 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">19. Severability</h2>
            <p className="text-gray leading-relaxed">
              If any provision of these Terms is found to be unenforceable, it will be modified to the
              minimum extent necessary to make it enforceable. The remaining provisions will stay in full force.
            </p>
          </section>

          {/* Section 20 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">20. Entire Agreement</h2>
            <p className="text-gray leading-relaxed">
              These Terms, together with our{" "}
              <a href="/privacy-policy" className="text-brand underline">Privacy Policy</a>, constitute the
              entire agreement between you and Meltt regarding your use of the App.
            </p>
          </section>

          {/* Section 21 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">21. Contact</h2>
            <p className="text-gray leading-relaxed">
              <a href="mailto:it@meltt.app" className="text-brand underline">it@meltt.app</a><br />
              Barcelona, Spain
            </p>
          </section>

          {/* Footer Note */}
          <div className="border-t border-border pt-8 text-sm text-gray leading-relaxed space-y-2">
            <p className="italic">
              Meltt is built by a small team that genuinely cares about creating a safe, fun, and human way
              to meet people. These terms exist to protect everyone — not to be intimidating.
            </p>
            <p className="text-muted-foreground">
              Meltt Terms of Service — Version 1.0 | Private Beta | Barcelona, 2026
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
