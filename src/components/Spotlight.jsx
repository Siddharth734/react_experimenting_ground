import { useRef, useState } from 'react';
import horrorVid from "../assets/horror_spotlight.mp4";
import horrorAud from "../assets/horror_spotlight_audio.wav";

// based on linear & radial gradient
export default function Spotlight() {
    const [x, setX] = useState(300); 
    const [y, setY] = useState(300);
    const boxRef = useRef(null);
    const audRef = useRef(null);
    
    function Setter(e) {
        const offset = boxRef.current.getBoundingClientRect();
        setX(e.clientX - offset.x);
        setY(e.clientY - offset.y);
    }

    function audioPlayer() {
        audRef.current.play();
    }

    function audioStopper() {
        audRef.current.pause();
        audRef.current.currentTime = 0;
    }
    
    return(
        <>
            <div className="obox" onMouseEnter={audioPlayer} onMouseLeave={audioStopper}>
                <div className="box" onMouseMove={Setter} ref={boxRef}
                style={{ "--x": `${x}px`, "--y": `${y}px`}}>
                </div>
                <video src={horrorVid} autoPlay loop muted playsInline></video>
                <audio ref={audRef} src={horrorAud}></audio>
            </div>
        </>
    );
}