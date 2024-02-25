import logo from "../../assets/logo.png"
import classes from "./Header.module.css"
import SearchInput from "../SearchInput/SearchInput"
import { Link } from "react-router-dom"

export default function Header(props){
    return (
        <header className={classes.header}>
            <nav className={classes.navbar}>
                < Link to="/">
                    <div className={classes.mainNavItem}>
                        <img src={logo} alt="sun logo" />
                        <h3>Weatheria</h3>
                    </div>
                </Link>
                {props.showInput && <div className={classes["nav-input-container"]}>
                    < SearchInput />
                </div>}
            </nav>
        </header>
    )
}