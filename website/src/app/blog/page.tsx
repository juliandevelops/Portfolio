import fs from "node:fs"
import path from "node:path";
import Link from "next/link";
import LinkContainer from "@/components/linkContainer";
import PageSection from "@/components/PageSection";
import Stack from "@/components/Stack";

export const metadata = {
    title: 'Julian Schumacher - Blog',
    description: 'Read my latest blog posts and updates',
    keywords: [
        "Developer Blog",
        "Programming Blog",
        "Blog",
        "Personal Blog",
        "Julian Schumacher Blog",
        "Blog",
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

class BlogEntryDetails {
    title: string
    identifier: string
    previewText: string

    constructor(title: string, identifier: string, previewText: string) {
        this.title = title;
        this.identifier = identifier;
        this.previewText = previewText;
    }
}

export default async function Blog() {
    const blogEntryFiles: string[] = fs.readdirSync("./public/blog");
    const blogEntryNames: string[] = [];
    const blogEntryPreviews: string[] = [];
    blogEntryFiles.forEach(async (fileName) => {
        const fullPath: string = path.join("./public/blog/", fileName);
        const fileContents: string = fs.readFileSync(fullPath, "utf8");
        const headline: string = fileContents.split("\n")[0].replace("# ", "");
        const preview: string = fileContents.split("\n").slice(1, 4).join(" ");
        blogEntryNames.push(headline)
        blogEntryPreviews.push(preview)
    });
    const blogEntries: BlogEntryDetails[] = [];
    for (let i: number = 0; i < blogEntryNames.length; i++) {
        blogEntries.push(
            new BlogEntryDetails(
                blogEntryNames[i],
                blogEntryFiles[i].replace(".md", ""),
                blogEntryPreviews[i]
            )
        );
    }
    return (
        <main>
            <Stack>
                <h1>Blog</h1>
                <p>Read more about my work, projects, and thoughts on software development.</p>
            </Stack>
            <PageSection>
                <h2>Entries</h2>
                {blogEntryFiles.length === 0 ? (
                    <p>No blog entries found.</p>
                ) : (
                    <div className="stack">
                        {blogEntries.map((details) => (
                            <LinkContainer
                                name={details.title}
                                description={details.previewText}
                                href={`/blog/${details.identifier}`}
                                key={details.identifier}
                            />
                        ))}
                    </div>
                )
                }
                <p>Stay tuned for updates!</p>
            </PageSection>
            <PageSection>
                <h2>Learnings</h2>
                <p>
                    For an explicit list of learnings related to a multitude of different technologies and frameworks,
                    visit the <Link href="/learnings">Learnings page</Link>.
                </p>
            </PageSection>
        </main>
    )
}
