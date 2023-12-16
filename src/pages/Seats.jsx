
//src/pages/Seat.jsx
import { useState } from 'react';

export const Seats = () => {
  const [numberOfSeatsVertical, setNumberOfSeatsVertical] = useState(0); // 縦列の席数
  const [numberOfSeatsHorizontal, setNumberOfSeatsHorizontal] = useState(0); // 横列の席数
  const [seats, setSeats] = useState([]);

  // 縦列の席数を変更する関数
  const handleNumberOfSeatsVerticalChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumberOfSeatsVertical(value);
    generateSeats(value, numberOfSeatsHorizontal);
  };

  // 横列の席数を変更する関数
  const handleNumberOfSeatsHorizontalChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumberOfSeatsHorizontal(value);
    generateSeats(numberOfSeatsVertical, value);
  };

  // 席を生成する関数
const generateSeats = (vertical, horizontal, shuffledNumbers) => {
  const newSeats = [];
  let seatNumber = 1;

  for (let i = 0; i < vertical; i++) {
    const row = [];
    for (let j = 0; j < horizontal; j++) {
      const seatIndex = shuffledNumbers[seatNumber - 1]; // シャッフルされた番号を取得
      row.push(
        <div key={seatNumber} className="seat">
          {seatIndex}
        </div>
      );
      seatNumber++;
    }
    newSeats.push(
      <div key={i} className="row">
        {row}
      </div>
    );
  }

  return newSeats;
};

// ...

// 席の番号をシャッフルする関数
const shuffleSeatNumbers = () => {
  const shuffledNumbers = [...Array(numberOfSeatsVertical * numberOfSeatsHorizontal).keys()]
    .map(num => num + 1)
    .sort(() => Math.random() - 0.5);

  const newSeats = generateSeats(numberOfSeatsVertical, numberOfSeatsHorizontal, shuffledNumbers);
  setSeats(newSeats);
  console.log(newSeats);
};




  return (
    <>
      <p>席替えの画面</p>
      <div>
        <label>
          縦列の席数：
          <input
            type="number"
            value={numberOfSeatsVertical}
            onChange={handleNumberOfSeatsVerticalChange}
          />
        </label>
        <label>
          横列の席数：
          <input
            type="number"
            value={numberOfSeatsHorizontal}
            onChange={handleNumberOfSeatsHorizontalChange}
          />
        </label>
      </div>

      <div className="seating-plan">
        {seats}
      </div>

      <button onClick={shuffleSeatNumbers}>席をシャッフル</button>
    </>
  );

  
};


// import  { useState } from 'react';
// import { ActionButton } from "../components/ActionButton";
// import { SeatShapeSelector } from "../components/SeatShapeSelector";

// export const Seats = () => {

//   // 座席の数の記録
//   // const [numberOfSeats, setNumberOfSeats] = useState(0);

//   // 縦列の席数
//   const [numberOfSeatsVertical, setNumberOfSeatsVertical] = useState(0);
//   // 横列の席数
//   const [numberOfSeatsHorizontal, setNumberOfSeatsHorizontal] = useState(0);
//   // 座席の形の記録
//   const [seatShape, setSeatShape] = useState('rectangle');
//   // 座席の位置　ランダムの記録
//   const [shuffledSeats, setShuffledSeats] = useState([]);

//   // seatの数を決める関数
//   // const handleNumberOfSeatsChange = (e) => {
//   //   setNumberOfSeats(parseInt(e.target.value, 10) || 0);
//   // };

//   const handleNumberOfSeatsVerticalChange = (e) => {
//     setNumberOfSeatsVertical(parseInt(e.target.value, 10) || 0);
//   };

//   const handleNumberOfSeatsHorizontalChange = (e) => {
//     setNumberOfSeatsHorizontal(parseInt(e.target.value, 10) || 0);
//   };

//   // 3 座席の形を決める関数 SeatShapeSelector
//    const handleSeatShapeChange = (shape) => {
//     setSeatShape(shape); // シートの形を更新
//   };

//   // 2 座席の並びを決める関数が動く
//   const shuffleSeats = () => {
//     // 2-1 席の数が0以下の場合は処理を実行しない
//     // if (numberOfSeats <= 0) {
//     //   console.log("席の数が0以下です。");
//     //   return;
//     // }
//     if (numberOfSeatsVertical <= 0 || numberOfSeatsHorizontal <= 0) {
//       console.log("席の数が0以下です。");
//       return;
//     }

