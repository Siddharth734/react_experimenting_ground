import { useRef, useState } from 'react';

export default function HackText() {
    const chars = '$#@!^%&*()_+{}|:"<>?~`-=][\;/.,*&^%$#@!';
    const OGtxt = 'You are Hacked, now we own the console';
    const [hackTxt,setHackTxt] = useState(OGtxt);
    const txtRef = useRef(null);

    let iteration = 0;

    function txtEntry(){
        if(txtRef.current) return;
        txtRef.current = setInterval(() => {
            const newTxt = OGtxt.split('').map((char, index) => {
                if(index < iteration)
                    return char;
                return chars.split('')[Math.floor(Math.random()*chars.length)];
            }).join('');
            iteration += 0.2;
            
            setHackTxt(newTxt);
        },10)
    }

    function txtLeave() {
        clearInterval(txtRef.current);
        txtRef.current = null;
        setHackTxt(OGtxt);
    }
    
    return (
        <>
            <div className='h-text'>
                <div onMouseEnter={txtEntry} onMouseLeave={txtLeave}>
                    <h1>{hackTxt}</h1>
                </div>
            </div>
        </>
    );
}