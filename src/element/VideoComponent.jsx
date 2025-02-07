import media1 from "../assets/media/video.mp4";

const VideoComponent = () => {
    return (
       <video src={media1} 
            // ref={videoRef} 
            autoPlay muted  
            loop id="video-background" disablePictureInPicture  controls plays-inline="true"
        >
            {/* <source src={media1}  type="video/mp4"/> */}
        </video>
    );
};

export default VideoComponent;