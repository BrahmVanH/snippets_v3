import logo from './logo.svg';
import MyCalendar from './Calendar';
import './App.css';
import AdminCalendar from './AdminCalendar';

function App() {
		let unavailableDates = [new Date('2023-10-21'), new Date('2023-10-22'), new Date('2023-10-23'), new Date('2023-10-24'), new Date('2023-10-25')];
    const addUnavailableDates = (selectedDates) => {
      if (selectedDates != null) {
        unavailableDates.push(selectedDates);
      }
    }

    const removeUnavailableDate = (selectedDate) => {
      if (selectedDate != null ) {
        const updatedUnavailableDates = unavailableDates.filter((date) => date !== selectedDate);
        console.log(updatedUnavailableDates);
        unavailableDates = updatedUnavailableDates;
      }
    }
  return (
    <div className="App d-flex">
      <MyCalendar unavailableDates={unavailableDates} />
      <AdminCalendar unavailableDates={unavailableDates} addUnavailableDates={addUnavailableDates} removeUnavailableDate={removeUnavailableDate}/>
    </div>
  );
}

export default App;
