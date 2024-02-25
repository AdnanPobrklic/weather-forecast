import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import classes from "../styles/Home.module.css"
import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput/SearchInput";
import GridLoader from "react-spinners/GridLoader";

export default function Home(){

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        setTimeout( () => {
            setIsLoading(false)
        }, 1000)
    }, [])

    return (
        <>
            {
                isLoading ?
    
                <div className="loader-container">
                    <GridLoader color="#ff5800" size={40}/>
                </div>

                : (<> 
                    < Header showInput={false}/>
                    <main className={classes.main}>
                        <div className={classes["banner-div"]}></div>
                        <div className={classes["input-container"]}>
                            < SearchInput />
                        </div>
                    </main>
                    < Footer /> 
                </>)
            }
        </>
    )
}