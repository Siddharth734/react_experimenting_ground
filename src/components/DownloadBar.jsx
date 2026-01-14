import { useState, useEffect } from 'react';

export default function DownloadBar() {
    const [progress, setProgress] = useState(0);
    const [dText, setDText] = useState("Download");
    const isComplete = progress === 100;
    let num = 50+Math.floor(Math.random()*50);
    let num2 = num*100;

    function IncProgress() {
        if(dText==="Download") setDText("Downloading...");
        else if(dText==="Downloading...") return;
        const interval = setInterval(() => {
            setProgress(p=>p+1);
        },num);
        
        setTimeout(() => {
            clearInterval(interval);
            setDText("Downloaded");

        },num2);
    }

    return(
    <div className='box'>
        <h3>Click the button below to start downloading</h3>
        <div className='ebar'>
            <div className='ibar' style={{width:`${progress}%`}}></div>
        </div>
        <div className='butSec'>
            <div className='down-percent'>{progress+"%"}</div>
            <button className='download-btn' style={{
                pointerEvents: isComplete?'none':'auto',
                opacity: isComplete?0.5:1
            }} onClick={IncProgress}>{dText}</button>
        </div>
    </div>
    );
}