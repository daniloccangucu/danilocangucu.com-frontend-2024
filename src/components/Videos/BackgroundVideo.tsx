import './BackgroundVideo.css'
import bgVideo from './bg-glitch-blue.mp4';

function BackgroundVideo() {
  return (
    <video autoPlay loop muted playsInline className="background-video -mt-6">
      <source src={bgVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default BackgroundVideo
