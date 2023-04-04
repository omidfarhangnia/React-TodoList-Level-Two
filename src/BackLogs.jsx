import { updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { EnergyCost } from "./TodosPages";
import { GrCheckmark } from "react-icons/gr";
import { bringThePage } from "./gsapAnime";

export const toggleComplete = async (todo) => {
  await updateDoc(doc(db, "todos", todo.id), {
    completed: !todo.completed,
  });
};
export default function BackLogs({ todos }) {
  return (
    <div className="tasks__container">
      <h3 className="partHeaders font-roboto">backlogs</h3>
      {todos.map((todo, index) => {
        if (todo.completed === true) {
          return "";
        }

        let Thunder__icons = [];

        for (let member of todo.energyCosts) {
          Thunder__icons.push(<EnergyCost isOn={member} />);
        }

        return (
          <div key={index} className="tasks">
            <span
              style={{ background: todo.priority }}
              className="tasks--priority"
            ></span>
            <button onClick={() => bringThePage(`#${todo.id}`)}>
              <span className="tasks--name">{todo.name}</span>
            </button>
            <button
              onClick={() => toggleComplete(todo)}
              className="tasks--completeToggle"
            >
              <GrCheckmark size={20} />
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
