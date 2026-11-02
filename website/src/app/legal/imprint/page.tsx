import Link from "next/link"
import PageSection from "@/components/PageSection";
import Stack from "@/components/Stack";

export const metadata = {
    title: 'juliandevelops - Imprint',
    description: 'Imprint / legal notice pursuant to § 5 of the German Digital Services Act (DDG)',
    keywords: [
        "juliandevelops Imprint",
        "Imprint",
        "Legal Notice",
        "Legal",
        "Contact",
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

export default function Imprint() {
    return (
        <main>
            <Stack>
                <h1>Imprint</h1>
                <p>Information pursuant to § 5 DDG (German Digital Services Act)</p>
            </Stack>

            <PageSection>
                <h2>Provider</h2>
                <p>
                    Julian Schumacher<br />
                    Herrenberger Straße 72<br />
                    71069 Sindelfingen<br />
                    Germany
                </p>
            </PageSection>

            <PageSection>
                <h2>Contact</h2>
                <p>
                    Email: <Link href="mailto:contact@julianschumacher.dev">contact@julianschumacher.dev</Link>
                </p>
                <p>
                    Support requests: <Link href="mailto:support@juliandevelops.com">support@juliandevelops.com</Link>
                </p>
            </PageSection>

            <PageSection>
                <h2>Responsible for content pursuant to § 18 para. 2 MStV</h2>
                <p>
                    Julian Schumacher, address as above.
                </p>
            </PageSection>

            <PageSection>
                <h2>Liability for content</h2>
                <p>
                    The contents of this website were created with the greatest care. However, I cannot
                    guarantee the accuracy, completeness or timeliness of the contents. As a service
                    provider, I am responsible for my own content on these pages in accordance with
                    general legislation (§ 7 para. 1 DDG).
                </p>
            </PageSection>

            <PageSection>
                <h2>Liability for links</h2>
                <p>
                    This website contains links to external third-party websites over whose content I
                    have no influence. The respective provider is always responsible for the content of
                    the linked pages. The linked pages were checked for possible legal infringements at
                    the time of linking; no illegal content was identifiable at that time. Upon becoming
                    aware of any legal infringement, I will remove such links immediately.
                </p>
            </PageSection>

            <PageSection>
                <h2>Copyright</h2>
                <p>
                    The content and works created by the site operator on these pages are subject to
                    German copyright law. Third-party contributions are identified as such. Any
                    reproduction, editing, distribution or any kind of exploitation outside the limits
                    of copyright law requires the written consent of the respective author.
                </p>
            </PageSection>

            <PageSection>
                <h2>Dispute resolution</h2>
                <p>
                    I am not willing or obliged to participate in dispute resolution proceedings before
                    a consumer arbitration board.
                </p>
            </PageSection>
        </main>
    )
}
