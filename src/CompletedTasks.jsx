import { EnergyCost } from "./TodosPages";
import { GrClose } from "react-icons/gr";
import { toggleComplete } from "./BackLogs";
import { bringThePage } from "./gsapAnime";

export default function CompletedTasks({ todos }) {
  return (
    <div className="tasks__container">
      <h3 className="partHeaders font-roboto">completed tasks</h3>
      {todos.map((todo, index) => {
        if (todo.completed === false) {
          return "";
        }

        let Thunder__icons = [];

        for (let member of todo.energyCosts) {
          Thunder__icons.push(<EnergyCost isOn={member} />);
        }

        return (
          <div key={index} className="tasks">
            <span style={{ background: todo.priority }} className="tasks--priority"></span>
            <button onClick={() => bringThePage(`#${todo.id}`)}>
              <span className="tasks--name">{todo.name}</span>
            </button>
            <button onClick={() => toggleComplete(todo)} className="tasks--completeToggle">
              <GrClose size={20}/>
            </button>
            <span className="tasks--thunders">
              {Thunder__icons.map((icon, index) => (
                <span key={index}>{icon}</span>
              ))}
            </span>
          </div>
        );
      })}
    </div>
  );
}
