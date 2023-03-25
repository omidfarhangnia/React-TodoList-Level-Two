import "./App.scss";

export const style = {
  // header style
  header: "d-flex flex-column align-items-center font-roboto",
  header_heading: "text-center text-mainBlue mb-3",
  // date container style
  dateContainer: {
    SelfStyle: "d-flex justify-content-around align-items-center",
    heading: "text-uppercase font-roboto text-mainBlack bg-mainBlue rounded-pill m-0",
    date: "text-mainBlue font-roboto",
  },
}

let currentDate;
if(typeof window !== "undefined") {
  const date = new Date();
  currentDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate() + 1}`;
}

export default function App() {
  return (
    <div className="todoContainer">
      <HeaderSection />
    </div>
  );
}

function HeaderSection() {
  return(
    <header className="header">
      <h1 className={style.header_heading}>Note</h1>
      <div className={`date__container ${style.dateContainer.SelfStyle}`}>
        <h4 className={`date__container--heading ${style.dateContainer.heading}`}>today</h4>
        <span className={`date__container--date ${style.dateContainer.date}`}>{currentDate}</span>
      </div>
    </header>  
  );
}
