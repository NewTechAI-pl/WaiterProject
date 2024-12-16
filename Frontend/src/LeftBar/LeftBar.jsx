// src/components/LeftBar.jsx
import { useState } from 'react';
import './LeftBar.css';

const navItems = [
  { id: 'menu', label: 'Menu' },
  { id: 'order', label: 'Zamów' },
  { id: 'call-waiter', label: 'Wezwanie kelnera' },
  { id: 'pay', label: 'Zapłać' },
  { id: 'reservation', label: 'Rezerwacja' },
];

const LeftBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (direction) => {
    setActiveIndex((prev) => {
      if (direction === 'up' && prev > 0) return prev - 1;
      if (direction === 'down' && prev < navItems.length - 1) return prev + 1;
      return prev;
    });
  };

  return (
    <nav className="left-bar" aria-label="Pasek nawigacyjny">
      <button
        className="scroll-btn"
        onClick={() => handleScroll('up')}
        aria-label="Przewiń w górę"
        disabled={activeIndex === 0}
      >
        ↑
      </button>

      <ul className="circles-container">
        {navItems.map((item, index) => (
          <li
            key={item.id}
            className={`circle ${index === activeIndex ? 'active' : ''}`}
            aria-current={index === activeIndex ? 'true' : 'false'}
          >
            {index === activeIndex && <span className="circle-label">{item.label}</span>}
          </li>
        ))}
      </ul>

      <button
        className="scroll-btn"
        onClick={() => handleScroll('down')}
        aria-label="Przewiń w dół"
        disabled={activeIndex === navItems.length - 1}
      >
        ↓
      </button>
    </nav>
  );
};

export default LeftBar;