import { useEffect, useRef, useState } from "react";
import jungleImg from "../assets/jungle.jpg"

export default function Window() {
    const [winVisible,setWinVisible] = useState(false);
    const [boxVisible, setBoxVisible] = useState(false);
    const winRef = useRef(null);

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
    }, [winVisible, boxVisible]); 
    //re-renders every time winVisible is updated: bcs bV is part of dependancy array

    function boxDisplay() {
        setWinVisible(!winVisible);
    }

    function Setter() {
        setBoxVisible(!boxVisible);
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
                <div className="box"></div>
            </div>
            <div className="bottom">
                <i className="ri-microsoft-fill" onClick={boxDisplay}></i>
                <i className="ri-spotify-fill"></i>
                <i class="ri-discord-fill"></i>
            </div>
        </div>
    );
}