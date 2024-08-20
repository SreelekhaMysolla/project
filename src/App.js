// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './App.scss';
import 'react-calendar/dist/Calendar.css';
function App() {
    const [date, setDate] = useState(new Date());
const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected date: ${date}`);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Schedule</h1>
      </header>
      <main>
 <form onSubmit={handleSubmit} id="calendar-form">
          <div className="calender" id="calendar-container">
            <Calendar onChange={setDate} value={date} />
          </div>
      <br></br>
      <footer className="App-header">
        <button type="submit" id="continue-btn">Continue</button>
        </footer>
      </form>
      </main>
  </div>
  );
}

export default App;
