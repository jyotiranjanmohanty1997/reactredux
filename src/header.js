
import { Link } from "react-router-dom";


const Navheader =()=>{
    return(

        <nav className="navbar navbar-expand-lg bg-primary p-2 text-white">
            <div className="container">
                <Link className="navbar-brand text-white" href="/"> 
                    <i class="fa-solid fa-registered fa-lg"></i>edux </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-5 mb-lg-0">
                        <li className="nav-item ps-5">
                            <Link className="nav-link active text-white" aria-current="page" to="/basic">
                            <i class="fa-solid fa-user"> </i> Basic</Link>
                        </li>
                        <li className="nav-item ps-4">
                            <Link className="nav-link text-white" to="/contact">
                            <i class="fa-solid fa-address-book"></i> Address</Link>
                        </li>
                        <li className="nav-item ps-4">
                            <Link className="nav-link text-white" to="/education">
                            <i class="fa-solid fa-school"></i> Education</Link>
                        </li>
                        <li className="nav-item ps-4">
                            <Link className="nav-link text-white" to="/experience">
                            <i class="fa-solid fa-briefcase"></i> Experience</Link>
                        </li>
                        <li className="nav-item ps-4">
                            <Link className="nav-link text-white" to="/viewall">
                            <i class="fa-sharp fa-solid fa-check-to-slot"></i> Viewall</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navheader;