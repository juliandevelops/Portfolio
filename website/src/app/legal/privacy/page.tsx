import Link from "next/link"
import PageSection from "@/components/PageSection";
import Stack from "@/components/Stack";

export const metadata = {
    title: 'Julian Schumacher - Privacy',
    description: 'Privacy policy regarding my projects',
    keywords: [
        "Julian Schumacher Privacy",
        "Privacy Policy",
        "Data Protection",
        "App Privacy",
        "Website Privacy",
        "Developer Privacy",
        "Julian Schumacher Data Protection",
        "Julian Schumacher Privacy Policy",
        "Legal",
        "Julian Schumacher Legal",
        "Julian Schumacher Legal Information"
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

export default function Privacy() {
    return (
        <main>
            <Stack>
                <h1>Website</h1>
                <h2>General</h2>
                <p>
                    This Website itself does not use Cookies and / or tracking to track you.
                    However, the Hoster of the Website and / or provider may do that.
                    Those privacy policies are here to find:
                </p>
                <ul>
                    <li>
                        <Link href="https://vercel.com/legal/privacy-policy" target="_blank">Vercel Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="https://www.strato.de/datenschutz/" target="_blank">Strato Privacy Policy</Link>
                    </li>
                </ul>
            </Stack>
            <PageSection>
                <h1>Apps</h1>
                <h2>General</h2>
                <p>
                    Currently, my Apps do not send any Data to the Internet
                    and do also not retrieve them.
                    The Apps only access data you - the User - provided and
                    entered in the App.
                    If the Data are sensitive, they are encrypted.
                </p>
            </PageSection>
            <PageSection>
                <h2>Flutter Specific</h2>
                <p>
                    For some of my Apps i use <Link href="https://dart.dev" target="_blank">Googles Language Dart</Link> and the corresponding <Link
                        href="https://flutter.dev" target="_blank">Framework Flutter</Link>.
                    You can find more about these languages on the linked Sites.
                    Because Flutter and Dart are based on the community and packages / plugins
                    developed by the community, not every code, that is used in my App
                    is written by me.
                    All the Packages can be found <Link href="https://pub.dev" target="_blank">here</Link>.
                    Google check&rsquo;s the Packages, but i cannot garantee that these Packages are
                    100% secure and bug-free.
                    Although i will do my best to remove packages that aren&rsquo;t necessary, suspicious or
                    not working.
                    To see more information about the packages used in an individual App,
                    please refer to the Github repository of this App, mostly linked in the Store or
                    the App itself.
                    If you do not find the link, you can <Link href="https://github.com/Julessh05?tab=repositories" target="_blank">search
                        here</Link>.
                </p>
            </PageSection>
            <PageSection>
                <h2>Swift Specific</h2>
                <p>
                    My Swift and SwiftUI Apps - most of my more recent Apps,
                    are being build usind Apple&rsquo;s own native system language, which
                    provides me access to system level functions and especially native functions.
                    These Apps may store their Data encrypted and may sync it to your personal iCloud.
                    These synced Data are not visible or accessible for anyone but yourself.
                    To read more about storing and security, please refer to the projects own
                    page, all Projects can be found <Link href="/work/projects">here</Link>.
                </p>
            </PageSection>
        </main>

    )
}
