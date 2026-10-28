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
    } else {
        return (
            <main>
                <Stack>
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                </Stack>
                <PageSection>
                    <h2>Screenshots</h2>
                    {project.screenshots.length === 0 ? (
                        <p>No screenshots available yet.</p>
                    ) : (
                        <ProjectCarousel props={props} projectName={project.identifier} />
                    )}
                </PageSection>
                <PageSection>
                    <h2>General</h2>
                    <p>{project.activeSupport ? "Active support" : "Inactive support"}</p>
                    <p>{project.firstVersionReleased ? "Published" : "Still in development"}</p>
                    <div className="stack">
                        <h3>Ready on</h3>
                        {project.typeImplemented.length == 0 ?
                            <p>No types ready yet</p>
                            :
                            <ul>
                                {project.typeImplemented.map((type, index) => (
                                    <li key={index}>{type}</li>
                                ))}
                            </ul>
                        }
                    </div>
                    <div className="stack">
                        <h3>Intended on</h3>
                        <ul>
                            {project.typeGoal.map((type, index) => (
                                <li key={index}>{type}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="stack">
                        <h3>Platforms ready</h3>
                        {project.platformsReady.length == 0 ?
                            <p>No platforms ready yet</p>
                            :
                            <ul>
                                {project.platformsReady.map((platform, index) => (
                                    <li key={index}>{platform}</li>
                                ))}
                            </ul>
                        }
                    </div>
                    <div className="stack">
                        <h3>Intended platforms</h3>
                        <ul>
                            {project.platformsGoal.map((platform, index) => (
                                <li key={index}>{platform}</li>
                            ))}
                        </ul>
                    </div>
                </PageSection>
                <PageSection>
                    <h2>Features</h2>
                    <ul>
                        {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </PageSection>
                <PageSection>
                    <h2>Technologies</h2>
                    <p>Technologies used in development of this project</p>
                    <div className="stack">
                        <h3>Languages</h3>
                        {project.languages.length == 0 ?
                            <p>No Language provided</p>
                            :
                            <ul>
                                {project.languages.map((language, index) => (
                                    <li key={index}>{language}</li>
                                ))}
                            </ul>
                        }
                    </div>
                    <div className="stack">
                        <h3>Frameworks</h3>
                        {project.frameworks.length == 0 ?
                            <p>No Frameworks used</p>
                            :
                            <ul>
                                {project.frameworks.map((framework, index) => (
                                    <li key={index}>{framework}</li>
                                ))}
                            </ul>
                        }
                    </div>
                </PageSection>
                <PageSection>
                    <h2>Connection</h2>
                    <ul>
                        {Array.from(project.connection.getActive().entries()).map(([key, value]) => (
                            <li key={key}>
                                <Link href={value} target="_blank">{key}</Link>
                            </li>
                        ))}
                    </ul>
                </PageSection>
            </main>
        );
    }
}