//     // // 2-2 1からnumberOfSeatsまでの配列を生成
//     // let seats = Array.from({ length: numberOfSeats }, (_, i) => i + 1);

//     // // 2-3 席の配列を5倍の回数にランダムにシャッフル
//     // const shuffleCount = 5 * seats.length;
//     // for (let k = 0; k < shuffleCount; k++) {
//     //   const i = Math.floor(Math.random() * seats.length);
//     //   const j = Math.floor(Math.random() * seats.length);
//     //   [seats[i], seats[j]] = [seats[j], seats[i]];
//     // }

//     // // 配列をコンソール出力
//     // console.log('生成された席の配列: ', seats);

//     // // 席の配列を状態にセット
//     // setShuffledSeats(seats);

//     // 2-2 1からtotalSeatsまでの配列を生成
//     const totalSeats = numberOfSeatsVertical * numberOfSeatsHorizontal;
//     let seats = Array.from({ length: totalSeats }, (_, i) => i + 1);

//     // 2-3 席の配列を5倍の回数にランダムにシャッフル
//     const shuffleCount = 5 * seats.length;
//     for (let k = 0; k < shuffleCount; k++) {
//       const i = Math.floor(Math.random() * seats.length);
//       const j = Math.floor(Math.random() * seats.length);
//       [seats[i], seats[j]] = [seats[j], seats[i]];
//     };

//     console.log('生成された席の配列: ', seats);

//     setShuffledSeats(seats);
//   };

//   // 3 座席の番号を入れていく
//   const renderRectangleSeats = () => {
//     const seats = [];

//     // 縦列
//     for (let i = 0; i < numberOfSeatsVertical; i++) {
//       const row = [];

//       // 横列
//       for (let j = 0; j < numberOfSeatsHorizontal; j++) {
//         // 座席番号の計算
//         const seatNumber = i * numberOfSeatsHorizontal + j + 1;

//         // 各座席を表示する div 要素を生成して row 配列に追加
//         row.push(
//           <div key={seatNumber} className="rectangle-seat">
//             {seatNumber}
//           </div>
//         );
//       };
//        console.log(row);

//       // 1つの縦列の座席を含む row 要素を seats 配列に追加
//       seats.push(<div key={i} className="row">{row}</div>);
//        console.log(seats);
//     };

//     return seats; // 生成した座席の構造を返す
   
//   };


//   return (
//     // <>
//     //   <p>席替えの画面</p>
//     //   <div>
//     //     {/*1 座席の数（人数）を選択 */}
//     //     <label>
//     //       縦列の席数：
//     //       <input type="number" id="uniqueId" value={numberOfSeats} onChange={handleNumberOfSeatsChange} />
//     //     </label>
//     //     <label>
//     //       横列の数席：
//     //       <input type="number" id="uniqueId" value={numberOfSeats} onChange={handleNumberOfSeatsChange} />
//     //     </label>
//     //   </div>

//     //   {/*2 座席の形を選択 */}
//     //   <SeatShapeSelector onChange={handleSeatShapeChange} />

//     //   {/* 2-1 長方形を選んだら出る画面 */}


//     //   {/* 3 クリックしたら{shuffleSeats}の発動 */}
//     //   <ActionButton text="席替え" action={shuffleSeats} />

//     //   <div>
//     //     {/* 4結果の表示 選択した縦列と横列の数に合わせて配置する*/}
//     //     <h3>席替え結果:</h3>
//     //     <ul>
//     //       {shuffledSeats.map((seat, index) => (
//     //         <p key={index}>{seat}</p>
//     //       ))}
//     //     </ul>
//     //   </div>
//     // </>

//      <>
//       <p>席替えの画面</p>
//       <div>
//         <label>
//           縦列の席数：
//           <input type="number" value={numberOfSeatsVertical} onChange={handleNumberOfSeatsVerticalChange} />
//         </label>
//         <label>
//           横列の席数：
//           <input type="number" value={numberOfSeatsHorizontal} onChange={handleNumberOfSeatsHorizontalChange} />
//         </label>
//       </div>

//       <SeatShapeSelector onChange={handleSeatShapeChange} />

//       <ActionButton text="席替え" action={shuffleSeats} />

//       <div>
//         <h3>席替え結果:</h3>
//         <div className="rectangle-seats">
//           {seatShape === 'rectangle' && renderRectangleSeats()}
//         </div>
//       </div>
//     </>
//   );
// };