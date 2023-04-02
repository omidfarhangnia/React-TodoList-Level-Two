import { EnergyCost } from "./TodosPages";

export default function BackLogs({ todos }) {
  return (
    <>
      {todos.map((todo, index) => {
        let Thunder__icons = [];

        for (let member of todo.energyCosts) {
          Thunder__icons.push(<EnergyCost isOn={member} />);
        }

        return (
          <div key={index}>
            <span style={{ background: todo.priority }}>...</span>
            <span>{todo.name}</span>
            <span>{Thunder__icons.map((icon, index) => <span key={index}>{icon}</span>)}</span>
          </div>
        );
      })}
    </>
  );
}