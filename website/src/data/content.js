// Central content configuration for the site.
// - featuredProjects: identifiers (from public/projects/projects.json) shown on the home page
// - youtubeVideoId: set a YouTube video ID to show a video section on the home page (null = hidden)
// - blogTags: tags per blog post slug (file name without .md in public/blog)

export const featuredProjects = ["habrix", "protecto_pass", "financer"];

export const youtubeVideoId = null;

/** @type {Record<string, string[]>} */
export const blogTags = {
  website_building: ["Learnings", "Web"],
  using_ai_in_development: ["Opinion", "AI"],
  compiling_tools_on_macos_from_source: ["Learnings", "macOS"],
};
