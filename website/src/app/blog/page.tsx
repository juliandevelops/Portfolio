import fs from "node:fs"
import path from "node:path";
import Link from "next/link";
import LinkContainer from "@/components/linkContainer";
import PageSection from "@/components/PageSection";
import Stack from "@/components/Stack";
import { blogTags } from "@/data/content";
import styles from "./page.module.scss";

export const metadata = {
    title: 'juliandevelops - Blog',
    description: 'Read my latest blog posts and updates',
    keywords: [
        "Developer Blog",
        "Programming Blog",
        "Blog",
        "Personal Blog",
        "juliandevelops Blog",
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
    tags: string[]

    constructor(title: string, identifier: string, previewText: string, tags: string[]) {
        this.title = title;
        this.identifier = identifier;
        this.previewText = previewText;
        this.tags = tags;
    }
}

export default async function Blog({
    searchParams,
}: {
    searchParams: Promise<{ tag?: string }>;
}) {
    const { tag } = await searchParams;
    const activeTag = tag ? tag.toLowerCase() : null;

    const blogEntryFiles: string[] = fs.readdirSync("./public/blog");
    const blogEntries: BlogEntryDetails[] = [];
    for (const fileName of blogEntryFiles) {
        const fullPath: string = path.join("./public/blog/", fileName);
        const fileContents: string = fs.readFileSync(fullPath, "utf8");
        const headline: string = fileContents.split("\n")[0].replace("# ", "");
        const preview: string = fileContents.split("\n").slice(1, 4).join(" ");
        const identifier = fileName.replace(".md", "");
        const tags = blogTags[identifier] ?? [];
        blogEntries.push(new BlogEntryDetails(headline, identifier, preview, tags));
    }
    const allTags: string[] = [...new Set(blogEntries.flatMap((e) => e.tags))];
    const visibleEntries = activeTag
        ? blogEntries.filter((e) => e.tags.some((t) => t.toLowerCase() === activeTag))
        : blogEntries;

    return (
        <main>
            <Stack>
                <h1>Blog</h1>
                <p>Read more about my work, projects, and thoughts on software development.</p>
            </Stack>
            <div className={styles.tagFilter}>
                <Link
                    href="/blog"
                    className={`${styles.tag} ${!activeTag ? styles.activeTag : ""}`}
                >
                    All
                </Link>
                {allTags.map((t) => (
                    <Link
                        key={t}
                        href={`/blog?tag=${encodeURIComponent(t)}`}
                        className={`${styles.tag} ${activeTag === t.toLowerCase() ? styles.activeTag : ""}`}
                    >
                        {t}
                    </Link>
                ))}
            </div>
            <PageSection>
                <h2>Entries</h2>
                {visibleEntries.length === 0 ? (
                    <p>No blog entries found{activeTag ? ` for "${activeTag}"` : ""}.</p>
                ) : (
                    <div className="stack">
                        {visibleEntries.map((details) => (
                            <LinkContainer
                                name={details.title}
                                description={details.previewText}
                                href={`/blog/${details.identifier}`}
                                key={details.identifier}
                            />
                        ))}
                    </div>
                )}
                <p>Stay tuned for updates!</p>
            </PageSection>
        </main>
    )
}
