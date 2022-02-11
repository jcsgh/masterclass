import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav style={container}>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <img src="//images.squarespace-cdn.com/content/v1/5c881f812727be4b51cfb626/01a188a5-7882-49bc-bccd-e4beabd23c61/+MCL+Logo+scaled+down-01.png?format=1500w" style={img}></img>
            <Link to="/tour">Tour</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

const container = {
    display: 'flex',
    justifyContent: 'space-around',
}

const img = {
    width: "264px",
    maxWidth: "264px",
    height: "auto"
}

export default NavBar;