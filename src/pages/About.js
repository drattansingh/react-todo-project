import react from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import SinglePage from "./SinglePage"

const About=(props)=>
{
    const path=useLocation().pathname

    console.log()
    return(
        <div className="about__content">
            <ul className="about__list">
                <li><Link to={'{path}/about-app'}>About App</Link></li>
                <li><Link to={'{path}/about-author'}>About Author</Link></li>
            </ul>
            <><Routes><Route path={'${path}/slug'} element={<SinglePage/>}></Route></Routes></>
        </div>
    )

}

export default About