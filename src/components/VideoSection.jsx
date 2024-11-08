import React, { useRef, useState } from "react";

const VideoSection = () => {
    const basePath = import.meta.env.MODE === 'production' ? '' : '';


  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div 
      className="relative flex justify-center items-center w-full h-[80vh] md:h-[643px]"
      onClick={handlePlayPause} 
    >
      <video
        ref={videoRef}
        src={`${import.meta.env.BASE_URL}assets/Exterior.mp4`}
        className="absolute inset-0 w-full h-full object-cover cursor-pointer"
        alt="Background"
        autoPlay
        loop
        muted
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>

      {!isPlaying && (
        <div className="relative flex justify-center items-center z-10">
          <img
            src={`${import.meta.env.BASE_URL}assets/icons/play.png`}
            alt="Play Button"
            className="w-16 h-16 md:w-24 md:h-24 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default VideoSection;
