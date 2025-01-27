import { Link } from "react-router-dom"
import logo from "../Logos/logo.jpeg"

export default function Nav () {

    return (
        <div>
            <nav>
                <Link to="/"><img src={logo} alt="ghibli logo" /></Link>
                <Link to="/movies">Movies</Link>
                <Link to="/people">People</Link>
                <Link to="/locations">Locations</Link>
            </nav>
        </div>
    )
};