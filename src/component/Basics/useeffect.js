import React, { useState , useEffect } from "react";
import "./style.css";


const UseEffect = () => {

    const initialData = 0;
    const [mynum ,setMyNum] = useState(initialData);

    useEffect(()=>{
        document.title = `chat ${mynum}`
    });

    return (
      
        <>
            <div className="center_div">
                <p>{mynum}</p>
                <div className="button2" onClick={() => setMyNum(mynum +1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
{/* 
                <div className="button2" onClick={() => (mynum >0 ? setMyNum(mynum -1) : setMyNum(0))}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div> */}
            </div>
        </>
    );
};

export default UseEffect;