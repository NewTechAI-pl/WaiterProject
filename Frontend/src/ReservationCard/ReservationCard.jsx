import { useState } from "react";
import "./ReservationCard.css"; // Import pliku CSS

const ReservationCard = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const times = ["12:15", "12:30", "12:45", "13:00", "13:15", "13:30"];

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleReserve = () => {
    if (selectedTime) {
      alert(`Zarezerwowano stolik na godzinę ${selectedTime}`);
    } else {
      alert("Wybierz godzinę przed rezerwacją!");
    }
  };

  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/150"
        alt="Logo rezerwacji"
        className="logo"
      />
      <h2 className="title">Nazwa restauracji</h2>
      <p className="subtitle">Rezerwacja stolika</p>
      <p className="description">najbliższe godziny dziś:</p>

      <div className="times-container">
        {times.map((time, index) => (
          <button
            key={index}
            onClick={() => handleTimeClick(time)}
            className={`time-button ${
              selectedTime === time ? "time-button-selected" : ""
            }`}
          >
            {time}
          </button>
        ))}
      </div>

      <button className="reserve-button" onClick={handleReserve}>
        ZAREZERWUJ
      </button>
    </div>
  );
};

export default ReservationCard;