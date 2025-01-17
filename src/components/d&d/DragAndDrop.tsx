import { ContainerCards } from "./ContainerCards";
import { Status } from "../interfaces";
import { data } from "../../assets";
import { useDragAndDrop } from "../hooks/useDragAndDrop";

const typesHero: Status[] = [
  "estado",
  "props",
  "eventos",
  "key",
  "refs",
  "fragmentos",
];

export const DragAndDrop = () => {
  const { isDragging, listItems, handleDragging, handleUpdateList } =
    useDragAndDrop(data);

  return (
    <div className="grid">
      {typesHero.map((container) => (
        <ContainerCards
          items={listItems}
          status={container}
          key={container}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      ))}
    </div>
  );
};
