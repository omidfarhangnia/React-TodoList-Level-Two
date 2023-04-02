import { useState } from "react";

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
        {/* <ReverseAnime className={"back__button"} animeId={"taskAdderContainer"}> */}
        {/* </ReverseAnime> */}
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

function ThunderIcon({ activeId, thunderId, onChangeActiveId, energyCost }) {
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
