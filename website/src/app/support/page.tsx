import Link from "next/link";
import PageSection from "@/components/PageSection";
import Stack from "@/components/Stack";

export const metadata = {
    title: 'Julian Schumacher - Support',
    description: 'Get support for my projects and more',
    keywords: [
        "Developer Support",
        "Programming Support",
        "Support",
        "Personal Support",
        "Julian Schumacher Support",
        "Support",
        "App Support",
        "Service Support",
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

export default function Support() {
    return (
        <main>
            <Stack>
                <h1>Support</h1>
                <p>If you need support, you can reach the support via <Link
                    href="mailto:support@julianschumacher.dev?subject=Support Request">E-mail</Link>.</p>
            </Stack>
            <PageSection>
                <p>For information regarding current issues, problems and projects, please first refer to <Link
                    href="https://github.com/juliandevelops" target="_blank">Github</Link>.</p>
                <p>If you search for further information regarding a specific project, please refer to that project&rsquo;s
                    Github Repository and its issues. You can find the projects <Link href="/work/projects">here</Link>.
                </p>
            </PageSection>
        </main>
    )
}
