import { useState } from "react";
import { ThunderIcon } from "./TaskAdder";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { BsSave2 } from "react-icons/bs";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrCheckmark } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import { toggleComplete } from "./BackLogs";

export function EnergyCost({ isOn }) {
  if (isOn) {
    return (
      <svg
        width="20"
        height="15"
        viewBox="0 0 20 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.1862 6.5933H7.99745V1.4933C7.99745 0.303301 7.35286 0.0624681 6.56661 0.954968L5.99995 1.59955L1.20453 7.05372C0.54578 7.79747 0.82203 8.40663 1.8137 8.40663H4.00245V13.5066C4.00245 14.6966 4.64703 14.9375 5.43328 14.045L5.99995 13.4004L10.7954 7.94622C11.4541 7.20247 11.1779 6.5933 10.1862 6.5933Z"
          fill="#78ACD5"
        />
      </svg>
    );
  } else {
    return (
      <svg
        width="20"
        height="15"
        viewBox="0 0 20 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.1862 6.5933H7.99745V1.4933C7.99745 0.303301 7.35286 0.0624681 6.56661 0.954968L5.99995 1.59955L1.20453 7.05372C0.54578 7.79747 0.82203 8.40663 1.8137 8.40663H4.00245V13.5066C4.00245 14.6966 4.64703 14.9375 5.43328 14.045L5.99995 13.4004L10.7954 7.94622C11.4541 7.20247 11.1779 6.5933 10.1862 6.5933Z"
          fill="white"
        />
      </svg>
    );
  }
}

export default function TodosPages({ todos, handleNewValue }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoPage todo={todo} onChangeValue={handleNewValue} />
      ))}
    </div>
  );
}

function TodoPage({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [activeId, setActiveId] = useState(0);
  const [isEnergyOn, setIsEnergyOn] = useState(false);
  const [currentValue, setCurrentValue] = useState({
    name: todo.name,
    description: todo.description,
    priority: todo.priority,
    energyCosts: todo.energyCosts,
  });

  function handleNewValue(target, energyCosts) {
    if (target) {
      setCurrentValue({
        ...currentValue,
        [target.name]: target.value,
      });
    } else {
      setCurrentValue({
        ...currentValue,
        energyCosts: energyCosts,
      });
    }
  }

  function handleChangeActiveId(thunderId, energyCost) {
    if (thunderId <= 1) {
      setIsEnergyOn(!isEnergyOn);
    }

    if (isEnergyOn) {
      setActiveId(0);
      handleNewValue(null, [false, false, false]);
    } else {
      handleNewValue(null, energyCost);
      setActiveId(thunderId);
    }
  }

  const updateTodo = async (todo) => {
    // if there is any change
    if (
      currentValue.name === todo.name &&
      currentValue.description === todo.description &&
      currentValue.priority === todo.priority
    ) {
      return;
    }

    await updateDoc(doc(db, "todos", todo.id), {
      name: currentValue.name,
      description: currentValue.description,
      priority: currentValue.priority,
      energyCosts: currentValue.energyCosts,
    });
  };

  const deleteTodo = async (todo) => {
    await deleteDoc(doc(db, "todos", todo.id));
  };

  let Thunder__icons = [];
  for (let member of todo.energyCosts) {
    Thunder__icons.push(<EnergyCost isOn={member} />);
  }

  if (isEditing) {
    return (
      <div id={todo.id}>
        <button
          onClick={() => {
            setIsEditing(false);
            updateTodo(todo);
          }}
        >
          <BsSave2 />
        </button>
        <button
          onClick={() => {
            setIsEditing(false);
            setCurrentValue({
              name: todo.name,
              description: todo.description,
              priority: todo.priority,
              energyCosts: todo.energyCosts,
            });
          }}
        >
          <MdOutlineCancelPresentation />
        </button>
        <input
          type="text"
          name="name"
          value={currentValue.name}
          onChange={(e) => {
            handleNewValue(e.target);
          }}
        />
        <textarea
          name="description"
          value={currentValue.description}
          onChange={(e) => {
            handleNewValue(e.target);
          }}
        />
        <input
          type="color"
          name="priority"
          value={currentValue.priority}
          onChange={(e) => {
            handleNewValue(e.target);
          }}
        />
        <div>
          <ThunderIcon
            thunderId={1}
            activeId={activeId}
            onChangeActiveId={handleChangeActiveId}
            energyCost={[true, false, false]}
          />
          <ThunderIcon
            thunderId={2}
            activeId={activeId}
            onChangeActiveId={handleChangeActiveId}
            energyCost={[true, true, false]}
          />
          <ThunderIcon
            thunderId={3}
            activeId={activeId}
            onChangeActiveId={handleChangeActiveId}
            energyCost={[true, true, true]}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div id={todo.id}>
        <button>
          <IoChevronBackCircleSharp />
        </button>
        <button onClick={() => setIsEditing(true)}>
          <FiEdit />
        </button>
        <button onClick={() => deleteTodo(todo)}>
          <RiDeleteBin6Line />
        </button>
        <button onClick={() => toggleComplete(todo)}>{todo.completed ? <GrClose /> : <GrCheckmark />}</button>
        <h2>{todo.name}</h2>
        {todo.description && <p>{todo.description}</p>}
        <span>
          {Thunder__icons.map((icon, index) => (
            <span key={index}>{icon}</span>
          ))}
        </span>
      </div>
    );
  }
}
