import React, { useEffect, useState } from 'react'

export const SomeChild = ({ showCount }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("counterを更新しました。");
    setCounter(showCount);
  }, [showCount]);
  return <div>SomeChild</div>;
};

export default SomeChild;