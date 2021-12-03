import { Link } from "react-router-dom";

function Header(props) { 
    //inline style for the nav tag
    const navStyle = { 
        display: "flex", 
        justifyContent: "space-around",
        border: "3px solid aqua", 
        padding: "8px", 
        width: "90%", 
        margin: "auto",
    };
    return(
        <header>
            <h1>Joshua Bolanos</h1>
            <nav style={navStyle}>
                <Link to="/" style={{ textDecoration: 'none', color: "white"}}>
                    <div>HOME</div>
                </Link>
                <Link to="/about" style={{textDecoration: 'none', color: "white"}}>
                    <div>ABOUT</div>
                </Link>
                <Link to="/projects" style={{textDecoration: 'none', color: "white"}}>
                    <div>PROJECTS</div>
                </Link>
            </nav>
        </header>
    );
}

export default Header;