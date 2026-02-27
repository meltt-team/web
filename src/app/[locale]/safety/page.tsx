import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default async function SafetyPage({ params }: PageProps<"/[locale]/safety">) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-16">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-3xl font-bold text-primary mb-4">Safety Guidelines</h1>
          <p className="text-gray leading-relaxed">
            Meltt is designed to create real-life connections in real places. Your safety and comfort always
            come first. You are always in control of your presence, your interactions, and your experience.
          </p>
        </div>

        <div className="space-y-10 text-primary">

          {/* Section 1 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-4">1. Before You Meet</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold mb-2">✔ Stay in Public Spaces</h3>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>Always meet in public areas within the venue.</li>
                  <li>Avoid leaving the location with someone you just met.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">✔ Tell a Friend</h3>
                <p className="text-gray leading-relaxed mb-2">If you&apos;re planning to meet someone:</p>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>Let a friend know where you are</li>
                  <li>Share the event name</li>
                  <li>Consider sharing your live location</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">✔ Check Their Profile</h3>
                <p className="text-gray leading-relaxed mb-2">Look for:</p>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>Verified profiles (if enabled)</li>
                  <li>Clear photos</li>
                  <li>Completed interests</li>
                </ul>
                <p className="text-gray leading-relaxed mt-2">If something feels off, trust your instinct.</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-4">2. During the Event</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold mb-2">✔ You Can Leave Anytime</h3>
                <p className="text-gray leading-relaxed mb-2">You can:</p>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>Leave the event in the app</li>
                  <li>Hide your profile</li>
                  <li>Block someone instantly</li>
                </ul>
                <p className="text-gray leading-relaxed mt-2">You don&apos;t owe anyone an interaction.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">✔ Meet in Visible Areas</h3>
                <p className="text-gray leading-relaxed mb-2">Choose:</p>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>Bar counters</li>
                  <li>Dance floor</li>
                  <li>Lounge areas</li>
                </ul>
                <p className="text-gray leading-relaxed mt-2">Avoid isolated or dark corners.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">✔ Stay Aware</h3>
                <p className="text-gray leading-relaxed mb-2">Be mindful of:</p>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>Your drink</li>
                  <li>Your belongings</li>
                  <li>Your surroundings</li>
                </ul>
                <p className="text-gray leading-relaxed mt-2 font-medium">Never leave your drink unattended.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-4">3. Messaging &amp; Interaction</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold mb-2">✔ Take Your Time</h3>
                <p className="text-gray leading-relaxed">You don&apos;t need to respond immediately.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">✔ Don&apos;t Share Personal Info Too Quickly</h3>
                <p className="text-gray leading-relaxed mb-2">Avoid sharing:</p>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>Your home address</li>
                  <li>Your hotel location</li>
                  <li>Your workplace</li>
                  <li>Financial details</li>
                  <li>Private social accounts</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">✔ Respect Goes Both Ways</h3>
                <p className="text-gray leading-relaxed mb-2">If someone:</p>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>Pressures you</li>
                  <li>Makes you uncomfortable</li>
                  <li>Sends inappropriate messages</li>
                </ul>
                <p className="text-gray leading-relaxed mt-2 font-medium">→ Block and report immediately.</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">4. If You Feel Uncomfortable</h2>
            <p className="text-gray leading-relaxed mb-3">If something feels wrong:</p>
            <ol className="list-decimal pl-5 text-gray space-y-1 leading-relaxed mb-3">
              <li>Leave the conversation in-app.</li>
              <li>Move to a safer, public part of the venue.</li>
              <li>Inform venue staff if necessary.</li>
              <li>Use the block &amp; report feature.</li>
            </ol>
            <p className="text-gray leading-relaxed font-medium">
              Your safety is more important than being polite.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">5. Reporting &amp; Blocking</h2>
            <p className="text-gray leading-relaxed mb-3">You can report someone for:</p>
            <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed mb-3">
              <li>Harassment</li>
              <li>Inappropriate behavior</li>
              <li>Fake profiles</li>
              <li>Underage users</li>
              <li>Offline misconduct at an event</li>
            </ul>
            <p className="text-gray leading-relaxed">
              Reports are confidential. We review reports seriously and may remove users who violate our
              community standards.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">6. Alcohol &amp; Substances</h2>
            <p className="text-gray leading-relaxed mb-3">Meltt happens in social environments. Please:</p>
            <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed mb-3">
              <li>Drink responsibly</li>
              <li>Never accept drinks you didn&apos;t see being made</li>
              <li>Don&apos;t feel pressured to drink</li>
              <li>Stay in control of your decisions</li>
            </ul>
            <p className="text-gray leading-relaxed">
              Real connection happens best when you feel safe and aware.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">7. Consent &amp; Respect</h2>
            <p className="text-gray leading-relaxed mb-3">Clear, enthusiastic consent is essential.</p>
            <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed mb-3">
              <li>No means no.</li>
              <li>Silence is not consent.</li>
              <li>Pressure is not attraction.</li>
              <li>Mutual interest should feel easy.</li>
            </ul>
            <p className="text-gray leading-relaxed">
              If someone ignores your boundaries, disengage and report.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">8. Online Safety &amp; Privacy</h2>
            <p className="text-gray leading-relaxed mb-3">Meltt does NOT:</p>
            <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed mb-3">
              <li>Share your exact location</li>
              <li>Show your phone number</li>
              <li>Share your personal contact details</li>
            </ul>
            <p className="text-gray leading-relaxed mb-2">Still:</p>
            <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
              <li>Avoid sharing sensitive data</li>
              <li>Be cautious when moving conversations off-platform</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">9. After the Event</h2>
            <p className="text-gray leading-relaxed mb-2">Remember:</p>
            <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
              <li>Chats expire for your privacy.</li>
              <li>You can block someone even after the event.</li>
              <li>You can delete your data anytime.</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-3">10. Trust Your Instincts</h2>
            <p className="text-gray leading-relaxed mb-3">If something feels off, it probably is.</p>
            <p className="text-gray leading-relaxed mb-2">You are never obligated to:</p>
            <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed mb-3">
              <li>Reply</li>
              <li>Meet</li>
              <li>Stay</li>
              <li>Explain yourself</li>
            </ul>
            <p className="text-gray leading-relaxed font-medium">Your comfort comes first.</p>
          </section>

          {/* Section 11 — Disclaimer */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-4">11. Important Disclaimer</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">No Background Checks</h3>
                <p className="text-gray leading-relaxed">
                  Meltt does not conduct criminal background checks, identity verification checks, or
                  screening of its users. While we encourage respectful and safe behavior, we do not
                  guarantee the identity, intentions, or conduct of any user on the platform. Users are
                  solely responsible for their interactions both online and offline.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Personal Responsibility</h3>
                <p className="text-gray leading-relaxed mb-2">By using Meltt, you acknowledge that:</p>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed">
                  <li>You are choosing to interact with other users at your own discretion.</li>
                  <li>You are responsible for your personal safety and decisions.</li>
                  <li>Offline meetings and interactions occur at your own risk.</li>
                </ul>
                <p className="text-gray leading-relaxed mt-3">
                  Meltt provides a platform for connection but does not supervise, monitor, or control
                  in-person interactions between users.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Limitation of Liability</h3>
                <p className="text-gray leading-relaxed mb-2">Meltt is not responsible or liable for:</p>
                <ul className="list-disc pl-5 text-gray space-y-1 leading-relaxed mb-3">
                  <li>The conduct of any user, whether online or offline</li>
                  <li>Any injury, loss, damage, or harm resulting from interactions initiated through the app</li>
                  <li>Events that occur during or after meeting another user</li>
                </ul>
                <p className="text-gray leading-relaxed">
                  If you feel unsafe or experience misconduct, please contact local authorities immediately
                  and report the user to us through the app.
                </p>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="border-t border-border pt-8 text-sm text-gray leading-relaxed">
            <p>
              Questions or concerns?{" "}
              <a href="mailto:it@meltt.app" className="text-brand underline">it@meltt.app</a>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
