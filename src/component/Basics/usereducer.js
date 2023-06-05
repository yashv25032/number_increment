import React, { useState , useReducer } from "react";
import "./style.css";

const reducer = (state,action) => {
    if (action.type === 'INCR'){
        state += 1;
    }
    if (state > 0 && action.type === 'DECR'){
        state -= 1;
    }
    return state;
}

const UseReducer = () => {


    const initialData = 0;
    // const [mynum ,setMyNum] = useState(initialData);

    const [state , dispatch] = useReducer(reducer,initialData)

    return (
      
        <>

            <div className="center_div">
                <p>{state}</p>
                <div className="button2" onClick={() => dispatch({type:"INCR"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>

                <div className="button2" onClick={() => dispatch({type:"DECR"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>

        </>
    );
};

export default UseReducer;