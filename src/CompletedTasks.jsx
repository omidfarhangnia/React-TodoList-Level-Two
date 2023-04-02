import { EnergyCost } from "./TodosPages";
import { GrClose } from "react-icons/gr";
import { toggleComplete } from "./BackLogs"

export default function CompletedTasks({ todos }) {
  return (
    <>
      {todos.map((todo, index) => {
        if (todo.completed === false) {
          return "";
        }

        let Thunder__icons = [];

        for (let member of todo.energyCosts) {
          Thunder__icons.push(<EnergyCost isOn={member} />);
        }

        return (
          <div key={index}>
            <span style={{ background: todo.priority }}>...</span>
            <span>{todo.name}</span>
            <button onClick={() => toggleComplete(todo)}>
              <GrClose />
            </button>
            <span>
              {Thunder__icons.map((icon, index) => (
                <span key={index}>{icon}</span>
              ))}
            </span>
          </div>
        );
      })}
    </>
  );
}
