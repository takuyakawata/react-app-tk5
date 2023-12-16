// components/ActionButton.jsx

export const ActionButton = ({text, action}) => {
  return (
    <>
      {/* onClick` でクリック時に指定した関数を実行できる actionは親コンポーネントで指定した関数をしてできます！ */}
     <button type="button" onClick={action}>{text}</button>
    </>
  );
};