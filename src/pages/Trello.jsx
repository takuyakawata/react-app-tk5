//pages/Trello.jsx
import { TrelloMain } from '../components/TrelloMain';

export const Trello = () => {

    return (
      <>
        <div style={{ padding: "50px" }}>
          <h1 style={{ marginBottom: "20px" }}>Trelloメモアプリ</h1>
          <TrelloMain />
        </div>
    </>
  );
}