import { useRef } from 'react';

export default function LikeCard(){
    const heartRef = useRef(null);

    function HeartMaker() {
        if(!heartRef.current) return;
        heartRef.current.style.opacity = 1;
        heartRef.current.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)';
        setTimeout(() => {
            heartRef.current.style.transform = 'translate(-50%,-300%)';
        },600);
        setTimeout(() => {
            heartRef.current.style.opacity = 0;
        },800);
        setTimeout(() => {
            heartRef.current.style.transform = 'translate(-50%,-50%) scale(0) rotate(60deg)';
        },1000);
    }

    return(
        <div className='card'>
            <div className='innercard'
            onDoubleClick={HeartMaker}>
                <img src="https://images.unsplash.com/photo-1767982573352-5fae82982f2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <i ref={heartRef} class="ri-heart-3-fill"></i>
            </div>
            <div className='txt'>
                <h1>Random Dog</h1>
                <h5>- Why should humans have all the fun!</h5>
            </div>
        </div>
    );
}