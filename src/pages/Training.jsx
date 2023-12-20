import React, { useContext, useEffect, useRef, useState, useMemo, useCallback} from 'react'
import tkInfoContext from '../main';
import SomeChild from '../SomeChild';

export const Training = () => {
    const [count, setCount] = useState(0);

    const tkInfo = useContext(tkInfoContext);

    const ref = useRef();
    

    const handleClick = () => {
        setCount(count + 1);
        console.log(count);
    };

    useEffect(() => {
        console.log("takuya");
        
    }, [count]);
    
    const handleRef = () => {
        console.log(ref.current.value);
    };

    //useMemo
    //useMemo(2回目以降の同じ入力の関数呼び出しに対するコストが削減)
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

//   const square = () => {
//     console.log("実行されました");
//     let i = 0;
//     while (i < 1000000000) i++;
//     return count02 * count02;
//   };

  // 変数のメモ化;
  const square = useMemo(() => {
    //ここのコールバックはcount02が更新される意外のときでは、実行されず、前の保存（メモ化）された結果を呼び出す。
    
    let i = 0;
    //重い処理 //2000000000
    while (i < 2) {
      i++;
    }
    console.log("実行されました");
    return count02 * count02;
  }, [count02]);
    //count02が更新されない限り、square関数は実行されずに前の計算結果のキャッシュされた結果を使う。

  //useCallback
  //関数のメモ化
  const [counter, setCounter] = useState(0);

//   const showCount = () => {
//     alert(`これは重い処理です。`);
//   };

  const showCount = useCallback(() => {
    alert(`Count ${counter}`);
  }, [counter]);

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

                <h3>useRef</h3>
                <input type='text' ref={ref} />
                <button onClick={handleRef}>useRef</button>

                <hr />
                <h1>useMemo</h1>
                <div>カウント１: {count01}</div>
                <div>カウント２: {count02}</div>
                {/* <div>square: {square()}</div> */}
                <div>結果: {square}</div>
                <button onClick={() => setCount01(count01 + 1)}>＋</button>
                <button onClick={() => setCount02(count02 + 1)}>＋</button>
 <hr />
      <h1>UseCallBack</h1>
      <SomeChild showCount={showCount} />
     <button onClick={() => setCounter(counter + 1)}>＋</button>





            </div>
            
      </>
  )
}
