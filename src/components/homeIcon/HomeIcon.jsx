import { Link , generatePath } from "react-router-dom";
import "./HomeIcon.scss"
import homeImage from "../../assets/icons/home-icon.svg"


export default function HomeIcon(){

    

    return (
        <div>
            <Link to={generatePath("/")}>
            <img src={homeImage} className="home-icon" alt="icon"/>
            </Link>
        </div>
    )
}