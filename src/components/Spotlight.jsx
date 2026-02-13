import { useRef, useState } from 'react';

// based on linear & radial gradient
export default function Spotlight() {
    const [x, setX] = useState(300); 
    const [y, setY] = useState(300);
    const boxRef = useRef(null);
    
    function Setter(e) {
        const offset = boxRef.current.getBoundingClientRect();
        setX(e.clientX - offset.x);
        setY(e.clientY - offset.y);
    }
    
    return(
        <>
            <div className="obox">
                <div className="box" onMouseMove={Setter} ref={boxRef}
                style={{ "--x": `${x}px`, "--y": `${y}px`}}>
                    {/* <div className="ibox">BOX</div>
                    <div className="ibox">BOX</div>
                    <div className="ibox">BOX</div>
                    <div className="ibox">BOX</div>
                    <div className="ibox">BOX</div>
                    <div className="ibox">BOX</div> */}
                </div>
            </div>
        </>
    );
}