import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";
import PageSection from "@/components/PageSection";
import Stack from "@/components/Stack";

export const metadata = {
    title: 'Julian Schumacher - Contact',
    description: 'Get in touch with Julian Schumacher',
    keywords: [
        "Developer Contact",
        "Programming Contact",
        "Contact",
        "Personal Contact",
        "Julian Schumacher Contact",
        "Contact",
        "Get in Touch",
        "Contact Developer",
        "Developer Socials"
    ],
    formatDetection: {
        email: true,
        address: true,
        telephone: true,
    },
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

export default function Contact() {
    return (
        <main>
            <Stack>
                <h1>Contact</h1>
                <p>
                    In case of any questions, requests or other concerns, please don&rsquo;t hesitate to reach out.
                    You can pick your preferred method of contact below.
                    Most of the time, a simple email will get you the fastest response.
                    Please include as many details as possible regarding your request for me to help you best.
                </p>
            </Stack>

            {/* Email contact */}
            <PageSection className={styles.contactSection}>
                <h2>Preferred</h2>
                <p>Email: <Link href="mailto:contact@julianschumacher.dev?subject=Contact request">contact@julianschumacher.dev</Link></p>
            </PageSection>

            {/* Other Contacts */}
            <h2>Others</h2>

            {/* Work contact */}
            <PageSection className={styles.contactSection}>
                <h3>Work</h3>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/github_icon.svg"
                        alt="GitHub Icon"
                        width={25}
                        height={12.5}
                    />
                    GitHub:
                    <Link href="https://github.com/juliandevelops" target="_blank">@juliandevelops</Link>
                </p>
            </PageSection>

            {/* Social Links */}
            <PageSection className={styles.contactSection}>
                <h3>Socials</h3>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/instagram_icon.svg"
                        alt="Instagram Icon"
                        width={20}
                        height={20}
                    />
                    Instagram:
                    <Link href="https://www.instagram.com/juliandevelops/" target="_blank">@juliandevelops</Link>
                </p>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/x_icon.svg"
                        alt="X Icon"
                        width={20}
                        height={20}
                    />
                    (formerly Twitter):
                    <Link href="https://twitter.com/julian_develops" target="_blank">@julian_develops</Link>
                </p>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/linkedin_icon.png"
                        alt="LinkedIn Icon"
                        height={20}
                        width={20}
                    />
                    LinkedIn:
                    <Link href="https://www.linkedin.com/in/julian-schumacher-b6005021a/" target="_blank">Julian Schumacher</Link>
                </p>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/patreon_icon.svg"
                        alt="Patreon Icon"
                        height={20}
                        width={20}
                    />
                    Patreon: <Link href="https://www.patreon.com/juliandevelops" target="_blank">@juliandevelops</Link></p>
            </PageSection>

            {/* Support section */}
            <PageSection className={styles.contactSection}>
                <h3>Support</h3>
                <p>For support requests please refer to the <Link href="/support">dedicated support page.</Link></p>
            </PageSection>

            {/* Other projects */}
            <PageSection className={styles.contactSection}>
                <h3>Other projects</h3>
                <div className={styles.storeLinks}>
                    <p className={styles.storeLink}>
                        App Store: <Link href="https://apps.apple.com/de/developer/julian-schumacher/id1681063160" target="_blank">Julian Schumacher</Link>
                        <Link href="https://apps.apple.com/de/developer/julian-schumacher/id1681063160" target="_blank">
                            <Image
                                src="/stores/app_store_icon.svg"
                                alt="V3S Icon"
                                height={200}
                                width={200}
                            />
                        </Link>
                    </p>
                    <p className={styles.storeLink}>
                        Play Store: <Link href="https://play.google.com/store/apps/developer?id=Julian+Schumacher" target="_blank">Julian Schumacher</Link>
                        <Link href="https://play.google.com/store/apps/developer?id=Julian+Schumacher" target="_blank">
                            <Image
                                src="/stores/play_store_icon.svg"
                                alt="V3S Icon"
                                height={200}
                                width={200}
                            />
                        </Link>
                    </p>
                </div>
            </PageSection>
        </main >
    );
}
