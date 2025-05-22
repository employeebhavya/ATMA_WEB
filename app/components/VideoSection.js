"use client";
import { useRef } from "react";

const VideoSection = () => {
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <section className="mb-[60px] md:mb-[15vh]">
      <div className="relative container w-full h-auto overflow-hidden group">
        {/* Video element with controls */}
        <video ref={videoRef} controls className="w-full h-full object-cover">
          {/* Replace with your local video path */}
          <source src="/minister.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Custom play button overlay (shown when video is paused) */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            videoRef.current?.paused
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            onClick={togglePlay}
            className="p-4 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
            aria-label="Play video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
