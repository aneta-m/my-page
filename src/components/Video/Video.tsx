import React, { useState, useRef } from "react";
import styles from "./Video.module.scss";

const Video = ({ sources }: { sources: { src: string; type: string }[] }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  const handleClick = () => {
    if (ref.current) {
      setIsVideoPlaying(true);
      ref.current.play();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={
        isVideoPlaying
          ? styles.container
          : `${styles.container} ${styles.overlay}`
      }
    >
      {!isVideoPlaying && (
        <button className={styles.play_button}>
          <div className={styles.icon_wrapper}>
            <i className={`fa-solid fa-play icon ${styles.icon}`}></i>
          </div>
        </button>
      )}
      <video
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
    </div>
  );
};

export default Video;
