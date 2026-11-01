"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.scss";
import getProjects from "@/data/mapping";
import Project from "@/objects/project";
import ProjectType from "@/objects/project_type";
import LinkContainer from "@/components/linkContainer";

export default function Work() {
    const ar: unknown[] = getProjects();
    const projects: Project[] = ar[0] as Project[];
    const types: ProjectType[] = ar[1] as ProjectType[];
    const allType: ProjectType = {
        identifier: "all",
        name: "All"
    }
    const [type, setType] = useState(allType);

    return (
        <main className={styles.workPage}>
            <div className={styles.hero}>
                <h1>Work</h1>
                <p>All my projects, apps, packages and tools — archived and grouped by type.</p>
                <p>Note: My current focus is on more complex projects coming soon, so most current projects are on hold for a while.</p>
            </div>
            {/* Type selector */}
            <h2>Type</h2>
            <div className={styles.typeSelector}>
                <ul>
                    <li key="all">
                        <button
                            onClick={() => setType(allType)}
                            className={"all" == type.identifier ? styles.active : ''}
                        >
                            All
                        </button>
                    </li>
                    {types.map((t) => (
                        <li key={t.identifier}>
                            <button
                                onClick={() => setType(t)}
                                className={t.identifier == type.identifier ? styles.active : ''}
                            >
                                {t.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Projects */}
            <div style={{ height: "30px" }}></div>
            {type.identifier == "all" ? ShowAllProjects(types, projects) :
                <>
                    <h2>{type.name}</h2>
                    <div className={styles.projectGrid}>
                        {projects.filter((p) => p.projectType == type.identifier).length == 0 ?
                            <div className={styles.emptyState}>
                                <b>No projects of this type available yet.</b>
                                <p>Stay tuned for more!</p>
                            </div> :
                            projects
                                .filter((p) => p.projectType == type.identifier)
                                .map((project) => (
                                    <LinkContainer
                                        name={project.name}
                                        description={project.description}
                                        href={`/work/projects/${project.identifier}`}
                                        key={project.identifier}
                                    />
                                ))}
                    </div>
                </>
            }
            {/* Contributions */}
            <div className={styles.contributions}>
                <h2>Contributions</h2>
                <p>
                    Currently no completed contributions to third-party open source projects.
                    You can find my own repositories on{" "}
                    <Link href="https://github.com/juliandevelops" target="_blank">GitHub</Link>.
                </p>
            </div>
        </main>
    );
}

function ShowAllProjects(types: ProjectType[], projects: Project[]) {
    return (
        <div key={"all-projects"}>
            {
                types.map((type) => (
                    <div key={`all-type-${type.identifier}`} className={styles.typeBlock}>
                        <h2>{type.name}</h2>
                        <div className={styles.projectGrid}>
                            {projects.filter((p) => p.projectType == type.identifier).length == 0 ?
                                <div className={styles.emptyState}>
                                    <b>No projects of this type available yet.</b>
                                    <p>Stay tuned for more!</p>
                                </div> :
                                projects
                                    .filter((p) => p.projectType == type.identifier)
                                    .map((project) => (
                                        <LinkContainer
                                            name={project.name}
                                            description={project.description}
                                            href={`/work/projects/${project.identifier}`}
                                            key={`all-${project.identifier}`}
                                        />
                                    ))}
                        </div>
                    </div>
                )
                )
            }
        </div>
    );
}
