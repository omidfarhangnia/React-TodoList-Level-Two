import { useState, useRef, useEffect, createContext } from "react";
// import gsap from "gsap";
import "./App.scss";
import BackLogs from "./BackLogs";
import TodosPages from "./TodosPages";
// import CompletedTasks from "./CompletedTasks";
import TaskAdder from "./TaskAdder";
import StartAnime from "./toggleAnime";
import { query, collection, onSnapshot, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

let currentDate;
if (typeof window !== "undefined") {
  const date = new Date();
  currentDate = `${date.getFullYear()}/${date.getMonth() + 1}/${
    date.getDate() + 1
  }`;
}

export const CtContainer = createContext(null);

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newValues, setNewValues] = useState({
    name: "",
    description: "",
    priority: "#ffffff",
    energyCosts: [false, false, false],
  });
  const container = useRef();

  // read from database
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // add todo
  const handleCreateTodo = async () => {
    if (newValues.name === "" || newValues.description === "") {
      alert("please fill inputs");
      return;
    } else {
      await addDoc(collection(db, "todos"), {
        name: newValues.name,
        description: newValues.description,
        priority: newValues.priority,
        energyCosts: newValues.energyCosts,
      });
    }

    setNewValues({
      name: "",
      description: "",
      priority: "#ffffff",
      energyCosts: [false, false, false],
    });
  };

  // delete all todos
  const clearAllTodos = async () => {
    for(var i = 0; i < todos.length; i++){
      await deleteDoc(doc(db, "todos", todos[i].id))
    }
  };

  function handleNewValue(target, energyCosts) {
    if (target) {
      setNewValues({
        ...newValues,
        [target.name]: target.value,
      });
    } else {
      setNewValues({
        ...newValues,
        energyCosts: energyCosts,
      });
    }
  }

  return (
    <CtContainer.Provider value={container}>
      <div
        className={`todoContainer d-flex flex-column justify-content-between`}
        ref={container}
      >
        {/* its the header of the page which give us the data */}
        <HeaderSection />
        {/* it will give a button which show current task */}
        <AddNewTask />
        {/* <hr /> */}
        {/* you can use this for adding task to project */}
        {/* <CurrentTask /> */}
        <hr />
        {/* it will give a list of all the uncompleted tasks */}
        <BackLogs todos={todos} />
        {/* <hr /> */}
        {/* it will give a list of all the completed tasks*/}
        {/* <CompletedTasks /> */}
        {/* it will give a button which can delete all tasks*/}
        <CleanUpTodos clearAllTodos={clearAllTodos} />
        <hr />
        {/* this is the form which add the task */}
        <TaskAdder
          newValue={newValues}
          onChangeValue={handleNewValue}
          createTodo={handleCreateTodo}
        />
        <hr />
        {/* this is the component which make all pages */}
        {/* <TodosPages todos={todos} /> */}
      </div>
    </CtContainer.Provider>
  );
}

function HeaderSection() {
  return (
    <header className="d-flex flex-column align-items-center font-roboto">
      <h1 className="text-center text-mainBlue mb-3 text-capitalize">Note</h1>
      <div className="date__container d-flex justify-content-around align-items-center">
        <h4 className="date__container--heading text-uppercase font-roboto text-mainBlack bg-mainBlue rounded-pill m-0 date__header">
          today
        </h4>
        <span className="date__container--date text-mainBlue font-roboto date__header">
          {currentDate}
        </span>
      </div>
    </header>
  );
}

function CurrentTask() {
  return <button className="colorFul__btn">current Task</button>;
}

function CleanUpTodos({ clearAllTodos }) {
  return <button onClick={clearAllTodos}>clean up the room</button>;
}

function AddNewTask() {
  return (
    <div className="add__button__container">
      <button>New</button>
      {/* <StartAnime className={`add__button border-0 colorFul__btn`} animeId={'taskAdderContainer'}> */}
      {/* </StartAnime> */}
    </div>
  );
}
