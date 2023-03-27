import { useState } from "react";
import "./App.scss";
import BackLogs from "./BackLogs";
import CompletedTasks from "./CompletedTasks";
import TaskAdder from "./TaskAdder";

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

  function handleNewValue(target) {
    if (false) {
      let newEnergyValue = [];
      for(var i = 1; i <= 3; i++){
        if(i <= ******){
          newEnergyValue.push(true)
        }else{
          newEnergyValue.push(false)
        }
      }

      setNewValues({
        ...newValues,
        energyCosts: newEnergyValue
      });
    } else {
      setNewValues({
        ...newValues,
        [target.name]: target.value,
      });
    }
  }

  return (
    <div className={`todoContainer d-flex flex-column justify-content-between`}>
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
    <header className="d-flex flex-column align-items-center font-roboto">
      <h1 className="text-center text-mainBlue mb-3 text-capitalize">Note</h1>
      <div className="date__container d-flex justify-content-around align-items-center">
        <h4
          className="date__container--heading text-uppercase font-roboto text-mainBlack bg-mainBlue rounded-pill m-0 date__header"
        >
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

function CleanUpTasks() {
  return <button>clean up the room</button>;
}

function AddNewTask() {
  return (
    <div className="add__button__container">
      <button className={`add__button border-0 colorFul__btn`}>New</button>
    </div>
  );
}



