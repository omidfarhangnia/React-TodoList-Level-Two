import { useState } from "react";
import "./App.scss";
import BackLogs from "./BackLogs";
import CompletedTasks from "./CompletedTasks";

export const style = {
  container: "d-flex flex-column justify-content-between",
  // header style
  header: "d-flex flex-column align-items-center font-roboto",
  header_heading: "text-center text-mainBlue mb-3",
  // date container styled
  dateContainer: {
    SelfStyle: "d-flex justify-content-around align-items-center",
    heading:
      "text-uppercase font-roboto text-mainBlack bg-mainBlue rounded-pill m-0",
    date: "text-mainBlue font-roboto",
  },
  addBtn: "border-0 colorFul__btn",
};

let currentDate;
if (typeof window !== "undefined") {
  const date = new Date();
  currentDate = `${date.getFullYear()}/${date.getMonth() + 1}/${
    date.getDate() + 1
  }`;
}

let currentId = 3;
const initialValue = [
  {
    id: 0,
    name: "home works",
    description: "hello i am here to say something i want to do my home works",
    priority: "#ffffff",
    energyCosts: [true, true, true],
  },
  {
    id: 1,
    name: "making dinner",
    description: "oh my god i want to make dinner what do you prefer tonight",
    priority: "#555555",
    energyCosts: [true, false, false],
  },
  {
    id: 2,
    name: "going gym",
    description: "i go to sport gym but i want to try something new",
    priority: "#000000",
    energyCosts: [true, true, false],
  },
];

export default function App() {
  const [tasks, setTasks] =  useState(initialValue);
  const [newValues, setNewValues] = useState({
    name: "",
    description: "",
    priority: "#ffffff",
    energyCosts: [false, false, false]
  });

  console.log(newValues.energyCosts)


  function handleNewValue(target) {
    if (target.type === "checkbox") {
      let newCheckBoxValue = [];
      for(var i = 1; i <= 3; i++){
        if(i <= Number(target.id)){
          newCheckBoxValue.push(true)
        }else{
          newCheckBoxValue.push(false)
        }
      }

      console.log(target.id)
      console.log(newCheckBoxValue)

      setNewValues({
        ...newValues,
        [target.name]: newCheckBoxValue
      });
    } else {
      setNewValues({
        ...newValues,
        [target.name]: target.value,
      });
    }
  }

  return (
    <div className={`todoContainer ${style.container}`}>
      <HeaderSection />
      {/* it will give a button which show current task */}
      {/* <CurrentTask /> */}
      {/* it will give a list of all the uncompleted tasks */}
      {/* <BackLogs /> */}
      {/* it will give a list of all the completed tasks*/}
      {/* <CompletedTasks /> */}
      {/* it will give a button which can delete all tasks*/}
      {/* <CleanUpTasks /> */}
      {/* you can use this for adding task to project */}
      <AddNewTask />
      {/* this is the form which add the task */}
      <TaskAdder newValue={newValues} onChangeValue={handleNewValue} />
    </div>
  );
}

function HeaderSection() {
  return (
    <header className="header">
      <h1 className={style.header_heading}>Note</h1>
      <div className={`date__container ${style.dateContainer.SelfStyle}`}>
        <h4
          className={`date__container--heading ${style.dateContainer.heading}`}
        >
          today
        </h4>
        <span className={`date__container--date ${style.dateContainer.date}`}>
          {currentDate}
        </span>
      </div>
    </header>
  );
}

function CurrentTask() {
  return <button className="colorFul__btn">current Task</button>;
}

function CleanUpTasks() {
  return <button>clean up the room</button>;
}

function AddNewTask() {
  return (
    <div className="add__button__container">
      <button className={`add__button ${style.addBtn}`}>New</button>
    </div>
  );
}

function TaskAdder({ newValue, onChangeValue }) {
  return (
    <div className="taskAdderContainer d-flex flex-column justify-content-around align-items-center">
      <form onSubmit={(e) => e.target.value} className={"d-flex flex-column"}>
        <label>
          name
          <input
            type={"text"}
            value={newValue.name}
            name="name"
            onChange={(e) => onChangeValue(e.target)}
          />
        </label>
        <label>
          Description
          <br/>
          <textarea
            value={newValue.description}
            name="description"
            onChange={(e) => onChangeValue(e.target)}
          />
        </label>
        <label>
          Priority
          <input
            value={newValue.priority}
            name="priority"
            type={"color"}
            onChange={(e) => onChangeValue(e.target)}
          />
        </label>
        <label>
          energy costs.
          <input
            type={"checkbox"}
            name="energyCosts"
            id="1"
            value={newValue.energyCosts[0]}
            onChange={(e) => onChangeValue(e.target)}
          />
          <input
            type={"checkbox"}
            name="energyCosts"
            id="2"
            value={newValue.energyCosts[1]}
            onChange={(e) => onChangeValue(e.target)}
          />
          <input
            type={"checkbox"}
            name="energyCosts"
            id="3"
            value={newValue.energyCosts[2]}
            onChange={(e) => onChangeValue(e.target)}
          />
        </label>
      </form>
      <button className={style.addBtn}>add</button>
    </div>
  );
}
