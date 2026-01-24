import { useState } from 'react';

export default function DiffBox() {
    const [x, setX] = useState(0); 
    const [y, setY] = useState(0); 
    
    return(
        <div className='diffbox' onMouseMove={(e) => { setX(e.clientX); setY(e.clientY); }}>
            <img id='cursor'
            style={{ top:`${y}px`, left:`${x}px`}}
            src="https://img.icons8.com/?size=96&id=16477&format=png" alt="" />
        </div>
    );
}