import "./App.css";

function App() {
  return (
    <div className="calendary">
      <div className="main_section">
        <div className="calendars">
          <div className="current_month">
            <div className="month_header"></div>
            <div className="days_header"></div>
            <div className="date_grid"></div>
          </div>
          <div className="previous_month">
            <div className="month_header"></div>
            <div className="days_header"></div>
            <div className="date_grid"></div>
          </div>
        </div>
        <div className="events_section"></div>
      </div>
    </div>
  );
}

export default App;
