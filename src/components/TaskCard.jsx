import { IconTrash } from "../assets/icons";
import { IconHouse } from "../assets/icons";
import { IconBill } from "../assets/icons";
import { IconShop } from "../assets/icons";
import { IconOther } from "../assets/icons";
import { IconGarden } from "../assets/icons";
import { IconCheck } from "../assets/icons";
import { IconUnCheck } from "../assets/icons";
import { tasks } from "../reducers/tasksSlice";
import "./taskCard.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const TaskCard = ({
  createdDate,
  name,
  comment,
  category,
  isDone,
  deadline,
}) => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.tasks.tasksList);
  const getCategory = () => {
    switch (category) {
      case "house":
        return <IconHouse />;
        break;
      case "shop":
        return <IconShop />;
        break;
      case "bill":
        return <IconBill />;
        break;
      case "garden":
        return <IconGarden />;
        break;
      case "other":
        return <IconOther />;
    }
  };

  return (
    <div className="todoCard">
      <div className="todoCardHeader">
        {getCategory(category)}
        <span className="todoCardName">{name}</span>
        <span className="todoCardIsDone">
          {isDone ? <IconUnCheck /> : <IconCheck />}
        </span>
      </div>
      <div className="todoCardComment">{comment}</div>
      <div className="todoCardInfo">
        <div>
          <span
            onClick={() => dispatch(tasks.actions.removeTask(createdDate))}
            className="todoCardRemove"
          >
            <IconTrash />
          </span>
        </div>
        <div className="todoCardDateInfo text-small">
          <span>Deadline:{deadline}</span>
          <span>Date:{createdDate}</span>
        </div>
      </div>
    </div>
  );
};
