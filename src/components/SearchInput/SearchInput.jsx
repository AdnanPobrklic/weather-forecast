import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import classes from "./SearchInput.module.css";

export default function SearchInput() {
    const navigate = useNavigate();
    const location = useLocation();
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearch = () => {
        navigate(`/weather-forecast?city=${inputValue}`)
        if(location.pathname == "/weather-forecast") navigate(0);
    };

    const handleKeyPress = e => e.key === "Enter" ? handleSearch() : null

    return (
        <>
        <i className={`fa-solid fa-magnifying-glass ${classes["search-icon"]}`} onClick={handleSearch}></i>
        <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Search your city"
            className={classes.input}
            onKeyDown={handleKeyPress}
        />
        </>
    );
}
