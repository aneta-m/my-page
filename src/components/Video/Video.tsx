import React, { useState, useRef } from "react";
import useElementInViewport from "../../hooks/useElementInViewport";
import useWindowResize from "../../hooks/useWindowResize";
import styles from "./Video.module.scss";

const Video = ({ sources }: { sources: { src: string; type: string }[] }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  const isMobile = useWindowResize();

  const handleClick = () => {
    if (ref.current) {
      if (!isVideoPlaying) {
        setIsVideoPlaying(true);
        ref.current.play();
      }
      if (isVideoPlaying) {
        setIsVideoPlaying(false);
        ref.current.pause();
      }
    }
  };

  const handleNotInViewport = () => {
    if (isVideoPlaying && ref.current) {
      ref.current.pause();
    }
  };

  const handleInViewport = () => {
    if (isVideoPlaying && ref.current) {
      ref.current.play();
    }
  };

  useElementInViewport(ref, handleInViewport, handleNotInViewport);

  return (
    <div
      data-testid="video-container"
      onClick={handleClick}
      className={
        isVideoPlaying
          ? styles.container
          : `${styles.container} ${styles.overlay}`
      }
    >
      {!isVideoPlaying && (
        <button className={styles.play_button} aria-label="Play video">
          <div className={styles.icon_wrapper}>
            <i className={`fa-solid fa-play icon ${styles.icon}`}></i>
          </div>
        </button>
      )}
      {isMobile ? (
        <video
          data-testid="video"
          ref={ref}
          className={styles.video}
          disablePictureInPicture
          muted
        >
          {sources.map((source, index) => (
            <source src={source.src} type={source.type} key={index} />
          ))}
          Sorry, your browser doesn't support videos.
        </video>
      ) : (
        <video
          data-testid="video"
          ref={ref}
          className={styles.video}
          controls
          controlsList="nofullscreen nodownload noremoteplayback"
          disablePictureInPicture
          muted
        >
          {sources.map((source, index) => (
            <source src={source.src} type={source.type} key={index} />
          ))}
          Sorry, your browser doesn't support videos.
        </video>
      )}
    </div>
  );
};

export default Video;
