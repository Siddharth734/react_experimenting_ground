import { useRef, useState } from 'react';

export default function Stopwatch() {
    const [seconds, setSeconds] = useState(0);
    const [borderC, setBorderC] = useState('stopwatch');
    let timerID = useRef(null);

    function StartTimer() {
        if(timerID.current) return;
        setBorderC('stopwatch running');
        timerID.current = setInterval(() => {
            setSeconds((sec)=>sec+1);
        }
        , 1000);
    }

    function StopTimer() {
        setBorderC('stopwatch stopped');
        clearInterval(timerID.current);
        timerID.current=null;
    }
    
    function ResetTimer(){
        clearInterval(timerID.current);
        timerID.current=null;
        setSeconds(0);
        setBorderC('stopwatch');
    }

    return(
        <div className={borderC}>
            <h1 >{seconds}</h1>
            <div>
                <button className='start' onClick={StartTimer}>Start</button>
                <button className='stop' onClick={StopTimer}>Stop</button>
            </div>
            <button className='reset' onClick={ResetTimer}>Reset</button>
        </div>
    )
}