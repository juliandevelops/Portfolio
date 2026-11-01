"use client";

import { setConsent, useConsent } from "./consent";
import styles from "./youTubeEmbed.module.scss";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
};

/**
 * Two-click solution for YouTube embeds: no resources are loaded from Google
 * until explicit consent has been given. Only clicking the placeholder
 * establishes a connection to YouTube.
 */
export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const consent = useConsent();

  if (consent === "all") {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      className={styles.placeholder}
      onClick={() => setConsent("all")}
      aria-label={`Load ${title}. This establishes a connection to YouTube.`}
    >
      <span className={styles.playIcon} aria-hidden="true" />
      <span className={styles.placeholderTitle}>{title}</span>
      <span className={styles.placeholderNote}>
        Playback establishes a connection to YouTube (Google, USA) and transmits
        your IP address. Details in the Privacy Policy.
      </span>
    </button>
  );
}
