import { useEffect, useRef, useState } from "react";
import jungleImg from "../assets/jungle.jpg"

export default function Window() {
    const [winVisible,setWinVisible] = useState(false);
    const [boxVisible, setBoxVisible] = useState(false);
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const winRef = useRef(null);
    const boxRef = useRef(null);

    useEffect(() => {

        if(winVisible){
            winRef.current.style.height = "30rem";
            winRef.current.style.width = "30rem";
            winRef.current.style.scale = 1;
        }
        else{
            winRef.current.style.height = "0rem";
            winRef.current.style.width = "0rem";
            winRef.current.style.scale = 0.5;
    
        }

        if(boxVisible){
            boxRef.current.style.height = "20rem";
            boxRef.current.style.width = "10rem";
            boxRef.current.style.scale = 1;
        }
        else{
            boxRef.current.style.height = "0rem";
            boxRef.current.style.width = "0rem";
            boxRef.current.style.scale = 0.5;
    
        }
    }, [winVisible, boxVisible]); 
    //re-renders every time winVisible is updated: bcs bV is part of dependancy array

    function winDisplay() {
        setWinVisible(!winVisible);
    }

    function Setter(e) {
        setBoxVisible(!boxVisible);
        setX((e.clientX));
        setY((e.clientY));
    }
    
    return(
        <div className="view">
            <div className="top" onContextMenu={(e) => {
                e.preventDefault();
                setWinVisible(false);
                Setter(e);
            }}>
                <img src={jungleImg} alt="" />
                <div className="window1" ref={winRef}></div>
                <div className="box" ref={boxRef} style={{left:`${x}px`, top:`${y}px`}}>
                </div>
            </div>
            <div className="bottom">
                <i className="ri-microsoft-fill" onClick={winDisplay}></i>
                <i className="ri-spotify-fill"></i>
                <i className="ri-discord-fill"></i>
            </div>
        </div>
    );
}