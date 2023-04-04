import { useState } from "react";
import {BsArrowLeftSquareFill} from "react-icons/bs";
import { takeThePage } from "./gsapAnime";

export default function TaskAdder({ newValue, onChangeValue, createTodo }) {
  const [activeId, setActiveId] = useState(0);
  const [isEnergyOn, setIsEnergyOn] = useState(false);

  function handleChangeActiveId(thunderId, energyCost) {
    if (thunderId <= 1) {
      setIsEnergyOn(!isEnergyOn);
    }

    if (isEnergyOn) {
      setActiveId(0);
      onChangeValue(null, [false, false, false])
    } else {
      onChangeValue(null, energyCost)
      setActiveId(thunderId);
    }
  }

  return (
    <div className="taskAdderContainer d-flex flex-column justify-content-around align-items-center">
      <div>
        <button className="icons__style" onClick={() => takeThePage(".taskAdderContainer")}>
          <BsArrowLeftSquareFill size={24}/>
        </button>
        <h4 className="text-center text-mainBlue text-capitalize m-0">
          new note
        </h4>
      </div>
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
          <br />
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
        </label>
      </form>
      <button className="border-0 colorFul__btn" onClick={createTodo}>
        add
      </button>
    </div>
  );
}

export function ThunderIcon({ activeId, thunderId, onChangeActiveId, energyCost }) {
  if (thunderId <= activeId) {
    return (
      <span onClick={(e) => onChangeActiveId(thunderId, energyCost)}>
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
      </span>
    );
  } else {
    return (
      <span onClick={(e) => onChangeActiveId(thunderId, energyCost)}>
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
      </span>
    );
  }
}
