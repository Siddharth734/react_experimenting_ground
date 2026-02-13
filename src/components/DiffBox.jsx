import { useRef, useState } from 'react';

export default function DiffBox() {
    const [x, setX] = useState(0); 
    const [y, setY] = useState(0);
    const [inBox, setInBox] = useState(false);
    const [img, setImg] = useState("");
    const diffBoxRef = useRef(null);

    const imgs = ["https://img.icons8.com/?size=96&id=16477&format=png","https://img.icons8.com/?size=120&id=OqjqBCEV9ZkD&format=png","https://img.icons8.com/?size=96&id=95005&format=png","https://img.icons8.com/?size=96&id=17892&format=png","https://img.icons8.com/?size=96&id=18354&format=png"];

    function Setter(e){
        // here getBoundingClientRect() gets pos of diffbox relative to viewport, as clientX & clientY give mouse position relative to viewport
        const diff = diffBoxRef.current.getBoundingClientRect();
        setX(e.clientX - diff.x);
        setY(e.clientY - diff.y);
    }

    function Chooser() {
        setImg(imgs[Math.floor(Math.random()*imgs.length)])
        setInBox(true)
    }
    
    return(
        <div className='diffbox' ref={diffBoxRef} onMouseEnter={Chooser}>
            {
                inBox &&
                <div className='inner-diffbox' onMouseMove={Setter} onMouseLeave={() => setInBox(false)}>    
                    <img id='cursor' style={{ top:`${y}px`, left:`${x}px`}} src={img} alt="" />
                </div>
            }
        </div>
    );
}