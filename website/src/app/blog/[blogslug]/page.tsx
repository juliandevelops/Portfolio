import path from "path";
import fs from "node:fs"
import Link from "next/link";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import Stack from "@/components/Stack";
import { blogTags } from "@/data/content";
import styles from "./page.module.scss";

export const metadata = {
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

// https://nextjs.org/learn/pages-router/dynamic-routes-render-markdown
export default async function BlogPage({
    params,
}: {
    params: Promise<{ blogslug: string }>;
}) {
    const { blogslug } = await params;
    const fullPath = path.join("./public/blog/", blogslug + ".md");
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const processesContent = await remark().use(remarkGfm).use(remarkHtml).process(fileContents.toString());
    const contentHtml = processesContent.toString();
    const tags: string[] = blogTags[blogslug] ?? [];

    return (
        <main>
            <Stack>
                <article>
                    <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: contentHtml }} />
                    {tags.length > 0 && (
                        <p className={styles.tagRow}>
                            {tags.map((t) => (
                                <Link key={t} href={`/blog?tag=${encodeURIComponent(t)}`} className={styles.tag}>
                                    {t}
                                </Link>
                            ))}
                        </p>
                    )}
                </article>
            </Stack>
        </main>
    );
}
