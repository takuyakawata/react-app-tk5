import { v4 as uuidv4 } from "uuid";

export const DummyData =()=> [
  {
    id: uuidv4(),
    title: "📝今からやること",
    tasks: [
      {
        id: uuidv4(),
        title: "React",
      },
      {
        id: uuidv4(),
        title: "Youtube",
      },
      {
        id: uuidv4(),
        title: "ランニング",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "🚀今後やること",
    tasks: [
      {
        id: uuidv4(),
        title: "コード",
      },
      {
        id: uuidv4(),
        title: "転職活動",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "🌳終わったこと",
    tasks: [
      {
        id: uuidv4(),
        title: "昼食",
      },
    ],
  },
];