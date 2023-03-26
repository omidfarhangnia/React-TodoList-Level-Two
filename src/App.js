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
  addBtn: "position-absolute border-0 colorFul__btn",
};

let currentDate;
if (typeof window !== "undefined") {
  const date = new Date();
  currentDate = `${date.getFullYear()}/${date.getMonth() + 1}/${
    date.getDate() + 1
  }`;
}

let currentId = 1;
const initialValue = [
  {
    id: 0,
    name: "",
    description: "",
    priority: "#ffffff",
    energyCosts: [false, false, false],
  },
];

export default function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("#000000");
  const [energyCosts, setEnergyCosts] = useState({
    "0": false,
    "1": false,
    "2": false,
  });

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleChangePriority(e) {
    setPriority(e.target.value);
  }

  function handleChangeEnergyCost(e) {
    let currentName = e.target.name;
    setEnergyCosts(

    );
    // setEnergyCosts(e.target.value);
  }

  return (
    <div className={`todoContainer ${style.container}`}>
      <HeaderSection />
      {/* it will give a button which show current task */}
      <CurrentTask />
      {/* it will give a list of all the uncompleted tasks */}
      <BackLogs />
      {/* it will give a list of all the completed tasks*/}
      <CompletedTasks />
      {/* it will give a button which can delete all tasks*/}
      <CleanUpTasks />
      {/* you can use this for adding task to project */}
      <AddButton />
      {/* this is the form which add the task */}
      <TaskAdder
        onChangeName={handleChangeName}
        onChangeDescription={handleChangeDescription}
        onChangePriority={handleChangePriority}
        onChangeEnergyCost={handleChangeEnergyCost}
        name={name}
        description={description}
        priority={priority}
        energyCosts={energyCosts}
      />
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

function AddButton() {
  return (
    <div className="add__button__container">
      <button className={`add__button ${style.addBtn}`}>New</button>
    </div>
  );
}

function TaskAdder({onChangeName, onChangeDescription, onChangePriority, onChangeEnergyCost, name, description, priority, energyCosts}) {
  return (
    <div>
      <form onSubmit={(e) => e.target.value}>
        <label>
          name
          <input type={"text"} value={name} onChange={onChangeName}/>
        </label>
        <label>
          Description
          <textarea value={description} onChange={onChangeDescription}/>
        </label>
        <label>
          Priority
          <input value={priority} type={"color"} onChange={onChangePriority}/>
        </label>
        <label>
          energy costs
          <input name="0" type={"checkbox"} value={energyCosts[0]} onChange={onChangeEnergyCost}/>
          <input name="1" type={"checkbox"} value={energyCosts[1]} onChange={onChangeEnergyCost} />
          <input name="2" type={"checkbox"} value={energyCosts[2]} onChange={onChangeEnergyCost} />
        </label>
      </form>
    </div>
  );
}
