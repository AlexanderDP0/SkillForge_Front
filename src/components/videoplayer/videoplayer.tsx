import React from "react";

interface VideoPlayerProps {
  link: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ link }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full">
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-lg"
            src={link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
