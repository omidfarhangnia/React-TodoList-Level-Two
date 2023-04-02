import { updateDoc, doc } from "firebase/firestore";
import { db } from  "./firebase";
import { EnergyCost } from "./TodosPages";
import { GrCheckmark } from "react-icons/gr";


export const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed
    })
}
export default function BackLogs({ todos }) {
  return (
    <>
      {todos.map((todo, index) => {
        if(todo.completed === true){
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
              <GrCheckmark />
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
