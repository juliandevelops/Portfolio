import Link from "next/link"
import PageSection from "@/components/PageSection";
import Stack from "@/components/Stack";

export const metadata = {
    title: 'juliandevelops - Privacy Policy',
    description: 'Privacy policy of this website pursuant to Art. 13 GDPR',
    keywords: [
        "juliandevelops Privacy",
        "Privacy Policy",
        "Data Protection",
        "GDPR",
        "juliandevelops Data Protection",
        "juliandevelops Privacy Policy",
        "Legal",
        "Imprint",
    ],
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
}

export default function Privacy() {
    return (
        <main>
            <Stack>
                <h1>Privacy Policy</h1>
                <p><strong>Last updated: November 2026</strong></p>
                <p>
                    Protecting your personal data matters to me. In this privacy policy I inform
                    you pursuant to Art. 13 GDPR about the nature, scope and purpose of the
                    processing of personal data on this website, as well as about your rights
                    as a data subject.
                </p>
            </Stack>

            <PageSection>
                <h2>1. Controller</h2>
                <p>
                    The controller within the meaning of the General Data Protection Regulation
                    (GDPR) is:
                </p>
                <p>
                    Julian Schumacher<br />
                    Herrenberger Straße 72<br />
                    71069 Sindelfingen<br />
                    Germany
                </p>
                <p>
                    Email: <Link href="mailto:contact@julianschumacher.dev">contact@julianschumacher.dev</Link>
                </p>
                <p>
                    I have not appointed a data protection officer; as a natural person I am not
                    required to do so.
                </p>
            </PageSection>

            <PageSection>
                <h2>2. General notes on data processing</h2>
                <p>
                    Personal data is processed on this website only where necessary to provide the
                    website and its functions, or where you have given consent. The legal bases are
                    Art. 6(1)(a) (consent), (b) (contract / pre-contractual measures) and (f)
                    (legitimate interest) GDPR.
                </p>
                <p>
                    This website does <strong>not use tracking cookies</strong> and no analytics or
                    advertising tracking. The only entry in your browser&rsquo;s local storage
                    (localStorage) is your choice in the cookie banner; it is technically necessary
                    to store your consent decision (§ 25 para. 2 no. 2 TTDSG) and is not evaluated
                    for tracking purposes.
                </p>
            </PageSection>

            <PageSection>
                <h2>3. Hosting and server log files</h2>
                <p>
                    This website is hosted by <Link href="https://vercel.com" target="_blank">Vercel Inc.</Link>{" "}
                    (440 N Barranca Ave #4133, Ontario, CA 91761, USA). When the website is accessed,
                    the host automatically processes access data in server log files (e.g. IP address,
                    date and time of access, requested page, browser type and operating system,
                    referrer URL).
                </p>
                <p>
                    The purpose is the secure and stable operation of the website; the legal basis is
                    Art. 6(1)(f) GDPR (legitimate interest in the operation and security of the
                    service). The log files are deleted by the host after a short period unless they
                    are needed longer to investigate incidents or attacks.
                </p>
                <p>
                    The transfer to the USA is based on the EU Commission&rsquo;s adequacy decision for
                    the EU-US Data Privacy Framework (Art. 45 GDPR); Vercel Inc. is certified
                    accordingly. For more information see the{" "}
                    <Link href="https://vercel.com/legal/privacy-policy" target="_blank">Vercel Privacy Policy</Link>.
                </p>
            </PageSection>

            <PageSection>
                <h2>4. Cookies and local storage</h2>
                <p>
                    This website does not use cookies or comparable technologies for tracking or
                    advertising purposes. Only your consent decision (&ldquo;Accept all&rdquo; /
                    &ldquo;Essential only&rdquo;) is stored in your browser&rsquo;s localStorage so that
                    you are not asked again on every visit. This is technically necessary
                    (§ 25 para. 2 no. 2 TTDSG). You can change or delete the decision at any time via
                    the &ldquo;Cookie settings&rdquo; link in the footer.
                </p>
            </PageSection>

            <PageSection>
                <h2>5. Vercel Speed Insights (only after consent)</h2>
                <p>
                    After your consent (&ldquo;Accept all&rdquo;) I use{" "}
                    <Link href="https://vercel.com/docs/speed-insights" target="_blank">Vercel Speed Insights</Link>{" "}
                    to measure the loading speed of the website. This transmits, among other things,
                    the requested route, browser type, device type and coarse location information
                    (based on the IP address) to Vercel Inc. (USA), where it is processed. No cookies
                    are set. The legal basis is Art. 6(1)(a) GDPR (consent). The transfer to the USA is
                    based on the EU-US Data Privacy Framework (Art. 45 GDPR).
                </p>
                <p>
                    You can withdraw your consent at any time with effect for the future via
                    &ldquo;Cookie settings&rdquo; in the footer; Speed Insights will then no longer be loaded.
                </p>
            </PageSection>

            <PageSection>
                <h2>6. Embedded YouTube videos (only after consent)</h2>
                <p>
                    The home page may embed videos from YouTube, using the privacy-enhanced mode
                    (&ldquo;youtube-nocookie.com&rdquo;). A connection to YouTube is only established
                    once you select &ldquo;Accept all&rdquo; in the cookie banner or explicitly click the
                    video placeholder; in particular, your IP address is then transmitted to Google.
                    Google LLC (USA) may also process the data for its own purposes (e.g. profiling)
                    if you are logged in to Google. The legal basis is Art. 6(1)(a) GDPR (consent).
                    The transfer to the USA is based on the EU-US Data Privacy Framework (Art. 45 GDPR).
                    For more information see the{" "}
                    <Link href="https://policies.google.com/privacy" target="_blank">Google Privacy Policy</Link>.
                </p>
            </PageSection>

            <PageSection>
                <h2>7. Fonts</h2>
                <p>
                    The fonts used (IBM Plex Sans, JetBrains Mono) are provided via
                    Google Fonts but are downloaded at build time and served locally by this website.
                    At runtime, no connection to Google servers is established.
                </p>
            </PageSection>

            <PageSection>
                <h2>8. Contacting me</h2>
                <p>
                    If you contact me by email, the data you provide (name, email address, content of
                    the message) is processed exclusively to handle your request. The legal basis is
                    Art. 6(1)(b) GDPR (pre-contractual measures) or (f) (legitimate interest in
                    answering inquiries). The data is deleted once it is no longer required for the
                    purpose and no statutory retention obligations apply.
                </p>
            </PageSection>

            <PageSection>
                <h2>9. Storage duration</h2>
                <p>
                    Personal data is stored only as long as necessary for the respective purpose or as
                    required by statutory retention periods. The host&rsquo;s server log files are deleted
                    after a short period. Your consent decision in localStorage remains stored until you
                    delete or change it via &ldquo;Cookie settings&rdquo; in the footer.
                </p>
            </PageSection>

            <PageSection>
                <h2>10. Your rights as a data subject</h2>
                <p>You have the following rights vis-à-vis me:</p>
                <ul>
                    <li>Access to your processed data (Art. 15 GDPR)</li>
                    <li>Rectification of inaccurate data (Art. 16 GDPR)</li>
                    <li>Erasure of your data (Art. 17 GDPR)</li>
                    <li>Restriction of processing (Art. 18 GDPR)</li>
                    <li>Data portability (Art. 20 GDPR)</li>
                    <li>Objection to processing (Art. 21 GDPR)</li>
                    <li>Withdrawal of consent with effect for the future (Art. 7(3) GDPR)</li>
                </ul>
                <p>
                    To exercise your rights, a simple message to{" "}
                    <Link href="mailto:contact@julianschumacher.dev">contact@julianschumacher.dev</Link>{" "}
                    is sufficient.
                </p>
                <p>
                    You also have the right to lodge a complaint with a data protection supervisory
                    authority (Art. 77 GDPR). The competent authority is the State Commissioner for Data
                    Protection and Freedom of Information of Baden-Württemberg (LfDI),
                    Postfach 10 29 32, 70025 Stuttgart,{" "}
                    <Link href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank">www.baden-wuerttemberg.datenschutz.de</Link>.
                </p>
            </PageSection>

            <PageSection>
                <h2>11. Right to object (Art. 21 GDPR)</h2>
                <p>
                    Where processing is based on Art. 6(1)(f) GDPR (legitimate interest), you have the
                    right to object at any time, on grounds relating to your particular situation, to the
                    processing of your data. If you object, I will no longer process your data unless I
                    can demonstrate compelling legitimate grounds that override your interests, rights and
                    freedoms.
                </p>
            </PageSection>

            <PageSection>
                <h2>12. Withdrawal of consent</h2>
                <p>
                    Consents you have given (e.g. for Speed Insights or YouTube videos) can be withdrawn
                    at any time with effect for the future by clicking &ldquo;Cookie settings&rdquo; in the
                    footer and changing or deleting your selection. The lawfulness of the processing
                    carried out before the withdrawal remains unaffected.
                </p>
            </PageSection>

            <PageSection>
                <h2>13. Automated decision-making</h2>
                <p>
                    No automated decision-making including profiling pursuant to Art. 22 GDPR takes
                    place.
                </p>
            </PageSection>

            <PageSection>
                <h2>14. Apps</h2>
                <h3>General</h3>
                <p>
                    My apps currently do not send any data to the internet and do not retrieve any
                    either. The apps only access data that you yourself provided and entered in the
                    app. If the data is sensitive, it is stored encrypted.
                </p>
                <h3>Flutter</h3>
                <p>
                    For some of my apps I use <Link href="https://dart.dev" target="_blank">Google&rsquo;s language Dart</Link>{" "}
                    and the corresponding <Link href="https://flutter.dev" target="_blank">Flutter framework</Link>.
                    Because Flutter and Dart are community projects, not every piece of code in my apps
                    is written by me. All packages used can be viewed on{" "}
                    <Link href="https://pub.dev" target="_blank">pub.dev</Link>. The packages of a
                    specific project can be found in that project&rsquo;s GitHub repository, usually linked
                    in the store or the app itself. If you can&rsquo;t find the link, you can{" "}
                    <Link href="https://github.com/juliandevelops?tab=repositories" target="_blank">search here</Link>.
                </p>
                <h3>Swift / SwiftUI</h3>
                <p>
                    My Swift and SwiftUI apps are built with Apple&rsquo;s native system language. These
                    apps may store their data encrypted and sync it to your personal iCloud. This synced
                    data is not visible or accessible to anyone but yourself. For more information,
                    please refer to the respective project page; all projects can be found{" "}
                    <Link href="/work/projects">here</Link>.
                </p>
            </PageSection>

            <PageSection>
                <h2>15. Changes to this privacy policy</h2>
                <p>
                    I reserve the right to adapt this privacy policy so that it always complies with
                    current legal requirements. The version available on this website at any given
                    time applies.
                </p>
            </PageSection>
        </main>
    )
}
