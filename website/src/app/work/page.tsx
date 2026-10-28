import Link from "next/link";
import PageSection from "@/components/PageSection";
import Stack from "@/components/Stack";

export const metadata = {
    title: 'Julian Schumacher - Work',
    description: 'Explore my work and projects',
    keywords: [
        "Projects",
        "Apps",
        "Applications",
        "Portfolio",
        "Developer Portfolio",
        "Julian Schumacher Projects",
        "Work",
        "Development Projects",
        "Software Projects",
        "Programming Projects",
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

export default function Projects() {
    return (
        <main>
            <Stack>
                <h1>Work</h1>
                <p>
                    Explore my work, projects and more here.
                    Browse through various projects and applications and find something you like!
                    Each project has its own page with more information and links to the respective stores
                    or repositories.
                </p>
            </Stack>
            <PageSection>
                <h2>Projects</h2>
                <p>You can find my projects on the corresponding page <Link href="/work/projects">here</Link>.</p>
            </PageSection>
            <PageSection>
                <h2>Contributions</h2>
                <p>Find out about my contributions to various projects and open source initiatives <Link href="/work/contributions">here</Link>.</p>
            </PageSection>
            <PageSection>
                <h2>Other</h2>
                <p>Some projects and ideas which are currently not listed on the projects page can be found here.</p>
                <p>Stay tuned, more coming soon!</p>
            </PageSection>
        </main>
    )
}
