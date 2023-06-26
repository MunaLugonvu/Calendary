import "./App.css";
import { useState } from "react";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

const MonthHeader = ({ month }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return <div className="month_header">{months[month]} </div>;
};

const DaysHeader = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="days_header">
      {days.map((day) => (
        <div key={day} className="day">
          {day}
        </div>
      ))}
    </div>
  );
};
// const DateGrid = ({ month }) => {
//   const daysInMonth = new Date(
//     new Date().getFullYear(),
//     month + 1,
//     0
//   ).getDate();
//   const startDate = new Date(new Date().getFullYear(), month, 1).getDay();

//   return (
//     <div className="date_grid">
//       {Array.from({ length: startDate }, (_, index) => (
//         <div key={`empty-${index}`} className="cell empty"></div>
//       ))}
//       {Array.from({ length: daysInMonth }, (_, index) => {
//         const dayIndex = (index + startDate) % 7;
//         return (
//           <div key={`date-${index}`} className={`cell day-${dayIndex}`}>
//             {index + 1}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

const DateGrid = ({ month }) => {
  const daysInMonth = new Date(new Date().getFullYear(), month + 1, 0).getDate();
  const startDate = new Date(new Date().getFullYear(), month, 1).getDay();
  

  // Example event data for demonstration
  const eventData = {
    "2023-06-07": ["event1", "event2"],
    "2023-06-15": ["event3"],
    "2023-07-20": ["event4", "event5", "event6"],
  };

  const getEventCount = (date) => {
    const dateString = new Date(new Date().getFullYear(), month, date).toISOString().split('T')[0];
    return eventData[dateString] ? eventData[dateString].length : 0;
  };

  return (
    <div className="date_grid">
      {Array.from({ length: startDate }, (_, index) => (
        <div key={`empty-${index}`} className="cell empty"></div>
      ))}
      {Array.from({ length: daysInMonth }, (_, index) => {
        const dayIndex = (index + startDate) % 7;
        const date = index + 1;
        const eventCount = getEventCount(date);

        return (
          <div key={`date-${index}`} className={`cell day-${dayIndex}`}>
            {date}
            {eventCount > 0 && (
              <div className="event_dots">
                {Array.from({ length: eventCount }, (_, index) => (
                  <div key={`dot-${index}`} className="event_dot"></div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

function App() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [nextMonth, setNextMonth] = useState((currentMonth + 1) % 12);

  const goToNextMonths = () => {
    setCurrentMonth((currentMonth + 2) % 12);
    setNextMonth((nextMonth + 2) % 12);
  };

  const goToPreviousMonths = () => {
    setCurrentMonth((currentMonth + 10) % 12);
    setNextMonth((nextMonth + 10) % 12);
  };
  return (
    <div className="calendary">
      <div className="main_section">
        <div className="calendars">
          <div className="current_month">
            <div className="headers">
              <div className="month-header">
                <div className="left_arrow">
                  {" "}
                  <IoChevronBackOutline
                    size={"1.5em"}
                    onClick={goToPreviousMonths}
                  />
                </div>
                <MonthHeader month={currentMonth} />
              </div>

              <DaysHeader />
            </div>

            <DateGrid month={currentMonth} />
          </div>
          <div className="next_month">
            <div className="headers">
            <div className="month-header">
                  {" "}
                  <MonthHeader month={nextMonth} />
                  <div className="right_arrow">
                    {" "}
                    <IoChevronForwardOutline size={"1.5em"} onClick={goToNextMonths} />
                  </div>
                </div>

              <DaysHeader />
            </div>
            <DateGrid month={nextMonth} />
          </div>
        </div>
      </div>
      <div className="events_section"></div>
    </div>
  );
}

export default App;
