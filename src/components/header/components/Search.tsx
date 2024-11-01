import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import './styles.css';

const Search: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="search-container">
      {isOpen && (
        <input
          placeholder="Start typing to search..."
          className="search-input"
          type="text"
        />
      )}
      <button
        title="search"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="search-button"
      >
        <FaSearch className="search-icon" />
      </button>
    </div>
  );
};

export default Search;
