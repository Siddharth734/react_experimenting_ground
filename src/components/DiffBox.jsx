import { useRef, useState } from 'react';

export default function DiffBox() {
    const [x, setX] = useState(0); 
    const [y, setY] = useState(0);
    const diffBoxRef = useRef(null);

    function Setter(e){
        // here getBoundingClientRect() gets pos of diffbox relative to viewport, as clientX & clientY give mouse position relative to viewport
        const diff = diffBoxRef.current.getBoundingClientRect();
        setX(e.clientX - diff.x);
        setY(e.clientY - diff.y);
    }
    
    return(
        <div className='diffbox' ref={diffBoxRef} onMouseMove={Setter}>
            {
                
                <img id='cursor' style={{ top:`${y}px`, left:`${x}px`}} src="https://img.icons8.com/?size=96&id=16477&format=png" alt="" />
            }
        </div>
    );
}