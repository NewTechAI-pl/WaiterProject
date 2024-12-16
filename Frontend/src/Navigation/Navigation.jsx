import { useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const changeLanguage = (language) => {
    // Możesz tutaj dodać kod, który zmienia język (np. ustawienie w lokalnym stanie lub API)
    console.log(`Język wybrany: ${language}`); // Możesz zaktualizować preferencje językowe
    setIsLanguageMenuOpen(false); // Zamykamy menu po wyborze języka
  };

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        {/* Pozostałe elementy nawigacji */}
        <li className="navigation-item">
          <a href="#menu" className="navigation-link">
            Menu
          </a>
        </li>
        <li className="navigation-item">
          <a href="#order" className="navigation-link">
            Zamów
          </a>
        </li>
        <li className="navigation-item">
          <a href="#waiter" className="navigation-link">
            Wezwanie kelnera
          </a>
        </li>
        <li className="navigation-item">
          <a href="#pay" className="navigation-link">
            Zapłać
          </a>
        </li>
        <li className="navigation-item">
          <a href="#reservation" className="navigation-link">
            Rezerwacja
          </a>
        </li>

        {/* Przycisk do wyboru języka */}
        <li className="navigation-item">
          <button
            className="language-button"
            onClick={toggleLanguageMenu}
          >
            Wybór języka
          </button>
          {isLanguageMenuOpen && (
            <ul className="language-menu">
              <li>
                <button
                  className="language-option"
                  onClick={() => changeLanguage("Polski")}
                >
                  Polski
                </button>
              </li>
              <li>
                <button
                  className="language-option"
                  onClick={() => changeLanguage("Angielski")}
                >
                  Angielski
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;