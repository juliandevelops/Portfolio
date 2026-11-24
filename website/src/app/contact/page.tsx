import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";
import PageSection from "@/components/PageSection";
import Stack from "@/components/Stack";

export const metadata = {
    title: 'juliandevelops - Contact',
    description: 'Get in touch with juliandevelops',
    keywords: [
        "Developer Contact",
        "Programming Contact",
        "Contact",
        "Personal Contact",
        "juliandevelops Contact",
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

            {/* Email contact - preferred, ganz oben */}
            <PageSection className={styles.contactSection}>
                <h2>Preferred</h2>
                <p>
                    Email:{" "}
                    <Link href="mailto:contact@juliandevelops.com?subject=Contact request">
                        contact@juliandevelops.com
                    </Link>
                </p>
            </PageSection>

            {/* Work */}
            <PageSection className={styles.contactSection}>
                <h2>Work</h2>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/github_icon.svg"
                        alt="GitHub Icon"
                        width={20}
                        height={20}
                    />
                    GitHub:
                    <Link href="https://github.com/juliandevelops" target="_blank">@juliandevelops</Link>
                </p>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/codeberg_icon.svg"
                        alt="Codeberg Icon"
                        width={20}
                        height={20}
                    />
                    Codeberg:
                    <Link href="https://codeberg.org/juliandevelops" target="_blank">@juliandevelops</Link>
                </p>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/gitlab_icon.svg"
                        alt="GitLab Icon"
                        width={20}
                        height={20}
                    />
                    GitLab:
                    <Link href="https://gitlab.com/juliandevelops" target="_blank">@juliandevelops</Link>
                </p>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/linkedin_icon.png"
                        alt="LinkedIn Icon"
                        width={20}
                        height={20}
                    />
                    LinkedIn:
                    <Link href="https://www.linkedin.com/in/julian-schumacher-b6005021a/" target="_blank">
                        Julian Schumacher
                    </Link>
                </p>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/keyoxide_icon.svg"
                        alt="Keyoxide Icon"
                        width={20}
                        height={20}
                    />
                    Keyoxide (verifies my accounts):
                    <Link href="https://keyoxide.org/aspe:keyoxide.org:EWZ2NFD5U4SBPC76FOFJSNGRWM" target="_blank">
                        EWZ2NFD5U4SBPC76FOFJSNGRWM
                    </Link>
                </p>
            </PageSection>

            {/* Socials */}
            <PageSection className={styles.contactSection}>
                <h2>Socials</h2>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/youtube_icon.png"
                        alt="YouTube Icon"
                        width={20}
                        height={20}
                    />
                    YouTube:
                    <Link
                        href="https://www.youtube.com/@juliandevelops"
                        target="_blank"
                    >
                        @juliandevelops
                    </Link>
                </p>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/x_icon.svg"
                        alt="X Icon"
                        width={20}
                        height={20}
                    />
                    X (formerly Twitter):
                    <Link href="https://twitter.com/julian_develops" target="_blank">
                        @julian_develops
                    </Link>
                </p>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/w_social_icon.svg"
                        alt="W Social Icon"
                        width={20}
                        height={20}
                    />
                    W Social:
                    <Link href="https://wsocial.eu/profile/juliandevelops" target="_blank">
                        @juliandevelops
                    </Link>
                </p>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/bluesky_icon.svg"
                        alt="Bluesky Icon"
                        width={20}
                        height={20}
                    />
                    Bluesky:
                    <Link href="https://bsky.app/profile/juliandevelops.bsky.social" target="_blank">
                        @juliandevelops
                    </Link>
                </p>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/mastodon_icon.svg"
                        alt="Mastodon Icon"
                        width={20}
                        height={20}
                    />
                    Mastodon:
                    <Link href="https://infosec.exchange/@juliandevelops" target="_blank">
                        @juliandevelops@infosec.exchange
                    </Link>
                </p>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/instagram_icon.svg"
                        alt="Instagram Icon"
                        width={20}
                        height={20}
                    />
                    Instagram:
                    <Link
                        href="https://www.instagram.com/juliandevelops/"
                        target="_blank"
                    >
                        @juliandevelops
                    </Link>
                </p>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/threads_icon.svg"
                        alt="Threads Icon"
                        width={20}
                        height={20}
                    />
                    Threads:
                    <Link
                        href="https://www.threads.com/@juliandevelops"
                        target="_blank"
                    >
                        @juliandevelops
                    </Link>
                </p>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/tiktok_icon.png"
                        alt="TikTok Icon"
                        width={20}
                        height={20}
                    />
                    TikTok:
                    <Link href="https://www.tiktok.com/@juliandevelops" target="_blank">
                        @juliandevelops
                    </Link>
                </p>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/patreon_icon.svg"
                        alt="Patreon Icon"
                        width={20}
                        height={20}
                    />
                    Patreon:
                    <Link href="https://www.patreon.com/juliandevelops" target="_blank">
                        @juliandevelops
                    </Link>
                </p>
            </PageSection>

            {/* Contact */}
            <PageSection className={styles.contactSection}>
                <h2>Contact</h2>
                <h3>Primary</h3>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/threema_icon.svg"
                        alt="Threema Icon"
                        width={20}
                        height={20}
                    />
                    Threema:
                    <Link href="https://threema.id/23X45F8T" target="_blank">
                        23X45F8T
                    </Link>
                </p>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/whatsapp_icon.svg"
                        alt="WhatsApp Icon"
                        width={20}
                        height={20}
                    />
                    WhatsApp Business:
                    <Link href="https://wa.me/message/VCSTUGGOCXERC1" target="_blank">
                        @juliandevelops
                    </Link>
                </p>
                <h3>Secondary</h3>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/telegram_icon.svg"
                        alt="Telegram Icon"
                        width={20}
                        height={20}
                    />
                    Telegram:
                    <Link href="https://t.me/juliandevelops" target="_blank">
                        @juliandevelops
                    </Link>
                </p>
                <p className={styles.socialLink}>
                    <Image
                        src="/socials/discord_icon.svg"
                        alt="Discord Icon"
                        width={20}
                        height={20}
                    />
                    Discord:
                    <Link href="https://discord.com/users/1453004724709097513" target="_blank">
                        juliandevelops
                    </Link>
                </p>
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
                                alt="App Store"
                                height={200}
                                width={200}
                                priority
                                loading="eager"
                            />
                        </Link>
                    </p>
                    <p className={styles.storeLink}>
                        Play Store: <Link href="https://play.google.com/store/apps/developer?id=Julian+Schumacher" target="_blank">Julian Schumacher</Link>
                        <Link href="https://play.google.com/store/apps/developer?id=Julian+Schumacher" target="_blank">
                            <Image
                                src="/stores/play_store_icon.svg"
                                alt="Play Store"
                                height={200}
                                width={200}
                                priority
                                loading="eager"
                            />
                        </Link>
                    </p>
                </div>
            </PageSection>
        </main >
    );
}
