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
