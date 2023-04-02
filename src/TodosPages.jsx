import EnergyCost from "./BackLogs";

export default function TodosPages({ todos }) {
  return (
    <div>
      {todos.map((todo, index) => <TodoPage todo={todo} key={index} />)}
    </div>
  );
}

function TodoPage({ todo }) {
    let Thunder__icons = [];
  for (let member of todo.energyCosts) {
    Thunder__icons.push(<EnergyCost isOn={member} />);
  }

  return (
    <div id={todo.id}>
      <button>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM11.79 13C12.08 13.29 12.08 13.77 11.79 14.06C11.64 14.21 11.45 14.28 11.26 14.28C11.07 14.28 10.88 14.21 10.73 14.06L7.2 10.53C6.91 10.24 6.91 9.76 7.2 9.47L10.73 5.94C11.02 5.65 11.5 5.65 11.79 5.94C12.08 6.23 12.08 6.71 11.79 7L8.79 10L11.79 13Z"
            fill="#78ACD5"
          />
        </svg>
      </button>
      <h2>todo.name</h2>
      {todo.description && <p>{todo.description}</p>}
      {/* <span>{Thunder__icons.map((icon, index) => <span key={index}>{icon}</span>)}</span> */}
      <span>
        {Thunder__icons.map((icon) => (
          <span>{icon}</span>
        ))}
      </span>
    </div>
  );
}
