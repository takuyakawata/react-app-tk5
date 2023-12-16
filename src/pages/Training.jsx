import React, { useContext, useEffect, useState } from 'react'
import tkInfoContext from '../main';

export const Training = () => {
    const [count, setCount] = useState(0);

    const tkInfo = useContext(tkInfoContext);

    const handleClick = () => {
        setCount(count + 1);
        console.log(count);
    };

    useEffect(() => {
        console.log("takuya");
        
    },[count]);


    return (
        <>
            <h1>練習</h1>
            <div>
                <h3>useState</h3>
                <button onClick={handleClick}>+</button>
                <p>{count}</p>

                <hr ></hr>

                <h3>useContext</h3>
                <p>データを直接渡すことができる、バケツリレーにしなくても良い</p>
                <p>{tkInfo.name }</p>
                <p>{tkInfo.age }</p>





            </div>
            
      </>
  )
}
