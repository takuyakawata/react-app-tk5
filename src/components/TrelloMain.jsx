//src/components/TrelloMain.jsx
import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DummyData }from "../DummyData";
import { Card } from "./card/Card";

export const TrelloMain = () => {

  // ダミーデータの保管dataに入る
  const [data, setData] = useState(DummyData);

  const onDragEnd = (result) => {
    // console.log(result);
    // if (!result.destination) return;
    const { source, destination } = result;

  // //動かし始めたcolumnが違うcolumnに移動したら
  if (source.droppableId !== destination.droppableId) {

    //動かし始めたcolumnの配列の番号を取得()
    const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
    console.log(sourceColIndex);
    const sourceCol = data[sourceColIndex];
    console.log(sourceCol);

    // 動かし終わったcolumnの配列の番号を取得()
    const destinationColIndex = data.findIndex(
      (e) => e.id === destination.droppableId
    );
    console.log(destinationColIndex);
    const destinationCol = data[destinationColIndex];
    console.log(destinationCol);

    //動かし始めたカラム タスクの削除
    //sourceTaskに配列をコピーしておく(破壊操作を後でするため)
    //後でsplice関数でその動かし始めたタスクを削除するため
    const sourceTask = [...sourceCol.tasks];
    console.log(sourceTask);
    // タスクの削除
    const [removed] = sourceTask.splice(source.index, 1);
    // sourceTask.splice(destination.index,0,removed)

    //移動した先にカラムを追加
    //動かし終わったタスクに属していたカラムの中のタスクを全て取得
    //後でsplice関数でその動かし始めたタスクを追加するため
    const destinationTask = [...destinationCol.tasks];
    console.log(destinationTask);
    destinationTask.splice(destination.index, 0, removed);


    // dataの確定
    data[sourceColIndex].tasks = sourceTask;
    data[destinationColIndex].tasks = destinationTask;

    setData(data);
      
  } else {
    //同じカラム内でタスクの入れ替え
    const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
    const sourceCol = data[sourceColIndex];
    console.log(sourceCol);
    const sourceTask = [...sourceCol.tasks];
    console.log(sourceTask);
    const [removed] = sourceTask.splice(source.index, 1);
    sourceTask.splice(destination.index, 0, removed);

    data[sourceColIndex].tasks = sourceTask;

    setData(data);
  }
  };

    return (
      <>
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="trello">
        {data.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                className="trello-section"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="trello-section-title">{section.title}</div>
                <div className="trello-section-content">
                  {section.tasks.map((task, index) => (

                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "0.5" : "1",
                          }}
                        >
                          <Card>{task.title}</Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
      </DragDropContext>
    </>
  );
};