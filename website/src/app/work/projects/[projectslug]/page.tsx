import getProjects from "@/data/mapping";
import Project from "@/objects/project";
import Link from "next/link";
import ProjectCarousel, { ProjectCarouselProps } from "@/components/projectCarousel";
import PageSection from "@/components/PageSection";
import Stack from "@/components/Stack";

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

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ projectslug: string }>;
}) {
    const { projectslug } = await params;
    const ar: unknown[] = getProjects();
    const projects: Project[] = ar[0] as Project[];
    const project = projects.find((p) => p.identifier.toLowerCase() === projectslug.toLowerCase());
    const props: ProjectCarouselProps = {
        images: project ? project.screenshots : [],
        altPrefix: project ? project.name : "Project",
    }
    if (!project) {
        return (
            <main>
                <PageSection>
                    <h1>Project Not Found</h1>
                    <p>The project you are looking for does not exist.</p>
                </PageSection>
            </main>
        );
    }
    const connections = Array.from(project.connection.getActive().entries());
    const techStack = [...project.languages, ...project.frameworks];
    return (
        <main>
            <Stack>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <p>
                    {project.firstVersionReleased ? "Published" : "In development"}
                    {" · "}
                    {project.activeSupport ? "Active support" : "Support ended"}
                </p>
            </Stack>
            {project.screenshots.length > 0 && (
                <PageSection>
                    <h2>Screenshots</h2>
                    <ProjectCarousel props={props} projectName={project.identifier} />
                </PageSection>
            )}
            {connections.length > 0 && (
                <PageSection>
                    <h2>Links</h2>
                    <ul>
                        {connections.map(([key, value]) => (
                            <li key={key}>
                                <Link href={value} target="_blank">{key}</Link>
                            </li>
                        ))}
                    </ul>
                </PageSection>
            )}
            {project.features.length > 0 && (
                <PageSection>
                    <h2>Features</h2>
                    <ul>
                        {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </PageSection>
            )}
            {techStack.length > 0 && (
                <PageSection>
                    <h2>Tech stack</h2>
                    <ul>
                        {techStack.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </PageSection>
            )}
        </main>
    );
}
